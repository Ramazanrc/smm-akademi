import streamlit as st
import json
import random
import time
from google import genai

# Sayfa Ayarları
st.set_page_config(page_title="SMM Akademi Antrenörü", page_icon="⚖️", layout="wide", initial_sidebar_state="expanded")

# PREMIUM CSS (MOBİL MENÜ BUTONUNU GERİ GETİREN ŞEFFAF HEADER EKLİ)
st.markdown("""
    <style>
    /* Üst barı SİLME, sadece ŞEFFAF yap ki mobil menü butonu (> işareti) görünsün */
    [data-testid="stHeader"] { background: transparent !important; }
    .block-container { padding-top: 2rem !important; }
    
    .stApp { background-color: #001a33; color: #ffffff; }
    
    .question-card { background-color: #002b52; padding: 30px; border-radius: 15px; border-left: 10px solid #d4af37; margin-bottom: 25px; box-shadow: 0 10px 20px rgba(0,0,0,0.4); }
    
    /* Zarif ve Kusursuz Şık Tasarımı */
    .stRadio { width: 100% !important; }
    
    div[role="radiogroup"] {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 15px !important; 
    }
    
    div[role="radiogroup"] > label {
        display: flex !important; 
        align-items: center !important; 
        width: 100% !important;
        background-color: rgba(255, 255, 255, 0.03) !important;
        border: 1px solid rgba(212, 175, 55, 0.3) !important;
        border-radius: 12px !important;
        padding: 15px 25px !important;
        margin: 0 !important;
        cursor: pointer !important;
        box-sizing: border-box !important;
        transition: all 0.3s ease !important;
    }
    
    div[role="radiogroup"] > label:hover {
        background-color: rgba(212, 175, 55, 0.1) !important;
        border-color: #d4af37 !important;
        transform: translateX(10px);
    }
    
    div[role="radiogroup"] label p { 
        color: #ffffff !important; 
        font-size: 22px !important; 
        margin: 0 0 0 15px !important; 
        white-space: normal !important; 
        word-break: break-word !important;
    }
    
    /* Aksiyon Butonları */
    div.stButton > button { background-color: #d4af37; color: #000; font-size: 18px !important; font-weight: bold; border-radius: 8px; transition: 0.3s; width: 100%; border: none; padding: 15px; }
    div.stButton > button:hover { background-color: #f1c40f; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4); }
    
    .reference-box { background-color: #0c0c0c; color: #d4af37; padding: 25px; border: 2px dashed #d4af37; border-radius: 12px; font-size: 20px; line-height: 1.6; margin-top: 20px; }
    .ai-button > button { background-color: #1e3a8a !important; color: #fff !important; border: 1px solid #3b82f6 !important; margin-top:10px; }
    .ai-button > button:hover { background-color: #2563eb !important; }
    
    [data-testid="stAlert"] { background-color: #0f172a !important; border-left: 5px solid #3b82f6 !important; }
    [data-testid="stAlert"] p, [data-testid="stAlert"] li { color: #f8fafc !important; font-size: 19px !important; line-height: 1.7 !important; }
    [data-testid="stAlert"] strong { color: #60a5fa !important; font-size: 20px !important; }
    
    [data-testid="stSidebar"] { background: linear-gradient(180deg, #001122 0%, #001a33 100%) !important; border-right: 2px solid #d4af37; }
    .sidebar-title { color: #d4af37; font-size: 20px; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #334; padding-bottom: 5px; }
    .progress-text { font-size: 20px; color: #d4af37; font-weight: bold; margin-bottom: 10px; }
    
    .profile-card { background-color: rgba(255, 255, 255, 0.05); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 10px; padding: 20px; text-align: center; margin-bottom: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }
    .profile-card h3 { color: #f1c40f; margin: 0 0 5px 0; font-size: 22px; font-weight: bold;}
    .profile-card p { color: #cbd5e1; margin: 0; font-size: 16px; }
    .profile-badge { display: inline-block; background-color: #d4af37; color: #000; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-top: 10px; }
    </style>
""", unsafe_allow_html=True)

