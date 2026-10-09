export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Sadece POST desteklenir.' });

    const { base64String } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) return res.status(500).json({ error: 'Vercel API Anahtarı bulunamadı.' });

    try {
        // En istikrarlı amiral gemisi modeli kullanıyoruz
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: "Sen uzman bir SMMM Yeterlilik eğitmenisin. Ekteki görselde yer alan soruyu dikkatlice oku. Önce soruyu anla, ardından doğru cevabı bul ve neden bu cevabın doğru olduğunu, ilgili mevzuat veya muhasebe kurallarına dayanarak adım adım ve anlaşılır bir dille detaylıca açıkla." },
                        { inlineData: { mimeType: 'image/jpeg', data: base64String } }
                    ]
                }]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data.error?.message || "Google API Hatası" });
        }

        return res.status(200).json({ result: data.candidates[0].content.parts[0].text });

    } catch (error) {
        return res.status(500).json({ error: "Sunucu hatası: " + error.message });
    }
}
