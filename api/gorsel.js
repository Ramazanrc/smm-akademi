// api/gorsel.js

export default async function handler(req, res) {
    // 1. CORS Ayarları (Gecikmelerde tarayıcının engellemesini önler)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Sadece POST istekleri kabul edilir.' });
    }

    const { imageBase64, mimeType } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'Sunucu Hatası: API Anahtarı bulunamadı (Environment Variable eksik).' });
    }

    try {
        // Fetch işlemine zaman aşımı kontrolü eklemiyoruz, Vercel'in kendi limitine güveniyoruz (Hobby'de 10s)
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: "Sen uzman bir SMMM Yeterlilik eğitmenisin. Ekteki görselde yer alan soruyu dikkatlice oku. Önce soruyu anla, ardından doğru cevabı bul ve neden bu cevabın doğru olduğunu, ilgili mevzuat veya muhasebe kurallarına dayanarak adım adım ve anlaşılır bir dille detaylıca açıkla." },
                        {
                            inlineData: {
                                mimeType: mimeType || 'image/jpeg',
                                data: imageBase64
                            }
                        }
                    ]
                }]
            })
        });

        // Hata ayıklama için response detaylarını alalım
        const responseText = await response.text();

        if (!response.ok) {
            let errorMessage = `Google API Hatası (${response.status}): `;
            try {
                const errorData = JSON.parse(responseText);
                errorMessage += errorData.error?.message || "Bilinmeyen API Hatası";
            } catch (e) {
                errorMessage += responseText.substring(0, 100); // Sadece ilk 100 karakteri al
            }
            return res.status(response.status).json({ error: errorMessage });
        }

        // Başarılıysa JSON olarak parse edip gönder
        try {
            const data = JSON.parse(responseText);
            res.status(200).json(data);
        } catch (e) {
             return res.status(500).json({ error: "Google'dan dönen veri JSON formatında değil." });
        }

    } catch (error) {
        res.status(500).json({ error: 'Sunucu (Fetch) Hatası: ' + error.message });
    }
}
