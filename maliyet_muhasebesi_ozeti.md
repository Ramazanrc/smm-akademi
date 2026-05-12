# 📊 MALİYET MUHASEBESİ - KAPSAMLI HAP BİLGİLER VE TABLOLAR ÖZETİ

## ⚠️ BÖLÜM 1: BİLİNMESİ GEREKEN ALTIN KURALLAR VE TUZAKLAR
* <strong class="text-danger">TUZAK 1 (Üretim Maliyeti Sınırı):</strong> Araştırma Geliştirme (750), Pazarlama Satış Dağıtım (760), Genel Yönetim (770) ve Finansman Giderleri (780) <strong class="text-danger">KESİNLİKLE üretim maliyetine (mamulün maliyetine) DAHİL EDİLMEZ!</strong> Bunlar doğrudan dönem gideri olarak gelir tablosuna (630, 631, 632) aktarılır.
* <strong class="text-danger">TUZAK 2 (Kapasite Sapması):</strong> Sadece **Normal Maliyet** ve **Tam Maliyet** sistemlerinde kapasite kavramı önemlidir. Atıl kapasite gideri (Çalışılmayan Kısım Gider ve Zararları), Normal Maliyet sisteminde maliyete eklenmez, doğrudan dönem giderine (680) atılır.
* <strong class="text-danger">TUZAK 3 (FİFO vs. AOM):</strong> Safha maliyetinde Ağırlıklı Ortalama Maliyet (AOM) yönteminde Dönem Başı Yarı Mamul (DBYM) maliyetleri hesaplamaya DAHİL edilir. FİFO (İlk Giren İlk Çıkar) yönteminde ise DBYM miktarları Eşdeğer Birim Sayısından (EBS) DÜŞÜLÜR!

---

## 🏗️ BÖLÜM 2: KAPSAMINA GÖRE MALİYET SİSTEMLERİ

Hangi maliyet sisteminin hangi üretim gider kalemlerini mamulün maliyetine dahil ettiğini gösteren kritik tablo:

<table style='width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 14px; text-align: center;'>
  <tr style='background-color: #2c3e50; color: white; font-weight: bold;'>
    <td style='border: 1px solid #ccc; padding: 8px; text-align: left;'>Üretim Gideri Kalemi</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Asal (Direkt) Maliyet</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Değişken Maliyet</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Normal Maliyet</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Tam Maliyet</td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 8px; text-align: left; font-weight:bold;'>710 DİMM (Direkt İlk Madde)</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Dahil</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Dahil</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Dahil</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Dahil</td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 8px; text-align: left; font-weight:bold;'>720 DİG (Direkt İşçilik)</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Dahil</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Dahil</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Dahil</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Dahil</td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 8px; text-align: left; font-weight:bold;'>730 GÜG (Değişken Kısmı)</td>
    <td style='border: 1px solid #ccc; padding: 8px; background-color:#fee;'>Hariç</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Dahil</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Dahil</td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Dahil</td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 8px; text-align: left; font-weight:bold;'>730 GÜG (Sabit Kısmı)</td>
    <td style='border: 1px solid #ccc; padding: 8px; background-color:#fee;'>Hariç</td>
    <td style='border: 1px solid #ccc; padding: 8px; background-color:#fee;'>Hariç</td>
    <td style='border: 1px solid #ccc; padding: 8px;'><strong class="text-danger">K.K.O. Oranında Dahil</strong></td>
    <td style='border: 1px solid #ccc; padding: 8px;'>Tamamı Dahil</td>
  </tr>
</table>

### 📌 Kapasite Formülleri:
* **Kapasite Kullanım Oranı (K.K.O):** `Fiili Kapasite / Normal Kapasite`
* **Kapasite Sapma Oranı:** `Atıl Kapasite / Normal Kapasite`
* **Atıl Kapasite:** `Normal Kapasite - Fiili Kapasite`
* *Not:* Sabit GÜG maliyete aktarılırken `(Sabit GÜG x K.K.O)` formülü kullanılır.

---

## 🔄 BÖLÜM 3: SAFHA MALİYETİ VE EŞDEĞER BİRİM SAYISI (EBS)

