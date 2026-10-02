// =======================================================
// --- SMM AKADEMİ: KUSURSUZ KOORDİNATLI BULMACA HAVUZU ---
// =======================================================
const bulmacaHavuzu = {
    "borclar": [
        {
            seviye: 1,
            baslik: "Borçlar Hukuku - Seviye 1",
            data: [
                { id: 1, answer: "GABİN", clue: "Bir tarafın darda kalmasından veya deneyimsizliğinden yararlanarak edimler arasında yaratılan açık oransızlıktır[cite: 10].", row: 2, col: 1, dir: "across" },
                { id: 2, answer: "İBRA", clue: "Amacı borçluyu ifası mümkün borcundan tam ya da kısmen kurtarmak olan sözleşmedir[cite: 13].", row: 2, col: 4, dir: "down" },
                { id: 3, answer: "ZARAR", clue: "Bir kişinin malvarlığında meydana gelen irade dışı eksilmedir[cite: 11].", row: 4, col: 2, dir: "across" },
                { id: 4, answer: "REHİN", clue: "Alacağı güvence altına almak için verilen ayni teminattır[cite: 10].", row: 4, col: 6, dir: "down" },
                { id: 5, answer: "HATA", clue: "Esaslı yanılma hallerinden biri olan, sözleşmenin niteliğinde veya konusunda yanılmadır[cite: 10].", row: 6, col: 6, dir: "across" }
            ]
        },
        {
            seviye: 2,
            baslik: "Borçlar Hukuku - Seviye 2",
            data: [
                { id: 1, answer: "TAKAS", clue: "Aynı cinsten muaccel borçları bulunan iki kişiden birinin tek taraflı iradesiyle borçları sona erdirilmesidir[cite: 13].", row: 1, col: 1, dir: "across" },
                { id: 2, answer: "KABUL", clue: "Öneriye (icaba) verilen ve sözleşmeyi kuran olumlu cevaptır[cite: 9].", row: 1, col: 3, dir: "down" },
                { id: 3, answer: "BORÇLU", clue: "Borç ilişkisinin edilgen tarafını (pasif süjesini) oluşturan taraftır[cite: 8].", row: 3, col: 3, dir: "across" },
                { id: 4, answer: "UYARI", clue: "Vadesi geçtiği halde borcunu ödemeyen borçluyu temerrüte düşürmek için yapılan ihtardır[cite: 9].", row: 3, col: 8, dir: "down" },
                { id: 5, answer: "YETKİ", clue: "Temsilcinin hukuki işlem yapabilmesi için kendisine verilen haktır[cite: 10].", row: 4, col: 8, dir: "across" }
            ]
        },
        {
            seviye: 3,
            baslik: "Borçlar Hukuku - Seviye 3",
            data: [
                { id: 1, answer: "İRADE", clue: "Sözleşmenin meydana gelebilmesi için gerekli olan açıklama (beyan) türüdür[cite: 9].", row: 2, col: 4, dir: "across" },
                { id: 2, answer: "CEZA", clue: "Borcunu hiç veya gereğince yerine getirmediği takdirde ifa etmeyi önceden yüklendiği ... koşuludur[cite: 12].", row: 1, col: 8, dir: "down" },
                { id: 3, answer: "ZAMANAŞIMI", clue: "Alacaklının alacağı talep, dava ve icra yoluyla takip hakkını sürekli olarak engelleyen savunmadır[cite: 13].", row: 4, col: 5, dir: "across" },
                { id: 4, answer: "ŞART", clue: "Bir sözleşmenin hüküm ifade etmesinin gerçekleşip gerçekleşmeyeceği bilinmeyen bir olguya bağlanmasıdır[cite: 9].", row: 4, col: 11, dir: "down" },
                { id: 5, answer: "ZARAR", clue: "Haksız fiilin maddi ve manevi olarak malvarlığında yarattığı irade dışı eksilmedir[cite: 11].", row: 5, col: 10, dir: "across" }
            ]
        }
    ],
    "is_hukuku": [
        {
            seviye: 1,
            baslik: "İş Hukuku - Seviye 1",
            data: [
                { id: 1, answer: "SENDİKA", clue: "İşçilerin veya işverenlerin ekonomik haklarını korumak için en az 7 kişiyle oluşturdukları kuruluştur[cite: 14].", row: 1, col: 1, dir: "across" },
                { id: 2, answer: "SÖZLEŞME", clue: "İş görme, ücret ve bağımlılık unsurlarından oluşan hukuki bağdır[cite: 16].", row: 1, col: 1, dir: "down" },
                { id: 3, answer: "KIDEM", clue: "İşçinin her bir yıllık çalışması için en az 30 günlük ücreti tutarında ödenen tazminattır[cite: 20].", row: 1, col: 6, dir: "down" },
                { id: 4, answer: "ÜCRET", clue: "İşveren tarafından işçiye çalışma karşılığında ödenen bedeldir[cite: 16].", row: 5, col: 3, dir: "across" },
                { id: 5, answer: "TATİL", clue: "İşçinin haklı sebep olmaksızın ardı ardına 2 işgünü devam etmediği durumlarda feshin gerekçesi olan günlerdir[cite: 18].", row: 5, col: 7, dir: "down" }
            ]
        },
        {
            seviye: 2,
            baslik: "İş Hukuku - Seviye 2",
            data: [
                { id: 1, answer: "SÜRE", clue: "Belirli süreli iş sözleşmelerinin en fazla bir defa uzatılabildiği zaman dilimidir[cite: 16].", row: 1, col: 1, dir: "down" },
                { id: 2, answer: "ÜCRET", clue: "Fazla çalışma için normal çalışma bedelinin saat başına %50 yükseltilmesiyle ödenen tutardır[cite: 17].", row: 2, col: 1, dir: "across" },
                { id: 3, answer: "ENGELLİ", clue: "Çalışma gücünün en az %40'ından yoksun olduğu belgelenen ve belli kotalarla çalıştırılması zorunlu kişidir[cite: 19].", row: 4, col: 1, dir: "across" },
                { id: 4, answer: "GÜVENLİK", clue: "İşçinin kendi isteği veya savsaması yüzünden işyerinde tehlikeye düşürdüğü temel unsurdur[cite: 18].", row: 4, col: 3, dir: "down" },
                { id: 5, answer: "İZİN", clue: "Kadın işçilere doğumdan önce 8 hafta, doğumdan sonra 8 hafta verilen hakkın adıdır[cite: 20].", row: 10, col: 3, dir: "across" }
            ]
        },
        {
            seviye: 3,
            baslik: "İş Hukuku - Seviye 3",
            data: [
                { id: 1, answer: "TAZMİNAT", clue: "İşçinin haksız yere işten çıkarılması durumunda aldığı toplu paradır (Kıdem/İhbar ...ı)[cite: 18].", row: 4, col: 1, dir: "across" },
                { id: 2, answer: "HAFTA", clue: "Kadın işçilere doğumdan önce ve sonra toplam 16 ... izin verilir[cite: 20].", row: 3, col: 2, dir: "down" },
                { id: 3, answer: "İZİN", clue: "İşçiye evlenmesi veya evlat edinmesi durumunda 3 gün verilen ücretli haktır[cite: 19].", row: 4, col: 5, dir: "down" },
                { id: 4, answer: "ASGARİ", clue: "Ücret tespit komisyonu tarafından en geç 2 yılda bir belirlenen taban ücrettir[cite: 19].", row: 4, col: 7, dir: "down" },
                { id: 5, answer: "SENDİKA", clue: "İşçi veya işverenlerin ortak çıkarlarını korumak için kurdukları tüzel kişiliktir[cite: 14].", row: 5, col: 7, dir: "across" },
                { id: 6, answer: "TATİL", clue: "İşçinin haklı sebep olmaksızın ardı ardına 2 işgünü devam etmediği (... günü) fesih hakkı doğar[cite: 18].", row: 6, col: 2, dir: "across" }
            ]
        }
    ],
    "ticaret": [
        {
            seviye: 1,
            baslik: "Ticaret Hukuku - Seviye 1",
            data: [
                { id: 1, answer: "FATURA", clue: "Alan kişi 8 gün içinde itiraz etmezse içeriğini kabul etmiş sayıldığı ticari belgedir[cite: 22].", row: 2, col: 1, dir: "down" },
                { id: 2, answer: "TACİR", clue: "Bir ticari işletmeyi, kısmen de olsa, kendi adına işleten kişiye denir[cite: 22].", row: 4, col: 1, dir: "across" },
                { id: 3, answer: "CİRO", clue: "Kıymetli evrakın devri için senedin arkasına veya alonj üzerine yazılan ve imzalanan beyandır[cite: 27].", row: 3, col: 4, dir: "down" },
                { id: 4, answer: "KOMİSYON", clue: "Ücret karşılığında kendi adına ve müvekkili hesabına alım satım işleri yapan bağımsız tacir yardımcısına verilen isimdir (Kök kelime)[cite: 23].", row: 6, col: 3, dir: "across" }
            ]
        },
        {
            seviye: 2,
            baslik: "Ticaret Hukuku - Seviye 2",
            data: [
                { id: 1, answer: "ŞUBE", clue: "İç ilişkilerinde merkeze bağlı, dış faaliyetlerinde bağımsız olan ve tescili zorunlu birimdir[cite: 22].", row: 2, col: 1, dir: "across" },
                { id: 2, answer: "ŞİRKET", clue: "Ticaret siciline tescil ile tüzel kişilik kazanan ticari organizasyondur[cite: 25].", row: 2, col: 1, dir: "down" },
                { id: 3, answer: "REHİN", clue: "Alacağı güvence altına almak için taşınırlar üzerinde kurulan haktır.", row: 4, col: 1, dir: "across" },
                { id: 4, answer: "HAKSIZ", clue: "Müşterileri, meslekî itibarı zarar gören kimsenin açtığı rekabet davasının adıdır (.... Rekabet)[cite: 23].", row: 4, col: 3, dir: "down" },
                { id: 5, answer: "ZARAR", clue: "Haksız rekabet veya poliçenin ödenmemesi durumunda talep edilen maddi kayıptır[cite: 22].", row: 9, col: 3, dir: "across" }
            ]
        },
        {
            seviye: 3,
            baslik: "Ticaret Hukuku - Seviye 3",
            data: [
                { id: 1, answer: "TESCİL", clue: "Ticari işletmenin açıldığı günden itibaren 15 gün içinde ticaret siciline yapılması zorunlu işlemdir[cite: 23].", row: 3, col: 2, dir: "across" },
                { id: 2, answer: "POLİÇE", clue: "Görüldüğünde, görüldükten belirli bir süre sonra veya belirli bir günde ödenmek üzere düzenlenen kambiyo senedidir[cite: 28].", row: 1, col: 7, dir: "down" },
                { id: 3, answer: "BİLANÇO", clue: "Komanditer ortakların iş yılı sonunda doğruluğunu incelemeye yetkili olduğu temel finansal tablodur[cite: 26].", row: 5, col: 2, dir: "across" },
                { id: 4, answer: "VEKİL", clue: "Ticari temsilci ve pazarlamacı ile birlikte Borçlar Kanunu'nda düzenlenen bağımlı tacir yardımcısıdır (Ticari ...)[cite: 23].", row: 2, col: 3, dir: "down" }
            ]
        }
    ],
    "meslek": [
        {
            seviye: 1,
            baslik: "Meslek Hukuku - Seviye 1",
            data: [
                { id: 1, answer: "YEMİNLİ", clue: "Mesleğe fiilen başlamadan önce Asliye Ticaret Mahkemesinde ant içen mali müşavirdir[cite: 29].", row: 2, col: 1, dir: "across" },
                { id: 2, answer: "DİSİPLİN", clue: "3 asıl ve 1 yedek üyeden oluşan, kararlarına 30 gün içinde itiraz edilebilen inceleme kuruludur[cite: 29].", row: 1, col: 4, dir: "down" },
                { id: 3, answer: "SİCİL", clue: "Ruhsat alan meslek mensuplarının kaydedildiği resmi kütüktür.", row: 4, col: 3, dir: "across" },
                { id: 4, answer: "STAJ", clue: "SMMM adayları için süresi 3 yıl olan ve TESMER programı çerçevesinde yapılan eğitimdir[cite: 30].", row: 4, col: 3, dir: "down" },
                { id: 5, answer: "LEVHA", clue: "Yasal düzenlemelere aykırı asılması halinde meslek mensubuna 'uyarma' cezası verilen tabeladır[cite: 31].", row: 4, col: 7, dir: "down" }
            ]
        },
        {
            seviye: 2,
            baslik: "Meslek Hukuku - Seviye 2",
            data: [
                { id: 1, answer: "REKLAM", clue: "Yasağına uyulmaması durumunda meslek mensubuna kınama cezası gerektiren eylemdir[cite: 31].", row: 1, col: 4, dir: "down" },
                { id: 2, answer: "RUHSAT", clue: "Meslek mensuplarına TÜRMOB tarafından verilen ve geri alınmasına 'Meslekten Men' denilen belgedir[cite: 30].", row: 1, col: 4, dir: "across" },
                { id: 3, answer: "KURUL", clue: "Odanın en yüksek organı olan Genel ... 3 yılda bir Mayıs ayında toplanır[cite: 29].", row: 3, col: 4, dir: "across" },
                { id: 4, answer: "YEMİN", clue: "YMM'lerin Asliye Ticaret Mahkemesinde mesleğe başlamadan önce içtikleri anttır[cite: 29].", row: 6, col: 2, dir: "across" },
                { id: 5, answer: "BELGE", clue: "Büro edinenlerin odaya kayıt olduktan 3 ay içinde almak zorunda olduğu Büro Tescil Evrakıdır (Kök kelime)[cite: 31].", row: 5, col: 3, dir: "down" }
            ]
        },
        {
            seviye: 3,
            baslik: "Meslek Hukuku - Seviye 3",
            data: [
                { id: 1, answer: "UYARMA", clue: "Müşterinin işlerine karşı kayıtsız kalınması veya yasalara aykırı tabela asılması durumunda verilen cezadır[cite: 31].", row: 2, col: 2, dir: "across" },
                { id: 2, answer: "REKLAM", clue: "Yasağına uyulmaması durumunda kınama cezası uygulanmasını gerektiren faaliyettir[cite: 31].", row: 2, col: 5, dir: "down" },
                { id: 3, answer: "AİDAT", clue: "Haklı gerekçe olmaksızın ödenmemesi durumunda uyarma cezası uygulanan oda borcudur[cite: 31].", row: 6, col: 2, dir: "across" },
                { id: 4, answer: "CEZA", clue: "Meslek mensuplarına disiplin kurulu tarafından verilen uyarma, kınama gibi yaptırımların genel adıdır[cite: 31].", row: 3, col: 2, dir: "down" }
            ]
        }
    ],
    "vergi": [
        {
            seviye: 1,
            baslik: "Vergi Hukuku - Seviye 1 (Hata Giderildi)",
            data: [
                { id: 1, answer: "MÜKELLEF", clue: "Vergi kanunlarına göre kendisine vergi borcu düşen gerçek veya tüzel kişidir[cite: 33].", row: 2, col: 2, dir: "across" },
                { id: 2, answer: "MUAF", clue: "Gelir vergisinden ... esnaf veya kurumlar vergisinden ... olanlar defter tutmak zorunda değildirler[cite: 33].", row: 2, col: 2, dir: "down" },
                { id: 3, answer: "VADE", clue: "Tahsil zamanaşımının (5 yıl) işlemeye başladığı tarihtir[cite: 33].", row: 4, col: 1, dir: "across" },
                { id: 4, answer: "DEFTER", clue: "Faaliyetine devam eden işletmelerde yenisi 12. ayda tasdik olunan ticari kayıttır[cite: 33].", row: 4, col: 3, dir: "down" },
                { id: 5, answer: "FATURA", clue: "Sevkten itibaren 7 gün içinde düzenlenmesi ve ibraz süresi 10 gün olan belgedir[cite: 33, 34].", row: 6, col: 3, dir: "across" }
            ]
        },
        {
            seviye: 2,
            baslik: "Vergi Hukuku - Seviye 2",
            data: [
                { id: 1, answer: "CEZA", clue: "Uyuşmazlıklarda indirimine başvurma süresi 30 gün olan yaptırımdır[cite: 33].", row: 2, col: 1, dir: "across" },
                { id: 2, answer: "ZİYA", clue: "Normalde vergi aslının 1 katı olan, kaçakçılıkta 3 kat uygulanan vergi kaybı durumudur (Vergi ...ı)[cite: 34].", row: 2, col: 3, dir: "down" },
                { id: 3, answer: "AYLIK", clue: "Zor durumda mühlet verme süresi en fazla 1 ...ı geçemez (Kök ekinin hali)[cite: 34].", row: 4, col: 2, dir: "across" },
                { id: 4, answer: "KESİNTİ", clue: "Gelir vergisinde kaynakta yapılan tevkifat işlemidir.", row: 4, col: 6, dir: "down" },
                { id: 5, answer: "İSTİSNA", clue: "Birden fazla mesken söz konusu ise sadece birinde geçerli olan GMSİ hakkıdır[cite: 35].", row: 6, col: 5, dir: "across" }
            ]
        },
        {
            seviye: 3,
            baslik: "Vergi Hukuku - Seviye 3",
            data: [
                { id: 1, answer: "TAHAKKUK", clue: "İkmalen ve re'sen tarhiyatta, verginin vadesinin işlemeye başladığı aşamadır[cite: 33].", row: 1, col: 1, dir: "across" },
                { id: 2, answer: "UZLAŞMA", clue: "Vergi uyuşmazlıklarında mükellefin 30 gün içinde başvurabileceği idari çözüm yoludur[cite: 33].", row: 1, col: 7, dir: "down" },
                { id: 3, answer: "MÜHLET", clue: "Zor durumda olan mükelleflere verilen ve 1 ayı geçemeyen ek süredir[cite: 34].", row: 3, col: 4, dir: "across" },
                { id: 4, answer: "ZİYA", clue: "Verginin zamanında tahakkuk ettirilmemesi veya eksik hesaplanması nedeniyle ortaya çıkan kayıptır (Vergi ...ı)[cite: 34].", row: 7, col: 4, dir: "across" }
            ]
        }
    ],
    "denetim": [
        {
            seviye: 1,
            baslik: "Muhasebe Denetimi - Seviye 1",
            data: [
                { id: 1, answer: "KONTROL", clue: "Finansal raporlamanın güvenilirliği için işletmenin amaçlarına ulaştığına dair güvence sağlayan süreç (İç ...)[cite: 36].", row: 1, col: 3, dir: "across" },
                { id: 2, answer: "KANIT", clue: "Denetçinin, toplayacağı miktarı ile önemlilik ve risk arasında orantı kurduğu, kararını destekleyen bilgidir[cite: 38].", row: 1, col: 3, dir: "down" },
                { id: 3, answer: "HATA", clue: "Finansal tablolardaki yanlışlıkların hile dışında kalan ve kasıt içermeyen diğer kaynağıdır[cite: 42].", row: 2, col: 2, dir: "across" },
                { id: 4, answer: "RİSK", clue: "Önemli yanlışlık ...i, doğal (yapısal) ve kontrol ...inin birleşimidir[cite: 38].", row: 1, col: 7, dir: "down" },
                { id: 5, answer: "ONAY", clue: "Müşteri ilişkisinin ve denetim sözleşmesinin kabulü işlemidir.", row: 1, col: 8, dir: "down" }
            ]
        },
        {
            seviye: 2,
            baslik: "Muhasebe Denetimi - Seviye 2",
            data: [
                { id: 1, answer: "GÖRÜŞ", clue: "Denetçinin yeterli kanıt elde ettiğinde veya edemediğinde raporunda bildirdiği karardır (Olumlu, Olumsuz vb.)[cite: 39].", row: 2, col: 1, dir: "across" },
                { id: 2, answer: "ÖNEMLİ", clue: "Denetçinin ulaştığı yanlışlıkların finansal tablolar için taşıdığı etki derecesidir[cite: 39].", row: 2, col: 2, dir: "down" },
                { id: 3, answer: "DENETİM", clue: "Bir işletmenin mali işlemlerinin standartlara uygunluğunun incelenmesi sürecidir[cite: 49].", row: 4, col: 1, dir: "across" },
                { id: 4, answer: "TEMİNAT", clue: "İşletmenin sürekliliği riskini değerlendirirken alınan mali garantilerdir.", row: 4, col: 5, dir: "down" },
                { id: 5, answer: "İHMAL", clue: "İşletmenin ilgili mevzuata aykırı olan eylem veya yapmadığı görevleridir[cite: 43].", row: 6, col: 3, dir: "across" }
            ]
        },
        {
            seviye: 3,
            baslik: "Muhasebe Denetimi - Seviye 3",
            data: [
                { id: 1, answer: "GÖRÜŞ", clue: "Denetçinin yeterli ve uygun denetim kanıtı elde edip edememesine göre oluşturduğu nihai karardır (Olumlu, Olumsuz vb.)[cite: 39].", row: 2, col: 2, dir: "across" },
                { id: 2, answer: "ÖNEMLİ", clue: "Finansal tablolardaki yanlışlıkların, tek başına veya toplu olarak tabloları etkileyecek boyutta olması durumudur[cite: 39].", row: 2, col: 3, dir: "down" },
                { id: 3, answer: "SÜRE", clue: "Çalışma kağıtlarının nihai dosyada birleştirilmesi için denetçi raporu tarihinden itibaren 60 gün olan zaman dilimidir[cite: 45].", row: 4, col: 5, dir: "down" },
                { id: 4, answer: "HİLE", clue: "Haksız veya yasalara aykırı bir menfaat elde etmek amacıyla yapılan aldatma içeren kasıtlı eylemdir[cite: 42].", row: 7, col: 2, dir: "across" }
            ]
        }
    ],
    "sermaye": [
        {
            seviye: 1,
            baslik: "SPK Temel Kavramlar - Seviye 1",
            data: [
                { id: 1, answer: "İZAHNAME", clue: "Sermaye piyasası araçlarının halka arz edilebilmesi veya borsada işlem görebilmesi için hazırlanan ve Kurulca onaylanan belgedir.", row: 1, col: 5, dir: "down" },
                { id: 2, answer: "İHRAÇÇI", clue: "Sermaye piyasası araçlarını çıkaran veya halka arz eden tüzel kişilere verilen addır.", row: 1, col: 5, dir: "across" },
                { id: 3, answer: "İMZA", clue: "Kamuyu aydınlatma belgelerini onaylayanların sorumluluk altına girmesini sağlayan işlemdir (Belgeyi ...layanlar müteselsilen sorumludur).", row: 3, col: 2, dir: "across" },
                { id: 4, answer: "FONLAR", clue: "Tasarruf sahiplerinden toplanan paralarla inançlı mülkiyet esasına göre işletilen mal varlıklarıdır (Yatırım ...ı).", row: 5, col: 3, dir: "across" },
                { id: 5, answer: "TEMSİL", clue: "Yönetim kurulunun şirketi idare etme ve (...) yetkisidir.", row: 7, col: 3, dir: "across" }
            ]
        },
        {
            seviye: 2,
            baslik: "SPK Kurumlar ve Saklama - Seviye 2",
            data: [
                { id: 1, answer: "SAKLAMA", clue: "Sermaye piyasası araçlarının kayden veya fiziken muhafaza edilmesi hizmetidir (Merkezi ... Kuruluşları).", row: 1, col: 5, dir: "down" },
                { id: 2, answer: "SİCİL", clue: "İpotekle teminat altına alınmış bir varlığın fona devredilmesi halinde kaydedildiği resmi kütüktür.", row: 1, col: 5, dir: "across" },
                { id: 3, answer: "TAKAS", clue: "Borsalarda işlem gören araçların teslimi ve bedel ödenmesi işlemlerini yürüten merkezi kuruluştur.", row: 3, col: 3, dir: "across" },
                { id: 4, answer: "PİYASA", clue: "Alım satım emirlerinin sonuçlandırıldığı, borsanın işleticisi tarafından yönetilen işlem alanıdır.", row: 5, col: 2, dir: "across" },
                { id: 5, answer: "NAMA", clue: "Kaydi sermaye piyasası araçlarının, hamiline veya ... yazılı olmalarına bakılmaksızın isme açılmış hesaplarda izlenmesi esastır.", row: 7, col: 4, dir: "across" }
            ]
        },
        {
            seviye: 3,
            baslik: "SPK Halka Açık Ortaklıklar - Seviye 3",
            data: [
                { id: 1, answer: "İMTİYAZ", clue: "Üst üste beş yıl dönem zararı eden halka açık ortaklıklarda Kurul kararı ile kalkan yönetim hakkıdır.", row: 1, col: 5, dir: "down" },
                { id: 2, answer: "İPTAL", clue: "Kurulun, kayıtlı sermaye kararları aleyhine 30 gün içinde asliye ticaret mahkemesinde açabildiği davanın türüdür.", row: 1, col: 5, dir: "across" },
                { id: 3, answer: "TEKLİF", clue: "Yönetim kontrolünün elde edilmesi halinde diğer ortakların paylarını satın almak üzere yapılması zorunlu olan çağrıdır (Pay Alım ...i).", row: 3, col: 5, dir: "across" },
                { id: 4, answer: "PAY", clue: "Ortaklık sermayesinin bölündüğü ve anonim ortaklıklarda ihraç edilen eş değer parçalardır.", row: 5, col: 3, dir: "across" },
                { id: 5, answer: "FAİZ", clue: "Temerrüt durumunda işletilen ve Kurulca belirlenebilen oran türüdür (Temerrüt ...i).", row: 7, col: 2, dir: "across" }
            ]
        },
        {
            seviye: 4,
            baslik: "SPK Suçlar ve Yaptırımlar - Seviye 4",
            data: [
                { id: 1, answer: "ZİMMET", clue: "Kripto varlık hizmet sağlayıcılarında müşteri varlıklarını mal edinme suçudur ve şahsi iflası gerektirebilir.", row: 1, col: 5, dir: "down" },
                { id: 2, answer: "ZARAR", clue: "Hukuka aykırı fiiller sonucu yatırımcının malvarlığında oluşan ve tazmini talep edilen eksilmedir.", row: 1, col: 5, dir: "across" },
                { id: 3, answer: "KAMU", clue: "İzahnamede yer alan bilgilerin eksiksiz olarak açıklanmak zorunda olduğu geniş yatırımcı kitlesi veya tüzel yapıdır.", row: 3, col: 3, dir: "across" },
                { id: 4, answer: "SAHTE", clue: "Finansal raporları gerçeği yansıtmayacak şekilde düzenleme durumu sonucu oluşan belge türüdür (... evrak).", row: 5, col: 1, dir: "across" }
            ]
        },
        {
            seviye: 5,
            baslik: "SPK İdari Tedbirler - Seviye 5",
            data: [
                { id: 1, answer: "TEDBİR", clue: "Kurulun, piyasa bozucu eylemlerde borsada işlem yasağı dâhil aldığı önlemlerin genel adıdır.", row: 1, col: 5, dir: "down" },
                { id: 2, answer: "TASFİYE", clue: "Yatırımcıları tazmin kararı verilenler hakkında YTM tarafından yürütülen iflas öncesi kapatma sürecidir (Tedrici ...).", row: 1, col: 5, dir: "across" },
                { id: 3, answer: "DEĞER", clue: "Sermaye piyasası araçlarının fiyatını, (...)ini veya yatırımcı kararlarını etkileyen bilgiler içsel bilgidir.", row: 3, col: 5, dir: "across" },
                { id: 4, answer: "BİLGİ", clue: "Değeri etkileyebilecek henüz kamuya açıklanmamış olay ve gelişmelerdir (İçsel ...).", row: 5, col: 4, dir: "across" },
                { id: 5, answer: "RİSK", clue: "Borsaların kuruluşunda ve kurumsal yönetimde göz önünde bulundurulan sistemik tehlike unsurudur.", row: 6, col: 5, dir: "across" }
            ]
        },
        {
            seviye: 6,
            baslik: "SPK Yatırımcı Tazmin Merkezi - Seviye 6",
            data: [
                { id: 1, answer: "YATIRIM", clue: "Sermaye piyasası araçlarının alım satımı gibi faaliyetleri yürüten kuruluşların genel adıdır (... kuruluşu).", row: 1, col: 5, dir: "down" },
                { id: 2, answer: "YÜKÜM", clue: "Yatırım kuruluşunun yerine getiremediği takdirde YTM'nin devreye girdiği ödeme sorumluluğudur (...lülük kökü).", row: 1, col: 5, dir: "across" },
                { id: 3, answer: "TAZMİN", clue: "Zarar gören yatırımcıların kayıplarının telafi edilmesi ve ödenmesi işlemidir.", row: 3, col: 5, dir: "across" },
                { id: 4, answer: "KURUL", clue: "Sermaye piyasalarının düzenlenmesi ve denetlenmesinden sorumlu üst makamdır (Sermaye Piyasası ...u).", row: 5, col: 3, dir: "across" },
                { id: 5, answer: "EMANET", clue: "On (10) yıl işlem görmeyen hesapların YTM'ye devredilme statüsüdür (...en devredilir).", row: 7, col: 4, dir: "across" }
            ]
        },
        {
            seviye: 7,
            baslik: "SPK Özel Durumlar Tebliği - Seviye 7",
            data: [
                { id: 1, answer: "ERTELEME", clue: "İhraççının meşru çıkarlarının zarar görmemesi için içsel bilginin kamuya açıklanmasını geciktirmesi işlemidir.", row: 1, col: 5, dir: "down" },
                { id: 2, answer: "ENDEKS", clue: "Kurulca onaylanan bir gösterge kapsamındaki varlıklardan oluşan fonun unvanında bulunması zorunlu ibaredir.", row: 1, col: 5, dir: "across" },
                { id: 3, answer: "TUTAR", clue: "İdari sorumluluğu bulunan kişilerin işlemlerinde açıklamayı zorunlu kılan 250.000 TL'lik eşiktir (İşlem ...ı).", row: 3, col: 5, dir: "across" },
                { id: 4, answer: "HİLELİ", clue: "Zimmet suçunun açığa çıkmamasını sağlamaya yönelik uygulanan davranış türüdür.", row: 5, col: 3, dir: "across" },
                { id: 5, answer: "ZİMMET", clue: "Koruma ve gözetimle yükümlü olunan para veya kripto varlıkları kendi üzerine geçirme suçudur.", row: 7, col: 3, dir: "across" }
            ]
        },
        {
            seviye: 8,
            baslik: "SPK Kurumsal Yönetim İlkeleri - Seviye 8",
            data: [
                { id: 1, answer: "BAĞIMSIZ", clue: "Yönetim Kurulu üye sayısının en az üçte biri oranında olması zorunlu, icrada görevli olmayan üye statüsüdür.", row: 1, col: 5, dir: "down" },
                { id: 2, answer: "BORSA", clue: "Payları burada işlem gören ortaklıkların kurumsal yönetim ilkelerine uymasının zorunlu olduğu piyasadır.", row: 1, col: 5, dir: "across" },
                { id: 3, answer: "ÇAĞRI", clue: "Genel kurul toplantısına ortakların davet edilme işlemi ve duyurusudur.", row: 3, col: 3, dir: "across" },
                { id: 4, answer: "MEVZUAT", clue: "Şirket faaliyetlerini önemli derecede etkileyebilecek olan kanun ve kurallar bütünüdür.", row: 5, col: 5, dir: "across" },
                { id: 5, answer: "AÇIĞA", clue: "Sermaye piyasası araçlarının sahip olunmadan veya teminatsız yapılan satış işlemidir (... satış).", row: 7, col: 3, dir: "across" }
            ]
        },
        {
            seviye: 9,
            baslik: "SPK Yatırım Fonları - Seviye 9",
            data: [
                { id: 1, answer: "ŞEMSİYE", clue: "Katılma payları tek bir içtüzük kapsamında ihraç edilen tüm alt fonları kapsayan ana fondur.", row: 1, col: 5, dir: "down" },
                { id: 2, answer: "ŞART", clue: "İzahnamede belirtilen yükümlülüklerin yerine getirilme zorunluluğudur (İşlem ...ı).", row: 1, col: 5, dir: "across" },
                { id: 3, answer: "MENKUL", clue: "Portföy değerinin en az %80'ini BİAŞ'ta işlem gören paylara yatıran ortaklıklardır (... kıymet yatırım ortaklığı).", row: 3, col: 5, dir: "across" },
                { id: 4, answer: "TAHSİL", clue: "Kamu alacaklarının ... amacı da dâhil olmak üzere fon haczedilemez ve iflas masasına dâhil edilemez.", row: 5, col: 1, dir: "across" },
                { id: 5, answer: "ESAS", clue: "Fon içtüzüğünde düzenlenen inançlı mülkiyet ve yönetim prensipleridir (...lar).", row: 7, col: 5, dir: "across" }
            ]
        },
        {
            seviye: 10,
            baslik: "SPK Kripto ve Teknoloji - Seviye 10",
            data: [
                { id: 1, answer: "KRİPTO", clue: "Dağıtık defter teknolojisiyle oluşturulan ve Kurul izniyle platformlarda işlem gören varlıklardır.", row: 1, col: 5, dir: "down" },
                { id: 2, answer: "KANUN", clue: "Sermaye piyasası araçlarının ihracını ve kripto platformlarını düzenleyen ana hukuki metindir (Sermaye Piyasası ...u).", row: 1, col: 5, dir: "across" },
                { id: 3, answer: "İZİN", clue: "Kripto varlık hizmet sağlayıcılarının faaliyete başlaması için SPK Kurulundan alması zorunlu olan onaydır.", row: 3, col: 5, dir: "across" },
                { id: 4, answer: "TEMİNAT", clue: "Yatırımcılardan kredili işlemler veya ödünç işlemleri için istenen güvence bedelidir.", row: 5, col: 5, dir: "across" }
            ]
        }
    ]
};