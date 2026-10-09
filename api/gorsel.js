// api/gorsel.js
export default function handler(req, res) {
    // Vercel'in kasasındaki doğru çalışan şifreyi arayüze fısıldıyoruz
    res.status(200).json({ key: process.env.GEMINI_API_KEY });
}