**Miktar Dengesi Altın Kuralı:**
<div style="background-color: #ecfdf5; color: #047857; padding: 12px 15px; border-radius: 6px; font-weight: bold; border-left: 6px solid #10b981; margin: 10px 0; font-size: 15px;">
  Üretime Giren (DBYM + Dönemde Başlanan) = Üretimden Çıkan (Tamamlanan + DSYM)
</div>

<table style='width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 14px;'>
  <tr style='background-color: #f8f9fa; font-weight: bold;'>
    <td style='border: 1px solid #ccc; padding: 8px; text-align: left;'>Eşdeğer Birim Sayısı (EBS) Hesaplama Şablonu</td>
  </tr>
  <tr><td style='border: 1px solid #ccc; padding: 8px;'>1. Önce "Üretimi Tamamlanan" miktar aynen yazılır.</td></tr>
  <tr><td style='border: 1px solid #ccc; padding: 8px;'>2. "DSYM (Dönem Sonu Yarı Mamul)", tamamlama derecesiyle çarpılarak (+) eklenir.</td></tr>
  <tr><td style='border: 1px solid #ccc; padding: 8px; background-color:#eef; font-weight:bold;'>= ORTALAMA EBS (AOM - Ağırlıklı Ortalama Maliyet için kullanılan miktar budur)</td></tr>
  <tr><td style='border: 1px solid #ccc; padding: 8px;'>3. "DBYM (Dönem Başı Yarı Mamul)", tamamlama derecesiyle çarpılarak (-) ÇIKARILIR.</td></tr>
  <tr><td style='border: 1px solid #ccc; padding: 8px; background-color:#fee; font-weight:bold;'>= DÖNEMİN EBS (FİFO - İlk Giren İlk Çıkar için kullanılan miktar budur)</td></tr>
</table>

---

## 📋 BÖLÜM 4: SATIŞLARIN MALİYETİ TABLOSU (SMT) VE GELİR TABLOSU ENTEGRASYONU

Üretim sürecinin baştan sona maliyet akışını gösterir. Her bir satır bir sonrakinin başlangıcıdır.

<table style='width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 14px;'>
  <tr style='background-color: #2c3e50; color: white; font-weight: bold;'>
    <td style='border: 1px solid #ccc; padding: 8px; text-align: left;' colspan="2">ÜRETİM VE SATIŞ MALİYETİ AKIŞI (MERDİVEN KALIBI)</td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 8px; width: 75%;'>710 DİMM + 720 Direkt İşçilik + 730 Genel Üretim Gideri</td>
    <td style='border: 1px solid #ccc; padding: 8px; text-align: right; font-weight:bold;'>= DÖNEMİN ÜRETİM GİDERİ</td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 8px;'>Dönemin Üretim Gideri (+) Dönem Başı Yarı Mamul (-) Dönem Sonu Yarı Mamul</td>
    <td style='border: 1px solid #ccc; padding: 8px; text-align: right; font-weight:bold; color: #27ae60;'>= ÜRETİLEN MAMUL MALİYETİ</td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 8px;'>Üretilen Mamul Maliyeti (+) Dönem Başı Mamul (-) Dönem Sonu Mamul</td>
    <td style='border: 1px solid #ccc; padding: 8px; text-align: right; font-weight:bold; color: #e74c3c;'>= SATILAN MAMUL MALİYETİ</td>
  </tr>
</table>


