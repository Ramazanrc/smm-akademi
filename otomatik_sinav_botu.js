const admin = require('firebase-admin');
const fs = require('fs');

// GitHub Secrets'tan gizli anahtarı alıyoruz
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// Firebase'e Admin yetkisiyle bağlanıyoruz
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Bekleme (uyku) fonksiyonumuz
const bekle = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Yeni Kamp başladığında eski liderlik tablosunu temizleyen fonksiyon
async function eskiSonuclariTemizle() {
    console.log("🧹 Eski sonuçlar (karneler) temizleniyor...");
    const snapshot = await db.collection("kamp_sonuclari").get();
    
    // Firebase Batch ile toplu silme işlemi yapıyoruz
    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
    });
    
    await batch.commit();
    console.log("✅ Eski sonuçlar temizlendi. Tablo sıfırlandı.");
}

async function sinaviBaslat() {
    try {
        let anaSoruListesi = [];
        
        // Sadece dahil edilmesini istediğin 8 ana dersin JSON dosyaları
        const dersDosyalari = [
            "finansal_muhasebe.json",
            "finansal_analiz.json",
            "maliyet_muhasebesi.json",
            "meslek_hukuku.json",
            "muhasebe_denetimi.json",
            "sermaye_piyasasi.json",
            "temel_hukuk.json",
            "vergi_mevzuati.json"
        ];

        // Bot tüm dosyaları sırayla gezip soruları tek bir havuzda topluyor
        dersDosyalari.forEach(dosyaAdresi => {
            try {
                if (fs.existsSync(dosyaAdresi)) {
                    const hamData = JSON.parse(fs.readFileSync(dosyaAdresi, 'utf8'));
                    
                    // Soru formatını kontrol et ve havuza ekle
                    if (Array.isArray(hamData)) {
                        anaSoruListesi = anaSoruListesi.concat(hamData);
                    } else {
                        for (let kategori in hamData) {
                            if (Array.isArray(hamData[kategori])) {
                                anaSoruListesi = anaSoruListesi.concat(hamData[kategori]);
                            }
                        }
                    }
                    console.log(`✅ ${dosyaAdresi} başarıyla eklendi.`);
                } else {
                    console.log(`⚠️ Uyarı: ${dosyaAdresi} bulunamadı, atlanıyor.`);
                }
            } catch (err) {
                console.error(`❌ ${dosyaAdresi} okunurken hata:`, err.message);
            }
        });

        console.log(`🎯 Toplam ${anaSoruListesi.length} soru havuzda toplandı. Oturum başlatılıyor...`);
        
        // Eğer havuz boşsa sistemi durdur
        if (anaSoruListesi.length === 0) {
            console.log("❌ Havuzda hiç soru bulunamadı. Lütfen JSON dosyalarını kontrol edin. Sistem durduruluyor.");
            process.exit(1);
        }

        // Sınavdan önce eski puanları sıfırla
        await eskiSonuclariTemizle();

        const soruRef = db.collection('aktif_sinav').doc('guncel_soru');
        const limit = anaSoruListesi.length; // Toplanan tüm sorular sırayla sorulacak

        for (let i = 0; i < limit; i++) {
            let jsonSoru = anaSoruListesi[i];
            
            // smm_admin.html'deki VERİ DÖNÜŞTÜRME işlemi (A, B, C, D, E ayarlamaları)
            const harfler = ["A", "B", "C", "D", "E"];
            let dogruIndex = jsonSoru.answer !== undefined ? jsonSoru.answer : jsonSoru.correct;
            const gercekDogruCevap = harfler[dogruIndex]; 

            const temizSecenekler = {};
            for(let j = 0; j < 5; j++) {
                let hamMetin = jsonSoru.options[j] || "";
                temizSecenekler[harfler[j]] = hamMetin.replace(/^[A-E]\)\s*/i, '');
            }

            // Firebase'in anlayacağı formata çevrilmiş temiz veri
            const firebaseVerisi = {
                soru_metni: jsonSoru.q,
                secenekler: temizSecenekler,
                dogru_cevap: gercekDogruCevap,
                oylar: { A: 0, B: 0, C: 0, D: 0, E: 0 },
                soru_no: i + 1,
                toplam_soru: limit,
                baslangic_zamani: Date.now(),
                kamp_bitti: false
            };
            
            console.log(`Soru ${i + 1} / ${limit} ateşlendi!`);
            await soruRef.set(firebaseVerisi);

            // 90 sn sınav + 3 sn sonuç ekranı = 93 saniye bekleme
            const beklemeSuresiSn = 93; 
            console.log(`${beklemeSuresiSn} saniye bekleniyor...`);
            await bekle(beklemeSuresiSn * 1000); 
        }

        // Bütün sorular bitti, kapanış komutunu gönder
        console.log("Tüm sorular bitti, kamp kapanış sinyali gönderiliyor...");
        await soruRef.set({ kamp_bitti: true, zaman: Date.now() });
        console.log("Oturum başarıyla tamamlandı!");
        
        // İşlem bitince veritabanı bağlantısını sonlandır
        process.exit(0);

    } catch (error) {
        console.error("Sistem hata verdi:", error);
        process.exit(1);
    }
}

sinaviBaslat();