# --- AKILLI JSON TARAYICI (DİNAMİK DOSYA ADI ALIR) ---
@st.cache_data
def sorulari_yukle(dosya_adi):
    def derin_tarama(veri, mevcut_konu="Genel Modül"):
        sorular = []
        if isinstance(veri, list):
            for eleman in veri:
                sorular.extend(derin_tarama(eleman, mevcut_konu))
        elif isinstance(veri, dict):
            if ('q' in veri or 'soru' in veri) and ('options' in veri or 'secenekler' in veri):
                if 'konu' not in veri:
                    veri['konu'] = mevcut_konu
                sorular.append(veri)
            else:
                for anahtar, deger in veri.items():
                    yeni_konu = str(anahtar).replace("_", " ").upper()
                    sorular.extend(derin_tarama(deger, yeni_konu))
        return sorular

    try:
        with open(dosya_adi, 'r', encoding='utf-8') as dosya:
            ham_veri = json.load(dosya)
            return derin_tarama(ham_veri)
    except Exception as e:
        return []

# --- OTURUM YÖNETİMİ ---
if 'ai_analiz' not in st.session_state:
    st.session_state.ai_analiz = False
if 'ai_yanit' not in st.session_state:
    st.session_state.ai_yanit = ""
if 'show_ref' not in st.session_state:
    st.session_state.show_ref = False
if 'aktif_ders' not in st.session_state:
    st.session_state.aktif_ders = "Vergi Mevzuatı"

try:
    API_KEY = st.secrets["GEMINI_API_KEY"]
except:
    API_KEY = None

# --- SIDEBAR: KONTROL PANELİ ---
with st.sidebar:
    st.markdown("""
        <div class="profile-card">
            <h3>Hoş Geldiniz</h3>
            <p>SMM Akademi Portalı</p>
            <div class="profile-badge">Mevzuat Antrenörü</div>
        </div>
    """, unsafe_allow_html=True)
    
    st.markdown("<p class='sidebar-title' style='margin-top:20px;'>📚 Ders Seçimi</p>", unsafe_allow_html=True)
    
    # DERS SEÇİM MENÜSÜ
    secilen_ders = st.selectbox("Çalışılacak Modülü Seçin:", ["Vergi Mevzuatı", "SPK Mevzuatı"])
    
    # Ders değiştiyse verileri sıfırla ve yeni dersi yükle
    if secilen_ders != st.session_state.aktif_ders:
        st.session_state.aktif_ders = secilen_ders
        st.session_state.current_idx = 0
        st.session_state.show_ref = False
        st.session_state.ai_analiz = False
        if 'original_questions' in st.session_state:
            del st.session_state['original_questions']
        st.rerun() 
        
    # Hangi dosyanın okunacağını belirliyoruz
    dosya_haritasi = {
        "Vergi Mevzuatı": "vergi_mevzuati.json",
        "SPK Mevzuatı": "sermaye_piyasasi.json"
    }
    aktif_dosya = dosya_haritasi[st.session_state.aktif_ders]

    if 'original_questions' not in st.session_state:
        st.session_state.original_questions = sorulari_yukle(aktif_dosya)
        baslangic_listesi = st.session_state.original_questions.copy()
        random.shuffle(baslangic_listesi)
        st.session_state.filtered_questions = baslangic_listesi[:20] if len(baslangic_listesi) > 20 else baslangic_listesi
        st.session_state.current_idx = 0

    st.markdown("<p class='sidebar-title' style='margin-top:20px;'>⚙️ Antrenman Ayarları</p>", unsafe_allow_html=True)
    
    tum_sorular = st.session_state.original_questions
    st.info(f"📚 Veritabanı: **{len(tum_sorular)} Soru**")

    real_topics = sorted(list(set([q.get('konu') for q in tum_sorular if q.get('konu')])))
    filtre_secenekleri = ["Tüm Konular (Karma)"] + real_topics if real_topics else ["Tüm Konular (Karma)"]
    selected_topic = st.selectbox("📌 Odaklanılacak Konu:", filtre_secenekleri)
    
    max_soru = len(tum_sorular) if selected_topic == "Tüm Konular (Karma)" else len([q for q in tum_sorular if q.get('konu') == selected_topic])

    # SIFIR SORU ÇÖKME KORUMASI BURADA!
    if max_soru > 0:
        hedef_soru_sayisi = st.number_input("📝 Soru Sayısı Hedefi:", min_value=1, max_value=max_soru, value=min(20, max_soru))
        if st.button("🔀 Yeni Test Başlat"):
            if selected_topic == "Tüm Konular (Karma)":
                yeni_liste = tum_sorular.copy()
            else:
                yeni_liste = [q for q in tum_sorular if q.get('konu') == selected_topic]
                
            random.shuffle(yeni_liste)
            st.session_state.filtered_questions = yeni_liste[:hedef_soru_sayisi]
            st.session_state.current_idx = 0
            st.session_state.show_ref = False
            st.session_state.ai_analiz = False
            st.session_state.ai_yanit = ""
            st.rerun()
    else:
        # Dosya yoksa veya soru sayısı 0 ise numara kutusunu gizle, uyarı ver.
        hedef_soru_sayisi = 0
        st.warning(f"⚠️ '{aktif_dosya}' dosyası yüklenmemiş veya içinde soru yok!")
        
    st.divider()
    st.markdown("<p style='text-align:center; color:#888; font-size:14px;'>SMM Akademi Dijital Eğitim Ekosistemi</p>", unsafe_allow_html=True)