| Konu Başlığı ve Açıklaması | Tablo ve Detaylar |
| :--- | :--- |
| **1. Üretilen ve Satılan Mamul Maliyeti Akışı**<br><br>Bu tablo, üretim giderlerinin mamule dönüşüp satış aşamasına gelene kadarki akışını gösterir. | <table style="width:100%; border-collapse: collapse; font-size: 13px;"><tr style="background-color: #2c3e50; color: white;"><th style="padding: 6px; border: 1px solid #ccc;">(DÖNEMİN) ÜRETİM GİDERLERİ</th><th style="padding: 6px; border: 1px solid #ccc;">ÜRETİLEN MAMUL MALİYETİ</th><th style="padding: 6px; border: 1px solid #ccc;">SATILAN MAMUL MALİYETİ</th></tr><tr><td style="padding: 6px; border: 1px solid #ccc;">DİMM Gideri<br>D. İşçilik Gideri<br>G. Üretim Gideri</td><td style="padding: 6px; border: 1px solid #ccc;"><span style="color: #27ae60; font-weight: bold;">(+)</span> DB Yarı Mamul<br><span style="color: #e74c3c; font-weight: bold;">(-)</span> DS Yarı Mamul</td><td style="padding: 6px; border: 1px solid #ccc;"><span style="color: #27ae60; font-weight: bold;">(+)</span> DB Mamul<br><span style="color: #e74c3c; font-weight: bold;">(-)</span> DS Mamul</td></tr></table> |
| **2. Ticari Mal Maliyeti ve Gelir Tablosu Akışı**<br><br>Ticari malların maliyeti ile işletmenin tüm maliyetlerinin Gelir Tablosuna (Kâr/Zarar) aktarıldığı tablo yapısıdır. | <table style="width:100%; border-collapse: collapse; font-size: 13px;"><tr style="background-color: #2c3e50; color: white;"><th style="padding: 6px; border: 1px solid #ccc;">SATILAN TİCARİ MALIN MALİYETİ</th><th style="padding: 6px; border: 1px solid #ccc;">BRÜT SATIŞ KÂRI veya ZARARI</th><th style="padding: 6px; border: 1px solid #ccc;">FAALİYET KÂRI veya ZARARI</th></tr><tr><td style="padding: 6px; border: 1px solid #ccc;"><span style="color: #27ae60; font-weight: bold;">(+)</span> DB Ticari Mal Stoğu<br><span style="color: #27ae60; font-weight: bold;">(+)</span> Dönem İçi Ticari Mal Alışı<br><span style="color: #27ae60; font-weight: bold;">(+)</span> Dönem İçi Alış Gideri<br><span style="color: #e74c3c; font-weight: bold;">(-)</span> Alış İade<br><span style="color: #e74c3c; font-weight: bold;">(-)</span> Alış İskonto<br><span style="color: #e74c3c; font-weight: bold;">(-)</span> DS Ticari Mal Stoğu</td><td style="padding: 6px; border: 1px solid #ccc;">60 Brüt Satışlar <span style="color: #27ae60; font-weight: bold;">(+)</span><br>61 Satış İndirimleri <span style="color: #e74c3c; font-weight: bold;">(-)</span><br><strong style="color: #2980b9;">NET SATIŞLAR</strong><br>62 Satışların Maliyeti <span style="color: #e74c3c; font-weight: bold;">(-)</span><br><i>- 620 Satılan Mamul Maliyeti</i><br><i>- 621 Satılan Tic. Malın Maliyeti</i><br><i>- 622 Satılan Hizmetin Maliyeti</i></td><td style="padding: 6px; border: 1px solid #ccc;"><strong style="color: #d35400;">Brüt Satış Kârı veya Zararı</strong><br>63 Faaliyet Giderleri <span style="color: #e74c3c; font-weight: bold;">(-)</span><br><i>- 630 Arge Gideri</i><br><i>- 631 Paz. Sat. Dağıtım Gideri</i><br><i>- 632 Genel Yönetim Gideri</i></td></tr></table> |
| **3. GÜG (Genel Üretim Giderleri) Alt Kalemleri**<br><br>SMT'deki "(Dönemin) Üretim Giderleri" başlığının altını dolduran ve maliyete dahil edilen kalemlerdir. | <table style="width:100%; border-collapse: collapse; font-size: 13px;"><tr style="background-color: #2c3e50; color: white;"><th style="padding: 6px; border: 1px solid #ccc;">730 GÜG İÇERİĞİ (Dönemin Üretim Giderleri)</th></tr><tr><td style="padding: 6px; border: 1px solid #ccc; background-color: #f8f9fa;">Endirekt Malzeme / İşçilik<br>Yardımcı Malzeme<br>İşletme Malzemesi<br>Fabrika Memur Ücret ve Giderleri<br>Dışarıdan Sağlanan Fayda<br>Çeşitli Giderler<br>Vergi, Resim Harç Gideri<br>Amortisman (Üretim Departmanı)</td></tr></table> |
| **4. SMT Hesaplama Kalıpları ve Stok Değerleme**<br><br>Sorularda dönem geçişlerini ve stok değerleme yöntemlerini yakalamak için bilinmesi gereken kurgudur. | <table style="width:100%; border-collapse: collapse; font-size: 13px;"><tr style="background-color: #2c3e50; color: white;"><th style="padding: 6px; border: 1px solid #ccc;">İKİ DÖNEM (MERDİVEN KALIBI)</th><th style="padding: 6px; border: 1px solid #ccc;">TEK DÖNEM (TAZE EKMEK KALIBI)</th></tr><tr><td style="padding: 6px; border: 1px solid #ccc;">1. Dönemin <span style="color: #e74c3c; font-weight: bold;">(-)</span> DS Yarı Mamulü, 2. Dönemin <span style="color: #27ae60; font-weight: bold;">(+)</span> DB Yarı Mamulü olur.<br><br>1. Dönemin <span style="color: #e74c3c; font-weight: bold;">(-)</span> DS Mamulü, 2. Dönemin <span style="color: #27ae60; font-weight: bold;">(+)</span> DB Mamulü olur.</td><td style="padding: 6px; border: 1px solid #ccc;"><strong style="color: #2c3e50;">Satılabilir Mamul =</strong> Bu dönem üretilen + Önceki dönemden gelen<br><br><strong style="color: #8e44ad;">FİFO (İlk Giren İlk Çıkar):</strong> Önceki dönemden gelenler öncelikle satılır. Bu yüzden DS kalanlar bu dönemin üretimindendir.<br><br><strong style="color: #d35400;">AĞIRLIKLI ORTALAMA MALİYET:</strong> Bu dönem ve önceki dönem verileri toplanır, üretim miktarına bölünür. Bu sayede ortalama bir fiyat belirlenir. Tüm veriler bu ortalama fiyat üzerinden hesaplanır.</td></tr></table> |
---

