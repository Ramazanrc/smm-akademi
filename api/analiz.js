// api/analiz.js
export default async function handler(req, res) {
    // Sadece güvenlik duvarımızdan gelen POST isteklerini kabul et
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Sadece POST istekleri kabul edilir.' });
    }

    const { prompt } = req.body;
    
    // SİHİRLİ NOKTA: Vercel'in şifreli kasasından senin ücretli anahtarını gizlice çeker!
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'Sunucu yapılandırma hatası: API anahtarı bulunamadı.' });
    }

    try {
        // İsteği Google'a sunucu üzerinden (kullanıcıdan gizli) atıyoruz
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        
        if (data.error) throw new Error(data.error.message);
        
        // Sonucu kullanıcıya güvenle geri gönderiyoruz
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Analiz sırasında hata oluştu: ' + error.message });
    }
}