# --- ANA EKRAN ---
st.title(f"⚖️ SMM {st.session_state.aktif_ders} Antrenörü")
st.markdown("---")

if not st.session_state.filtered_questions:
    st.info("👈 Lütfen sol menüden soru bankası yüklü olan bir ders seçin.")
    st.stop()

toplam = len(st.session_state.filtered_questions)
mevcut = st.session_state.current_idx + 1
st.markdown(f"<p class='progress-text'>📌 İlerleme: {mevcut} / {toplam}</p>", unsafe_allow_html=True)
st.progress(mevcut / toplam)
st.write("")

q = st.session_state.filtered_questions[st.session_state.current_idx]
soru_metni = q.get('q', q.get('soru', ''))

orijinal_secenekler = q.get('options', q.get('secenekler', []))
harfler = ["A) ", "B) ", "C) ", "D) ", "E) ", "F) ", "G) "]

gosterilecek_secenekler = []
for i, sec in enumerate(orijinal_secenekler):
    sec_str = str(sec)
    if sec_str.upper().startswith(("A)", "B)", "C)", "D)", "E)", "A.", "B.", "C.", "D.", "E.")):
        gosterilecek_secenekler.append(sec_str)
    else:
        prefix = harfler[i] if i < len(harfler) else f"{i+1}) "
        gosterilecek_secenekler.append(f"{prefix}{sec_str}")

st.markdown(f"""
    <div class="question-card">
        <h4 style='color:#d4af37; font-size: 22px; margin-bottom: 10px;'>{q.get('konu', 'Genel')}</h4>
        <p style='font-size:26px; line-height: 1.4;'>{soru_metni}</p>
    </div>
""", unsafe_allow_html=True)

secim = st.radio("Cevabınızı seçin:", gosterilecek_secenekler, key=f"radio_{st.session_state.current_idx}", index=None)

# Doğru Cevap Bulucu
dogru_deger = q.get('correct') if q.get('correct') is not None else (q.get('answer') if q.get('answer') is not None else q.get('cevap'))
dogru_metin = "Cevap bulunamadı"

if dogru_deger is not None:
    if isinstance(dogru_deger, int) and dogru_deger < len(orijinal_secenekler):
        dogru_metin = gosterilecek_secenekler[dogru_deger]
    elif isinstance(dogru_deger, str):
        temiz_dogru = str(dogru_deger).strip()
        for i, orj_sec in enumerate(orijinal_secenekler):
            if str(orj_sec).strip() == temiz_dogru:
                dogru_metin = gosterilecek_secenekler[i]
                break
        else:
            dogru_metin = dogru_deger