## ⚖️ BÖLÜM 5: ORTAK ÜRÜNLER VE GİDER DAĞITIMLARI

Ortak (Birleşik) maliyetlerin ürünlere dağıtımında 4 temel yöntem vardır:
1. **Miktar Yöntemi:** Üretilen miktar (kg, ton) baz alınır.
2. **Katsayı Yöntemi:** (Üretim Miktarı x Katsayı) çarpımı üzerinden ağırlıklı dağıtım yapılır.
3. **Satış (Piyasa) Değeri Yöntemi:** (Üretim Miktarı x Birim Satış Fiyatı) baz alınır.
4. **Net Satış Değeri Yöntemi:** Toplam satış değerinden "Ek Maliyet" düşüldükten sonra kalan net kazanca göre dağıtılır.

### 🏢 Gider Dağıtım Aşamaları:
* **Birinci Dağıtım:** Giderlerin (Kira, Elektrik, Amortisman) ölçülere göre (m², Kw/h, Makine saati) tüm bölümlere dağıtılmasıdır.
* **İkinci Dağıtım:** Yardımcı Gider Yerlerindeki (Yemekhane, Bakım) tutarların Esas Üretim Yerlerine (Kesim, Dikim) aktarılmasıdır. 
  * *Doğrudan Dağıtım:* Yardımcılar sadece esas yerlere pay verir, birbirlerine vermez.
  * *Kademeli Dağıtım:* Yardımcılar birbirine pay verir ama kapanan bir daha pay alamaz.
  * *Matematiksel Dağıtım:* Denklem (Örn: X = 200.000 + 0,10Y) kurularak karşılıklı hizmet %100 hesaplanır.
* **Üçüncü Dağıtım:** Esas üretim yerlerinde toplanan devasa maliyetlerin üretilen mamullere/siparişlere yüklenmesidir.

---

## 🎯 BÖLÜM 6: BÜTÇE FARKLARI (STANDART MALİYETLER)

* **Ana Kural:** Sapma **OLUMLU** ise Fark Hesabı **ALACAK** kalanı verir (Gelir gibi). Sapma **OLUMSUZ** ise Fark Hesabı **BORÇ** kalanı verir (Gider gibi).
* Tahmin = Standart = Planlanan | Gerçek = Fiili = Kullanılan = Harcanan

