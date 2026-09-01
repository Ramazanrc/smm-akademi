const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const bekle = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function eskiSonuclariTemizle() {
    console.log("🧹 Eski sonuçlar (karneler) temizleniyor...");
    const snapshot = await db.collection("kamp_sonuclari").get();
    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
    });
    await batch.commit();
    console.log("✅ Eski sonuçlar temizlendi. Tablo sıfırlandı.");
}

async function sinaviBaslat() {
    try {
        const now = new Date();
        const tsiZaman = new Date(now.getTime() + (3 * 60 * 60 * 1000));
        const gun = tsiZaman.getUTCDay();
        const saat = tsiZaman.getUTCHours();

        let secilenDers = "";

        if (saat === 23) {
            secilenDers = "vergi_mevzuati.json";
            console.log("⏰ 23:15 Gece Seansı Tespit Edildi: Vergi Mevzuatı");
        } else {
            const program = {
                1: "finansal_muhasebe.json",
                2: "muhasebe_denetimi.json",
                3: "temel_hukuk.json",
                4: "finansal_analiz.json",
                5: "meslek_hukuku.json",
                6: "vergi_mevzuati.json",
                0: "sermaye_piyasasi.json"
            };
            secilenDers = program[gun];
            console.log(`⏰ 22:30 Seansı (veya Manuel Test) Tespit Edildi. Günün Dersi: ${secilenDers}`);
        }

        if (!fs.existsSync(secilenDers)) {
            console.error(`❌ HATA: ${secilenDers} dosyası bulunamadı!`);
            process.exit(1);
        }

        const hamData = JSON.parse(fs.readFileSync(secilenDers, 'utf8'));
        let anaSoruListesi = [];
        
        if (Array.isArray(hamData)) {
            anaSoruListesi = hamData;
        } else {
            for (let kategori in hamData) {
                if (Array.isArray(hamData[kategori])) {
                    anaSoruListesi = anaSoruListesi.concat(hamData[kategori]);
                }
            }
        }

        console.log(`🎯 ${secilenDers} dosyasından toplam ${anaSoruListesi.length} soru bulundu.`);
        
        if (anaSoruListesi.length === 0) {
            console.log("❌ Havuzda hiç soru bulunamadı. Sistem durduruluyor.");
            process.exit(1);
        }

        // --- YENİ EKLENEN KISIM: KARIŞTIR VE 20 SORU SEÇ ---
        // Fisher-Yates algoritması ile tüm listeyi rastgele karıştırıyoruz
        for (let i = anaSoruListesi.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [anaSoruListesi[i], anaSoruListesi[j]] = [anaSoruListesi[j], anaSoruListesi[i]];
        }
        // Karışmış listeden sadece ilk 20 soruyu kesip alıyoruz (Eğer havuzda 20'den az soru varsa olanı alır)
        const hedefSoruSayisi = 20;
        anaSoruListesi = anaSoruListesi.slice(0, hedefSoruSayisi);
        
        console.log(`🔀 Sorular karıştırıldı. Rastgele seçilen ${anaSoruListesi.length} soru ile oturum başlıyor...`);
        // --------------------------------------------------

        await eskiSonuclariTemizle();
        const soruRef = db.collection('aktif_sinav').doc('guncel_soru');
        const limit = anaSoruListesi.length;

        for (let i = 0; i < limit; i++) {
            let jsonSoru = anaSoruListesi[i];
            
            const harfler = ["A", "B", "C", "D", "E"];
            let dogruIndex = jsonSoru.answer !== undefined ? jsonSoru.answer : jsonSoru.correct;
            const gercekDogruCevap = harfler[dogruIndex]; 

            const temizSecenekler = {};
            for(let j = 0; j < 5; j++) {
                let hamMetin = jsonSoru.options[j] || "";
                temizSecenekler[harfler[j]] = hamMetin.replace(/^[A-E]\)\s*/i, '');
            }

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

            const beklemeSuresiSn = 93; 
            console.log(`${beklemeSuresiSn} saniye bekleniyor...`);
            await bekle(beklemeSuresiSn * 1000); 
        }

        console.log("Tüm sorular bitti, kamp kapanış sinyali gönderiliyor...");
        await soruRef.set({ kamp_bitti: true, zaman: Date.now() });
        console.log("Oturum başarıyla tamamlandı!");
        
        process.exit(0);

    } catch (error) {
        console.error("Sistem hata verdi:", error);
        process.exit(1);
    }
}

sinaviBaslat();