st.write("")
if st.button("✅ Cevabı Onayla & İncele"):
    if secim:
        if str(secim).strip().lower() == str(dogru_metin).strip().lower():
            st.markdown("""
                <div style="background-color: rgba(34, 197, 94, 0.15); border: 2px solid #22c55e; border-radius: 12px; padding: 25px; text-align: center; margin-bottom: 20px;">
                    <h2 style="color: #4ade80; margin: 0; font-size: 34px; font-weight: bold;">🎯 DOĞRU!</h2>
                    <p style="color: #f8fafc; font-size: 22px; margin-top: 10px; margin-bottom:0;">Mevzuat mantığını mükemmel kurdun.</p>
                </div>
            """, unsafe_allow_html=True)
        else:
            st.markdown(f"""
                <div style="background-color: rgba(239, 68, 68, 0.15); border: 2px solid #ef4444; border-radius: 12px; padding: 25px; text-align: center; margin-bottom: 20px;">
                    <h2 style="color: #f87171; margin: 0; font-size: 34px; font-weight: bold;">❌ YANLIŞ!</h2>
                    <p style="color: #f8fafc; font-size: 22px; margin-top: 10px; margin-bottom:0;">İşin doğrusu: <b style="color: #ffffff;">{dogru_metin}</b></p>
                </div>
            """, unsafe_allow_html=True)
            
        st.session_state.show_ref = True
        st.session_state.ai_analiz = False
        st.session_state.ai_yanit = ""
    else:
        st.warning("Lütfen fikrini belirten bir seçenek işaretle.")

if st.session_state.show_ref:
    if 'referans' in q and q['referans'].strip() != "":
        st.markdown(f"""
            <div class="reference-box">
                <b style="font-size: 22px; border-bottom: 1px solid #d4af37;">📜 KANUN REFERANSI VE ARGÜMAN:</b><br><br>
                {q.get('referans')}
            </div>
        """, unsafe_allow_html=True)
    else:
        st.markdown(f"""
            <div class="reference-box" style="border-color: #3b82f6;">
                <b style="font-size: 22px; color:#3b82f6;">🤖 YAPAY ZEKA MEVZUAT ANALİZİ</b><br><br>
                Bu sorunun veritabanında sabit bir kanun maddesi bulunmuyor. Mevzuat bağlantısını yapay zeka ile dinamik olarak sorgulayabilirsiniz.
            </div>
        """, unsafe_allow_html=True)
        
        st.markdown('<div class="ai-button">', unsafe_allow_html=True)
        if st.button("🤖 Yapay Zeka Asistanından Analiz İste"):
            if not API_KEY:
                st.error("⚠️ Sistem Hatası: API Anahtarı bulunamadı.")
            else:
                with st.spinner("Taranıyor, argüman oluşturuluyor..."):
                    try:
                        client = genai.Client(api_key=API_KEY)
                        
                        uzmanlik_alani = "Vergi Hukuku" if st.session_state.aktif_ders == "Vergi Mevzuatı" else "Sermaye Piyasası Mevzuatı (SPK)"
                        prompt = f"Sen uzman bir Mali Müşavir ve {uzmanlik_alani} eğitmenisin. Şu sorunun doğru cevabının '{dogru_metin}' olduğunu biliyoruz. Lütfen bu cevabın neden doğru olduğunu, ilgili mevzuata dayanarak SMMM yeterlilik sınavına hazırlanan birine anlatır gibi profesyonelce ve kısaca açıkla.\n\nSoru: {soru_metni}\nSeçenekler: {gosterilecek_secenekler}"
                        
                        response = client.models.generate_content(
                            model='gemini-1.5-flash',
                            contents=prompt
                        )
                        st.session_state.ai_yanit = response.text
                        st.session_state.ai_analiz = True
                    except Exception as e:
                        st.error(f"Bir hata oluştu: Lütfen bağlantınızı kontrol edin. Detay: {e}")
        st.markdown('</div>', unsafe_allow_html=True)
        
        if st.session_state.ai_analiz and st.session_state.ai_yanit:
            st.info(f"**🤖 Asistanın Analizi:**\n\n{st.session_state.ai_yanit}")

st.markdown("---")
colA, colB = st.columns(2)

with colA:
    if st.button(f"➡️ Sonraki Soru"):
        if st.session_state.current_idx < len(st.session_state.filtered_questions) - 1:
            st.session_state.current_idx += 1
            st.session_state.show_ref = False
            st.session_state.ai_analiz = False
            st.rerun()
        else:
            st.balloons()
            st.success("Harika! Belirlediğin hedef soru sayısına ulaştın.")

with colB:
    if st.button("🛑 Antrenmanı Bitir / Başa Dön"):
        st.session_state.current_idx = 0
        st.session_state.show_ref = False
        st.session_state.ai_analiz = False
        random.shuffle(st.session_state.original_questions)
        st.session_state.filtered_questions = st.session_state.original_questions[:hedef_soru_sayisi]
        st.rerun()