<table style='width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 14px;'>
  <tr style='background-color: #f8f9fa; font-weight: bold;'>
    <td style='border: 1px solid #ccc; padding: 12px; width: 30%;'>Sapma (Fark) Türü</td>
    <td style='border: 1px solid #ccc; padding: 12px;'>Hesaplama Formülü</td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 12px; font-weight:bold; color: #2c3e50;'>DİMM Fiyat Farkı</td>
    <td style='border: 1px solid #ccc; padding: 12px;'><code style="background-color: #fef3c7; color: #d97706; padding: 4px 8px; border-radius: 4px; font-weight: bold;">(Fiili Fiyat - Standart Fiyat) × Fiili Miktar</code></td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 12px; font-weight:bold; color: #2c3e50;'>DİMM Miktar Farkı</td>
    <td style='border: 1px solid #ccc; padding: 12px;'><code style="background-color: #fef3c7; color: #d97706; padding: 4px 8px; border-radius: 4px; font-weight: bold;">(Fiili Miktar - Standart Miktar) × Standart Fiyat</code></td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 12px; font-weight:bold; color: #2c3e50;'>DİG Ücret Farkı</td>
    <td style='border: 1px solid #ccc; padding: 12px;'><code style="background-color: #e0e7ff; color: #2563eb; padding: 4px 8px; border-radius: 4px; font-weight: bold;">(Fiili Ücret - Standart Ücret) × Fiili Süre</code></td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 12px; font-weight:bold; color: #2c3e50;'>DİG Süre Farkı</td>
    <td style='border: 1px solid #ccc; padding: 12px;'><code style="background-color: #e0e7ff; color: #2563eb; padding: 4px 8px; border-radius: 4px; font-weight: bold;">(Fiili Süre - Standart Süre) × Standart Ücret</code></td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 12px; font-weight:bold; color: #2c3e50;'>GÜG Bütçe Farkı</td>
    <td style='border: 1px solid #ccc; padding: 12px;'><code style="background-color: #d1fae5; color: #4338ca; padding: 4px 8px; border-radius: 4px; font-weight: bold;">Fiili GÜG - (Fiili İş Hacminde Bütçelenen GÜG)</code></td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 12px; font-weight:bold; color: #2c3e50;'>GÜG Verimlilik Farkı</td>
    <td style='border: 1px solid #ccc; padding: 12px;'><code style="background-color: #d1fae5; color: #4338ca; padding: 4px 8px; border-radius: 4px; font-weight: bold;">(Fiili İş Hacmi - Standart Miktar) × Standart Değişken GÜG Yükleme Oranı</code></td>
  </tr>
  <tr>
    <td style='border: 1px solid #ccc; padding: 12px; font-weight:bold; color: #2c3e50;'>GÜG Kapasite Farkı</td>
    <td style='border: 1px solid #ccc; padding: 12px;'><code style="background-color: #d1fae5; color: #4338ca; padding: 4px 8px; border-radius: 4px; font-weight: bold;">(Bütçelenen Kapasite - Fiili Kapasite) × Standart Sabit GÜG Yükleme Oranı</code></td>
  </tr>
</table>

---

## 👨‍🔧 BÖLÜM 7: İŞÇİLİK GİDERLERİ YÖNETİMİ (BÜYÜK TUZAK)

Sınavda 720 ve 730 ayrımı kesinlikle sorulur. Hangi işçilik nereye gider?

* **720 Direkt İşçilik Giderleri (DİG):** * Üretimi bizzat yapan montaj/kesim işçisinin normal ücreti.
  * *TUZAK:* "Özel bir siparişi yetiştirmek için" yapılan fazla mesainin <strong class="text-danger">ZAMLI KISMI DAHİL</strong> tamamı 720'ye yazılır!
* **730 Genel Üretim Giderleri (GÜG / Endirekt İşçilik):** * Üretimi bizzat yapmayanlar (Güvenlik, Temizlik, Bakım, Yemekhane, Ustabaşı, Fabrika Müdürü vb.).
  * Yıllık izin ücretleri, hafta sonu tatil ücretleri, sosyal yardımlar ve ikramiyeler.
  * *TUZAK:* "Kapasite yetersizliği / Genel üretim yoğunluğu" sebebiyle yapılan fazla mesainin <strong class="text-danger">SADECE ZAMLI KISMI</strong> 730'a yazılır (Normal mesai kısmı 720'de kalır).
  * Engellenebilir nitelikte (hammadde geç gelmesi vb.) boşa geçen zaman ücretleri.
* **680 Çalışmayan Kısım Gider ve Zararları:**
  * Engellenemez nitelikte (Doğal afet, genel elektrik kesintisi vb.) boşa geçen zaman ücretleri üretim maliyetine (720/730) eklenmez, buraya atılır.