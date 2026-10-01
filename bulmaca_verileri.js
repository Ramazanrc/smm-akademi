// =======================================================
// --- SMM AKADEMİ: GENİŞLETİLMİŞ DEVASA BULMACA HAVUZU ---
// =======================================================
const bulmacaHavuzu = {
    "borclar": [
        {
            seviye: 1,
            baslik: "Borçlar Hukuku - Seviye 1",
            data: [
                { id: 1, answer: "GABİN", clue: "Bir tarafın darda kalmasından veya deneyimsizliğinden yararlanarak edimler arasında yaratılan açık oransızlıktır.", row: 2, col: 1, dir: "across" },
                { id: 2, answer: "İBRA", clue: "Amacı borçluyu ifası mümkün borcundan tam ya da kısmen kurtarmak olan sözleşmedir.", row: 2, col: 4, dir: "down" },
                { id: 3, answer: "ZARAR", clue: "Bir kişinin malvarlığında meydana gelen irade dışı eksilmedir.", row: 4, col: 2, dir: "across" },
                { id: 4, answer: "REHİN", clue: "Alacağı güvence altına almak için verilen ayni teminattır.", row: 4, col: 6, dir: "down" },
                { id: 5, answer: "HATA", clue: "Esaslı yanılma hallerinden biri olan, sözleşmenin niteliğinde veya konusunda yanılmadır.", row: 6, col: 6, dir: "across" }
            ]
        },
        {
            seviye: 2,
            baslik: "Borçlar Hukuku - Seviye 2",
            data: [
                { id: 1, answer: "TAKAS", clue: "Aynı cinsten muaccel borçları bulunan iki kişiden birinin tek taraflı iradesiyle borçları sona erdirilmesidir.", row: 1, col: 1, dir: "across" },
                { id: 2, answer: "KABUL", clue: "Öneriye (icaba) verilen ve sözleşmeyi kuran olumlu cevaptır.", row: 1, col: 3, dir: "down" },
                { id: 3, answer: "BORÇLU", clue: "Borç ilişkisinin edilgen tarafını (pasif süjesini) oluşturan taraftır.", row: 3, col: 3, dir: "across" },
                { id: 4, answer: "UYARI", clue: "Vadesi geçtiği halde borcunu ödemeyen borçluyu temerrüte düşürmek için yapılan ihtardır.", row: 3, col: 8, dir: "down" },
                { id: 5, answer: "YETKİ", clue: "Temsilcinin hukuki işlem yapabilmesi için kendisine verilen haktır.", row: 4, col: 8, dir: "across" }
            ]
        },
        {
            seviye: 3,
            baslik: "Borçlar Hukuku - Seviye 3 (Kilit Noktalar)",
            data: [
                { id: 1, answer: "ZAMANAŞIMI", clue: "Alacaklının alacağı talep, dava ve icra yoluyla takip hakkını sürekli olarak engelleyen savunmadır.", row: 4, col: 1, dir: "across" },
                { id: 2, answer: "CEZA", clue: "Borcunu hiç veya gereğince yerine getirmediği takdirde ifa etmeyi önceden yüklendiği ... koşuludur.", row: 1, col: 4, dir: "down" },
                { id: 3, answer: "ŞART", clue: "Bir sözleşmenin hüküm ifade etmesinin gerçekleşip gerçekleşmeyeceği bilinmeyen bir olguya (koşula) bağlanmasıdır.", row: 4, col: 7, dir: "down" },
                { id: 4, answer: "ZARAR", clue: "Haksız fiilin maddi ve manevi olarak malvarlığında yarattığı irade dışı eksilmedir.", row: 5, col: 6, dir: "across" },
                { id: 5, answer: "İRADE", clue: "Sözleşmenin meydana gelebilmesi için gerekli olan açıklama (beyan) türüdür.", row: 4, col: 8, dir: "down" }
            ]
        }
    ],
    "is_hukuku": [
        {
            seviye: 1,
            baslik: "İş Hukuku - Seviye 1",
            data: [
                { id: 1, answer: "SENDİKA", clue: "İşçilerin veya işverenlerin ekonomik haklarını korumak için en az 7 kişiyle oluşturdukları kuruluştur.", row: 2, col: 1, dir: "across" },
                { id: 2, answer: "SÖZLEŞME", clue: "İş görme, ücret ve bağımlılık unsurlarından oluşan hukuki bağdır.", row: 1, col: 1, dir: "down" },
                { id: 3, answer: "KIDEM", clue: "İşçinin her bir yıllık çalışması için en az 30 günlük ücreti tutarında ödenen tazminattır.", row: 2, col: 6, dir: "down" },
                { id: 4, answer: "ÜCRET", clue: "İşveren tarafından işçiye çalışma karşılığında ödenen bedeldir.", row: 5, col: 3, dir: "across" },
                { id: 5, answer: "TATİL", clue: "İşçinin haklı sebep olmaksızın ardı ardına 2 işgünü devam etmediği durumlarda feshin gerekçesi olan günlerdir.", row: 5, col: 7, dir: "down" }
            ]
        },
        {
            seviye: 2,
            baslik: "İş Hukuku - Seviye 2",
            data: [
                { id: 1, answer: "SÜRE", clue: "Belirli süreli iş sözleşmelerinin en fazla bir defa uzatılabildiği zaman dilimidir.", row: 1, col: 1, dir: "down" },
                { id: 2, answer: "ÜCRET", clue: "Fazla çalışma için normal çalışma bedelinin saat başına %50 yükseltilmesiyle ödenen tutardır.", row: 2, col: 1, dir: "across" },
                { id: 3, answer: "ENGELLİ", clue: "Çalışma gücünün en az %40'ından yoksun olduğu belgelenen ve belli kotalarla çalıştırılması zorunlu kişidir.", row: 4, col: 1, dir: "across" },
                { id: 4, answer: "GÜVENLİK", clue: "İşçinin kendi isteği veya savsaması yüzünden işyerinde tehlikeye düşürdüğü temel unsurdur.", row: 4, col: 3, dir: "down" },
                { id: 5, answer: "İZİN", clue: "Kadın işçilere doğumdan önce 8 hafta, doğumdan sonra 8 hafta verilen hakkın adıdır.", row: 8, col: 3, dir: "across" }
            ]
        },
        {
            seviye: 3,
            baslik: "İş Hukuku - Seviye 3 (Kilit Noktalar)",
            data: [
                { id: 1, answer: "TAZMİNAT", clue: "İşçinin haksız yere işten çıkarılması durumunda aldığı toplu paradır (Kıdem/İhbar ...ı).", row: 4, col: 1, dir: "across" },
                { id: 2, answer: "HAFTA", clue: "Kadın işçilere doğumdan önce ve sonra toplam 16 ... izin verilir.", row: 3, col: 2, dir: "down" },
                { id: 3, answer: "İZİN", clue: "İşçiye evlenmesi veya evlat edinmesi durumunda 3 gün verilen ücretli haktır.", row: 4, col: 5, dir: "down" },
                { id: 4, answer: "ASGARİ", clue: "Ücret tespit komisyonu tarafından en geç 2 yılda bir belirlenen taban ücrettir.", row: 4, col: 7, dir: "down" },
                { id: 5, answer: "SENDİKA", clue: "İşçi veya işverenlerin ortak çıkarlarını korumak için kurdukları tüzel kişiliktir.", row: 5, col: 7, dir: "across" },
                { id: 6, answer: "TATİL", clue: "İşçinin haklı sebep olmaksızın ardı ardına 2 işgünü devam etmediği (... günü) fesih hakkı doğar.", row: 6, col: 2, dir: "across" }
            ]
        }
    ],
    "ticaret": [
        {
            seviye: 1,
            baslik: "Ticaret Hukuku - Seviye 1",
            data: [
                { id: 1, answer: "TACİR", clue: "Bir ticari işletmeyi, kısmen de olsa, kendi adına işleten kişiye denir.", row: 1, col: 1, dir: "across" },
                { id: 2, answer: "CİRO", clue: "Emre yazılı senetlerin devri için senedin arkasına yapılan devir işlemidir.", row: 1, col: 3, dir: "down" },
                { id: 3, answer: "ŞİRKET", clue: "Kollektif, Komandit, Anonim ve Limited gibi türleri olan ticaret ortaklığıdır.", row: 2, col: 2, dir: "across" },
                { id: 4, answer: "BİLANÇO", clue: "Komanditer ortakların iş yılı sonunda incelemeye yetkili olduğu finansal tablodur.", row: 2, col: 3, dir: "across" },
                { id: 5, answer: "ORTAK", clue: "Limited şirketlerde sayısı elliyi aşamayan sermaye sahiplerine verilen addır.", row: 4, col: 3, dir: "across" }
            ]
        },
        {
            seviye: 2,
            baslik: "Ticaret Hukuku - Seviye 2",
            data: [
                { id: 1, answer: "ŞUBE", clue: "İç ilişkilerinde merkeze bağlı, dış faaliyetlerinde bağımsız olan ve tescili zorunlu birimdir.", row: 2, col: 1, dir: "across" },
                { id: 2, answer: "ŞİRKET", clue: "Ticaret siciline tescil ile tüzel kişilik kazanan ticari organizasyondur.", row: 2, col: 1, dir: "down" },
                { id: 3, answer: "REHİN", clue: "Alacağı güvence altına almak için taşınırlar üzerinde kurulan haktır.", row: 4, col: 1, dir: "across" },
                { id: 4, answer: "HAKSIZ", clue: "Müşterileri, meslekî itibarı zarar gören kimsenin açtığı rekabet davasının adıdır (.... Rekabet).", row: 4, col: 3, dir: "down" },
                { id: 5, answer: "ZARAR", clue: "Haksız rekabet veya poliçenin ödenmemesi durumunda talep edilen maddi kayıptır.", row: 9, col: 3, dir: "across" }
            ]
        },
        {
            seviye: 3,
            baslik: "Ticaret Hukuku - Seviye 3 (Kilit Noktalar)",
            data: [
                { id: 1, answer: "TESCİL", clue: "Ticari işletmenin açıldığı günden itibaren 15 gün içinde ticaret siciline yapılması zorunlu işlemdir.", row: 3, col: 2, dir: "across" },
                { id: 2, answer: "POLİÇE", clue: "Görüldüğünde, görüldükten belirli bir süre sonra veya belirli bir günde ödenmek üzere düzenlenen kambiyo senedidir.", row: 1, col: 7, dir: "down" },
                { id: 3, answer: "BİLANÇO", clue: "Komanditer ortakların iş yılı sonunda doğruluğunu incelemeye yetkili olduğu temel finansal tablodur.", row: 5, col: 2, dir: "across" },
                { id: 4, answer: "VEKİL", clue: "Ticari temsilci ve pazarlamacı ile birlikte Borçlar Kanunu'nda düzenlenen bağımlı tacir yardımcısıdır (Ticari ...).", row: 2, col: 3, dir: "down" }
            ]
        }
    ],
    "meslek": [
        {
            seviye: 1,
            baslik: "Meslek Hukuku - Seviye 1",
            data: [
                { id: 1, answer: "YEMİNLİ", clue: "Mesleğe fiilen başlamadan önce Asliye Ticaret Mahkemesinde ant içen mali müşavirdir.", row: 2, col: 1, dir: "across" },
                { id: 2, answer: "DİSİPLİN", clue: "3 asıl ve 1 yedek üyeden oluşan, kararlarına 30 gün içinde itiraz edilebilen inceleme kuruludur.", row: 1, col: 4, dir: "down" },
                { id: 3, answer: "SİCİL", clue: "Ruhsat alan meslek mensuplarının kaydedildiği resmi kütüktür.", row: 4, col: 3, dir: "across" },
                { id: 4, answer: "STAJ", clue: "SMMM adayları için süresi 3 yıl olan ve TESMER programı çerçevesinde yapılan eğitimdir.", row: 4, col: 3, dir: "down" },
                { id: 5, answer: "LEVHA", clue: "Yasal düzenlemelere aykırı asılması halinde meslek mensubuna 'uyarma' cezası verilen tabeladır.", row: 4, col: 7, dir: "down" }
            ]
        },
        {
            seviye: 2,
            baslik: "Meslek Hukuku - Seviye 2",
            data: [
                { id: 1, answer: "KURUL", clue: "Odanın en yüksek organı olan Genel ... 3 yılda bir Mayıs ayında toplanır.", row: 1, col: 2, dir: "down" },
                { id: 2, answer: "RUHSAT", clue: "Meslek mensuplarına TÜRMOB tarafından verilen ve geri alınmasına 'Meslekten Men' denilen belgedir.", row: 2, col: 1, dir: "across" },
                { id: 3, answer: "REKLAM", clue: "Yasağına uyulmaması durumunda meslek mensubuna kınama cezası gerektiren eylemdir.", row: 3, col: 2, dir: "across" },
                { id: 4, answer: "BELGE", clue: "Büro edinenlerin odaya kayıt olduktan 3 ay içinde almak zorunda olduğu Büro Tescil Evrakıdır (Kök kelime).", row: 1, col: 5, dir: "down" },
                { id: 5, answer: "YEMİN", clue: "YMM'lerin Asliye Ticaret Mahkemesinde mesleğe başlamadan önce içtikleri anttır.", row: 5, col: 4, dir: "across" }
            ]
        },
        {
            seviye: 3,
            baslik: "Meslek Hukuku - Seviye 3 (Kilit Noktalar)",
            data: [
                { id: 1, answer: "UYARMA", clue: "Müşterinin işlerine karşı kayıtsız kalınması veya yasalara aykırı tabela asılması durumunda verilen cezadır.", row: 2, col: 2, dir: "across" },
                { id: 2, answer: "REKLAM", clue: "Yasağına uyulmaması durumunda kınama cezası uygulanmasını gerektiren faaliyettir.", row: 2, col: 5, dir: "down" },
                { id: 3, answer: "AİDAT", clue: "Haklı gerekçe olmaksızın ödenmemesi durumunda uyarma cezası uygulanan oda borcudur.", row: 6, col: 2, dir: "across" },
                { id: 4, answer: "CEZA", clue: "Meslek mensuplarına disiplin kurulu tarafından verilen uyarma, kınama gibi yaptırımların genel adıdır.", row: 5, col: 4, dir: "down" }
            ]
        }
    ],
    "vergi": [
        {
            seviye: 1,
            baslik: "Vergi Hukuku - Seviye 1",
            data: [
                { id: 1, answer: "MUAF", clue: "Gelir vergisinden ... esnaf veya kurumlar vergisinden ... olanlar defter tutmak zorunda değildirler.", row: 2, col: 2, dir: "down" },
                { id: 2, answer: "MÜKELLEF", clue: "Vergi kanunlarına göre kendisine vergi borcu düşen gerçek veya tüzel kişidir.", row: 2, col: 2, dir: "across" },
                { id: 3, answer: "VADE", clue: "Tahsil zamanaşımının (5 yıl) işlemeye başladığı tarihtir.", row: 1, col: 8, dir: "down" },
                { id: 4, answer: "DEFTER", clue: "Faaliyetine devam eden işletmelerde yenisi 12. ayda tasdik olunan ticari kayıttır.", row: 3, col: 8, dir: "across" },
                { id: 5, answer: "FATURA", clue: "Sevkten itibaren 7 gün içinde düzenlenmesi ve ibraz süresi 10 gün olan belgedir[cite: 33, 34].", row: 3, col: 10, dir: "down" }
            ]
        },
        {
            seviye: 2,
            baslik: "Vergi Hukuku - Seviye 2",
            data: [
                { id: 1, answer: "CEZA", clue: "Uyuşmazlıklarda indirimine başvurma süresi 30 gün olan yaptırımdır.", row: 2, col: 1, dir: "across" },
                { id: 2, answer: "ZİYA", clue: "Normalde vergi aslının 1 katı olan, kaçakçılıkta 3 kat uygulanan vergi kaybı durumudur (Vergi ...ı).", row: 2, col: 3, dir: "down" },
                { id: 3, answer: "AYLIK", clue: "Zor durumda mühlet verme süresi en fazla 1 ...ı geçemez (Kök ekinin hali).", row: 4, col: 3, dir: "across" },
                { id: 4, answer: "KESİNTİ", clue: "Gelir vergisinde kaynakta yapılan tevkifat işlemidir.", row: 4, col: 7, dir: "down" },
                { id: 5, answer: "İSTİSNA", clue: "Birden fazla mesken söz konusu ise sadece birinde geçerli olan GMSİ hakkıdır.", row: 6, col: 7, dir: "across" }
            ]
        },
        {
            seviye: 3,
            baslik: "Vergi Hukuku - Seviye 3 (Kilit Noktalar)",
            data: [
                { id: 1, answer: "TAHAKKUK", clue: "İkmalen ve re'sen tarhiyatta, verginin vadesinin işlemeye başladığı aşamadır.", row: 1, col: 1, dir: "across" },
                { id: 2, answer: "UZLAŞMA", clue: "Vergi uyuşmazlıklarında mükellefin 30 gün içinde başvurabileceği idari çözüm yoludur.", row: 1, col: 7, dir: "down" },
                { id: 3, answer: "MÜHLET", clue: "Zor durumda olan mükelleflere verilen ve 1 ayı geçemeyen ek süredir.", row: 3, col: 4, dir: "across" },
                { id: 4, answer: "ZİYA", clue: "Verginin zamanında tahakkuk ettirilmemesi veya eksik hesaplanması nedeniyle ortaya çıkan kayıptır (Vergi ...ı).", row: 7, col: 4, dir: "across" }
            ]
        }
    ],
    "denetim": [
        {
            seviye: 1,
            baslik: "Muhasebe Denetimi - Seviye 1",
            data: [
                { id: 1, answer: "KANIT", clue: "Denetçinin görüşüne dayanak teşkil eden, ilgili ve güvenilir olması gereken bilgidir.", row: 2, col: 2, dir: "down" },
                { id: 2, answer: "KONTROL", clue: "Finansal raporlamanın güvenilirliği için işletmenin amaçlarına ulaştığına dair güvence sağlayan süreç (İç ...).", row: 2, col: 2, dir: "across" },
                { id: 3, answer: "RİSK", clue: "Önemli yanlışlık ...i, doğal (yapısal) ve kontrol ...inin birleşimidir.", row: 2, col: 6, dir: "down" },
                { id: 4, answer: "ONAY", clue: "Müşteri ilişkisinin ve denetim sözleşmesinin kabulü işlemidir.", row: 2, col: 3, dir: "down" },
                { id: 5, answer: "HATA", clue: "Finansal tablolardaki yanlışlıkların hile dışında kalan ve kasıt içermeyen diğer kaynağıdır.", row: 5, col: 7, dir: "down" }
            ]
        },
        {
            seviye: 2,
            baslik: "Muhasebe Denetimi - Seviye 2",
            data: [
                { id: 1, answer: "ÖNEMLİ", clue: "Denetçinin ulaştığı yanlışlıkların finansal tablolar için taşıdığı etki derecesidir.", row: 2, col: 2, dir: "down" },
                { id: 2, answer: "GÖRÜŞ", clue: "Denetçinin yeterli kanıt elde ettiğinde veya edemediğinde raporunda bildirdiği karardır (Olumlu, Olumsuz vb.).", row: 2, col: 1, dir: "across" },
                { id: 3, answer: "DENETİM", clue: "Bir işletmenin mali işlemlerinin standartlara uygunluğunun incelenmesi sürecidir.", row: 5, col: 2, dir: "across" },
                { id: 4, answer: "TEMİNAT", clue: "İşletmenin sürekliliği riskini değerlendirirken alınan mali garantilerdir.", row: 5, col: 6, dir: "down" },
                { id: 5, answer: "İHMAL", clue: "İşletmenin ilgili mevzuata aykırı olan eylem veya yapmadığı görevleridir.", row: 8, col: 6, dir: "across" }
            ]
        },
        {
            seviye: 3,
            baslik: "Muhasebe Denetimi - Seviye 3 (Kilit Noktalar)",
            data: [
                { id: 1, answer: "GÖRÜŞ", clue: "Denetçinin yeterli ve uygun denetim kanıtı elde edip edememesine göre oluşturduğu nihai karardır (Olumlu, Olumsuz vb.).", row: 2, col: 2, dir: "across" },
                { id: 2, answer: "ÖNEMLİ", clue: "Finansal tablolardaki yanlışlıkların, tek başına veya toplu olarak tabloları etkileyecek boyutta olması durumudur.", row: 2, col: 3, dir: "down" },
                { id: 3, answer: "HİLE", clue: "Haksız veya yasalara aykırı bir menfaat elde etmek amacıyla yapılan aldatma içeren kasıtlı eylemdir.", row: 7, col: 2, dir: "across" },
                { id: 4, answer: "SÜRE", clue: "Çalışma kağıtlarının nihai dosyada birleştirilmesi için denetçi raporu tarihinden itibaren 60 gün olan zaman dilimidir.", row: 4, col: 5, dir: "down" }
            ]
        }
    ]
};