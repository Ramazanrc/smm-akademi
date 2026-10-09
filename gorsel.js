// api/gorsel.js
export const maxDuration = 60; // Vercel'in süreyi kesmemesi için limiti 60 saniyeye çıkarıyoruz

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Sadece POST istekleri kabul edilir.' });
    }

    const { imageBase64, mimeType } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'Sunucu Hatası: API Anahtarı bulunamadı.' });
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: "Sen uzman bir SMMM (Serbest Muhasebeci Mali Müşavir) eğitmenisin. Ekteki görselde yer alan soruyu dikkatlice oku. Önce soruyu anla, ardından doğru cevabı bul ve neden bu cevabın doğru olduğunu, ilgili mevzuat veya muhasebe kurallarına dayanarak adım adım ve anlaşılır bir dille detaylıca açıkla." },
                        {
                            inlineData: {  // Google'ın beklediği doğru format (Büyük D harfi)
                                mimeType: mimeType, // Google'ın beklediği doğru format (Büyük T harfi)
                                data: imageBase64
                            }
                        }
                    ]
                }]
            })
        });

        const data = await response.json();
        
        // Gemini'den hata gelirse yakala
        if (!response.ok) {
            throw new Error(data.error?.message || "Google Gemini API yanıt vermedi.");
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Görsel analizi hatası: ' + error.message });
    }
}