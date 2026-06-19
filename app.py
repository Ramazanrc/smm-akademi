import streamlit as st
from supabase import create_client, Client
import datetime

# --- SUPABASE BAĞLANTISI ---
SUPABASE_URL = "https://tabawsteedejlowaojws.supabase.co"
SUPABASE_KEY = "SENİN_UZUN_ŞİFRENİ_BURAYA_YAZ" # Lütfen o upuzun şifreni buraya tekrar yapıştır!

@st.cache_resource
def init_connection():
    return create_client(SUPABASE_URL, SUPABASE_KEY)

supabase: Client = init_connection()

# --- SAYFA AYARLARI ---
st.set_page_config(page_title="Cemiyet Paneli", page_icon="🌿", layout="centered")

# --- ÖZEL CSS MAKYAJI ---
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800;900&display=swap');
    
    html, body, [class*="css"] { font-family: 'Nunito', sans-serif !important; }
    .stApp { background-color: #f4f9f6; }
    [data-testid="stSidebar"] { background: linear-gradient(180deg, #e4f0e9 0%, #f4f9f6 100%); }
    
    /* NORMAL BUTONLAR */
    [data-testid="stAppViewContainer"] .stButton > button[kind="secondary"] {
        border-radius: 10px; transition: 0.1s; font-weight: 800;
        font-size: 15px !important; padding: 10px 8px !important;
        border: 2px solid #cce3d5 !important; 
        background-color: #ffffff !important;
        color: #1e7145 !important; 
        white-space: pre-wrap !important; 
        height: auto !important; 
        line-height: 1.3 !important;
    }
    [data-testid="stAppViewContainer"] .stButton > button[kind="secondary"]:hover {
        border-color: #2e8b57 !important;
    }

    /* BİRİNCİL (PRIMARY) BUTONLAR */
    [data-testid="stAppViewContainer"] .stButton > button[kind="primary"] {
        border-radius: 10px; transition: 0.1s; font-weight: 800;
        font-size: 15px !important; padding: 10px 8px !important;
        background: linear-gradient(90deg, #2e8b57, #45b39d) !important;
        color: #ffffff !important; 
        border: none !important;
        white-space: pre-wrap !important; 
        height: auto !important; 
        line-height: 1.3 !important;
        box-shadow: 0 4px 10px rgba(46,139,87,0.2) !important;
    }

    /* DEVRE DIŞI BUTONLAR */
    [data-testid="stAppViewContainer"] .stButton > button:disabled {
        background: #eaf3ed !important;
        color: #8fa898 !important; 
        border: 2px dashed #cce3d5 !important;
        box-shadow: none !important;
    }
    
    /* SOL MENÜ BUTONLARI */
    [data-testid="stSidebar"] .stButton>button[kind="secondary"] {
        border-radius: 12px; transition: 0.2s; font-weight: 800; font-size: 16px !important;
        padding: 10px 15px !important; border: none !important; background-color: transparent !important;
        color: #1e7145 !important; justify-content: flex-start !important; box-shadow: none !important; margin-bottom: 2px;
    }
    [data-testid="stSidebar"] .stButton>button[kind="secondary"]:hover {
        background-color: #d1e8da !important; transform: translateX(4px); color: #1b5e20 !important;
    }
    [data-testid="stSidebar"] .stButton>button[kind="primary"] {
        background: linear-gradient(90deg, #2e8b57, #45b39d) !important; color: white !important;
        box-shadow: 0 4px 10px rgba(46,139,87,0.2) !important;
        border-radius: 12px; font-weight: 800; font-size: 16px !important;
        padding: 10px 15px !important; border: none !important; justify-content: flex-start !important; margin-bottom: 2px;
    }
    
    .stProgress > div > div > div > div { background-color: #45b39d; height: 10px; border-radius: 10px; }
    
    .bilgi-kutusu {
        padding: 18px 18px; border-radius: 12px; background: linear-gradient(145deg, #ffffff, #f9fdfa);
        border-left: 6px solid #2e8b57; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.04);
    }
    [data-testid="stMetricValue"] { color: #1b5e20; font-size: 1.8rem !important; font-weight: 800; }

    .tarih-bari {
        background-color: #45b39d; color: white; padding: 15px 20px; border-radius: 12px;
        font-size: 18px; font-weight: 900; display: flex; justify-content: space-between;
        align-items: center; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(69, 179, 157, 0.2);
    }
    .cetele-karti {
        background-color: white; border: 1px solid #eaf3ed; border-radius: 15px; padding: 15px;
        margin-bottom: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
</style>
""", unsafe_allow_html=True)

# --- OTURUM YÖNETİMİ & VERİ YAPILARI ---
if 'giris_yapildi' not in st.session_state: st.session_state['giris_yapildi'] = False
if 'kullanici_adi' not in st.session_state: st.session_state['kullanici_adi'] = ""
if 'bolge' not in st.session_state: st.session_state['bolge'] = ""
if 'admin_yetkisi' not in st.session_state: st.session_state['admin_yetkisi'] = False

bugun = datetime.date.today()
haftaya = bugun + datetime.timedelta(days=7)

if 'cetele_modu' not in st.session_state: st.session_state['cetele_modu'] = 'ozet'
if 'cetele_bas' not in st.session_state: st.session_state['cetele_bas'] = bugun
if 'cetele_bitis' not in st.session_state: st.session_state['cetele_bitis'] = haftaya
if 'zikirmatik_sayac' not in st.session_state: st.session_state['zikirmatik_sayac'] = 0
if 'zikirmatik_hedef' not in st.session_state: st.session_state['zikirmatik_hedef'] = 500 
if 'zikirmatik_tur' not in st.session_state: st.session_state['zikirmatik_tur'] = 0 
if 'secili_menu' not in st.session_state: st.session_state['secili_menu'] = "📖 Kuran-ı Kerim Hatmi"

if 'cetele' not in st.session_state:
    st.session_state['cetele'] = {
        'Risale-i Nur': {'hedef': 3, 'okunan': 0, 'icon': '🔖'},
        'Kuran-ı Kerim': {'hedef': 5, 'okunan': 0, 'icon': '📖'},
        'Cevşenül Kebir': {'hedef': 3, 'okunan': 0, 'icon': '🛡️'},
        'Yazı': {'hedef': 1, 'okunan': 0, 'icon': '✍️'}
    }

if 'yasin_listesi' not in st.session_state: st.session_state['yasin_listesi'] = []
if 'ihlas_listesi' not in st.session_state: st.session_state['ihlas_listesi'] = []
if 'salavat_listesi' not in st.session_state: st.session_state['salavat_listesi'] = []
if 'zikir_listesi' not in st.session_state: st.session_state['zikir_listesi'] = []
if 'ekstra_kuranlar' not in st.session_state: st.session_state['ekstra_kuranlar'] = []

def menuyu_degistir(yeni_isim): st.session_state['secili_menu'] = yeni_isim

# --- ZİKİRMATİK MODÜLÜ (Sıfır Gecikme - Fragment Mimarisi) ---
@st.experimental_fragment
def zikirmatik_bileseni(anahtar="ana"):
    st.markdown("<div class='bilgi-kutusu'><h3 style='color:#1e7145; margin-top:0px;'>🔢 Zikirmatik</h3><p style='color:gray; font-size:14px; margin-bottom:0px;'>Hedefe ulaştığınızda sayaç sıfırlanır ve alt kısımda attığınız tur sayısı belirtilir.</p></div>", unsafe_allow_html=True)
    
    col1, col2 = st.columns(2)
    with col1:
        st.markdown("<div style='font-size:14px; font-weight:bold; color:#1e7145; margin-bottom:2px;'>Hedef Belirle:</div>", unsafe_allow_html=True)
        yeni_hedef = st.number_input("", min_value=1, value=st.session_state['zikirmatik_hedef'], step=50, key=f"z_hedef_{anahtar}", label_visibility="collapsed")
        if yeni_hedef != st.session_state['zikirmatik_hedef']: 
            st.session_state['zikirmatik_hedef'] = yeni_hedef
    with col2:
        st.markdown("<div style='margin-top:24px;'></div>", unsafe_allow_html=True)
        if st.button("🔄 Sayacı Sıfırla", key=f"z_sifirla_{anahtar}", use_container_width=True): 
            st.session_state['zikirmatik_sayac'] = 0
            st.session_state['zikirmatik_tur'] = 0 
    
    hedef = st.session_state['zikirmatik_hedef']
    sayac = st.session_state['zikirmatik_sayac']
    tur = st.session_state['zikirmatik_tur']
    yuzde = int((sayac / hedef) * 100) if hedef > 0 else 0
    
    st.markdown(f"""
    <style>
        div[data-testid="stElementContainer"]:has(.z-anchor-{anahtar}) + div[data-testid="stElementContainer"] button[kind="primary"],
        div.element-container:has(.z-anchor-{anahtar}) + div.element-container button[kind="primary"] {{
            border-radius: 50% !important; width: 270px !important; height: 270px !important; 
            color: #0b5345 !important; background: linear-gradient(to top, #a3e4d7 {yuzde}%, #ffffff {yuzde}%) !important; 
            border: 8px solid #ffffff !important; outline: 5px dashed #45b39d !important; outline-offset: 4px !important;
            box-shadow: 0 15px 35px rgba(46,139,87,0.3), inset 0 10px 20px rgba(0,0,0,0.05) !important; 
            transition: transform 0.05s !important; margin: 30px auto !important; display: flex !important; 
            align-items: center !important; justify-content: center !important; text-align: center !important;
        }}
        div[data-testid="stElementContainer"]:has(.z-anchor-{anahtar}) + div[data-testid="stElementContainer"] button[kind="primary"]:active,
        div.element-container:has(.z-anchor-{anahtar}) + div.element-container button[kind="primary"]:active {{ 
            transform: scale(0.94) !important; 
        }}
        div[data-testid="stElementContainer"]:has(.z-anchor-{anahtar}) + div[data-testid="stElementContainer"] button[kind="primary"] p,
        div.element-container:has(.z-anchor-{anahtar}) + div.element-container button[kind="primary"] p {{ 
            font-size: 40px !important; font-weight: 900 !important; color: #0b5345 !important; 
            text-shadow: 1px 1px 2px rgba(255,255,255,0.8) !important; line-height: 1.2 !important;
        }}
    </style>
    """, unsafe_allow_html=True)
    
    col_s1, col_center, col_s2 = st.columns([1, 2, 1])
    with col_center:
        st.markdown(f'<div class="z-anchor-{anahtar}"></div>', unsafe_allow_html=True)
        btn_icerik = f"👆 {sayac} / {hedef}"
        if tur > 0: btn_icerik += f"\n⭐ {tur}"
            
        if st.button(btn_icerik, key=f"z_btn_{anahtar}", type="primary", use_container_width=True):
            st.session_state['zikirmatik_sayac'] += 1
            if st.session_state['zikirmatik_sayac'] >= hedef:
                st.toast(f"Tebrikler! {hedef} Barajı Geçildi.", icon="🎉")
                st.session_state['zikirmatik_sayac'] = 0
                st.session_state['zikirmatik_tur'] += 1 

# --- DİNAMİK HATİM MOTORU ---
def dinamik_hatim_olusturucu(modul_baslik, ikon, state_key, ornek_hedef):
    st.markdown(f"<div class='bilgi-kutusu'><h3 style='color:#1e7145; margin-top:0px;'>{ikon} {modul_baslik}</h3></div>", unsafe_allow_html=True)
    
    with st.expander(f"➕ Yeni {modul_baslik} Başlat"):
        c1, c2 = st.columns(2)
        y_baslik = c1.text_input("Hatim / Zikir Adı", key=f"y_baslik_{state_key}")
        y_hedef = c2.number_input("Hedef Sayı", min_value=1, value=ornek_hedef, step=10, key=f"y_hedef_{state_key}")
        c3, c4 = st.columns(2)
        y_bas = c3.date_input("Başlangıç Tarihi", value=bugun, key=f"y_bas_{state_key}")
        y_bit = c4.date_input("Bitiş Tarihi", value=haftaya, key=f"y_bit_{state_key}")
        
        if st.button("🚀 Sisteme Ekle ve Başlat", key=f"y_btn_{state_key}", type="primary"):
            if y_baslik:
                st.session_state[state_key].append({'id': len(st.session_state[state_key])+1, 'baslik': y_baslik, 'hedef': y_hedef, 'okunan': 0, 'baslangic': y_bas, 'bitis': y_bit, 'aktif': True})
                st.rerun()
            else: st.warning("Lütfen bir isim giriniz.")
                
    st.markdown("---")
    
    aktifler = [h for h in st.session_state[state_key] if h.get('aktif', True)]
    if not aktifler: st.info("Devam eden aktif kayıt bulunmuyor.")
        
    for idx, h in enumerate(st.session_state[state_key]):
        if h.get('aktif', True):
            bg_color = "#ffffff"; border_color = "#eaf3ed"; durum_etiketi = ""
            if h['okunan'] >= h['hedef']:
                bg_color = "#f0fdf4"; border_color = "#4ade80"
                durum_etiketi = "<span style='color:#16a34a; font-weight:bold; font-size:14px;'>✅ Tamamlandı</span>"
            elif bugun > h['bitis']:
                bg_color = "#fef2f2"; border_color = "#f87171"
                durum_etiketi = "<span style='color:#dc2626; font-weight:bold; font-size:14px;'>⚠️ Süre Doldu!</span>"

            st.markdown(f"<div style='background-color:{bg_color}; border:2px solid {border_color}; border-radius:15px; padding:15px; margin-bottom:15px; box-shadow:0 2px 8px rgba(0,0,0,0.03);'>", unsafe_allow_html=True)
            ust_c1, ust_c2 = st.columns([3, 1])
            yuzde = int((h['okunan']/h['hedef'])*100) if h['hedef']>0 else 0
            with ust_c1:
                st.markdown(f"<div style='font-size:20px; font-weight:900; color:#1e7145;'>{h['baslik']} {durum_etiketi}</div>", unsafe_allow_html=True)
                st.markdown(f"<div style='font-size:13px; color:#5a7d66; margin-bottom:5px;'>📅 <b>{h['baslangic'].strftime('%d.%m.%Y')}</b> - <b>{h['bitis'].strftime('%d.%m.%Y')}</b></div>", unsafe_allow_html=True)
            with ust_c2: st.markdown(f"<div style='text-align:right; font-size:22px; font-weight:800; color:#45b39d;'>%{min(yuzde, 100)}</div>", unsafe_allow_html=True)
                
            st.progress(min(yuzde, 100))
            c_m1, c_m2, c_m3 = st.columns(3)
            c_m1.metric("Hedef", h['hedef'])
            c_m2.metric("Okunan", h['okunan'])
            c_m3.metric("Kalan", max(0, h['hedef'] - h['okunan']))
            
            st.markdown("<hr style='margin:10px 0px; border-color:#eaf3ed;'>", unsafe_allow_html=True)
            col_al1, col_al2, col_al3 = st.columns([2, 1.5, 1.5])
            kisi = col_al1.text_input("Okuyacak Kişi", value=st.session_state['kullanici_adi'], key=f"kisi_{state_key}_{idx}")
            alinacak = col_al2.number_input("Adet", min_value=1, value=1, step=1, key=f"adet_{state_key}_{idx}")
            
            btn_c1, btn_c2 = col_al3.columns(2)
            with btn_c1:
                st.markdown("<div style='margin-top:28px;'></div>", unsafe_allow_html=True)
                if h['okunan'] < h['hedef']:
                    if st.button("➕ Ekle", key=f"pay_al_{state_key}_{idx}", use_container_width=True):
                        st.session_state[state_key][idx]['okunan'] += alinacak
                        st.rerun()
                    
            if h['okunan'] >= h['hedef']:
                if st.button("🗂️ Arşive Taşı", key=f"arsivle_{state_key}_{idx}", type="primary", use_container_width=True):
                    st.session_state[state_key][idx]['aktif'] = False
                    st.rerun()
            st.markdown("</div>", unsafe_allow_html=True)

# --- 1. ADIM: ŞİFRE EKRANI ---
if not st.session_state['giris_yapildi']:
    st.markdown("<br><br><h1 style='text-align: center; color: #1e7145; font-size: 2.8rem; font-weight: 900;'>🌿 Cemiyet Paneli</h1>", unsafe_allow_html=True)
    st.markdown("<p style='text-align: center; color: #5a7d66;'>Lütfen topluluk giriş şifresini giriniz.</p>", unsafe_allow_html=True)
    sifre = st.text_input("Şifre:", type="password", label_visibility="collapsed", placeholder="Giriş Şifresi")
    if st.button("Giriş Yap", use_container_width=True, type="primary"):
        if sifre == "1453": st.session_state['giris_yapildi'] = True; st.rerun()
        else: st.error("Hatalı şifre!")

# --- 2. ADIM: İSİM VE BÖLGE GİRİŞİ ---
elif st.session_state['kullanici_adi'] == "":
    st.markdown("<br><h2 style='text-align: center; color:#1e7145; font-weight: 800;'>Hoş Geldiniz</h2>", unsafe_allow_html=True)
    isim = st.text_input("Ad Soyad:", placeholder="Örn: Ramazan Çeliktepe")
    bolge = st.text_input("Bölge / Kurum (İsteğe Bağlı):", placeholder="Örn: İstanbul / Avcılar")
    if st.button("Sisteme Giriş Yap", use_container_width=True, type="primary"):
        if isim.strip():
            st.session_state['kullanici_adi'] = isim
            st.session_state['bolge'] = bolge
            st.rerun()
        else: st.warning("Lütfen adınızı boş bırakmayınız!")

# --- 3. ADIM: ANA PANEL ---
else:
    bolge_metni = f"<p style='color: #5a7d66; font-size: 14px; margin-top: -5px;'>📍 {st.session_state['bolge']}</p>" if st.session_state['bolge'] else ""
    st.sidebar.markdown(f"<div style='margin-bottom: 20px;'><p style='color: #2e8b57; font-size: 16px; margin-bottom: 0px;'>Selamünaleyküm,</p><h2 style='color: #1b5e20; font-weight: 900; font-size: 22px; margin-top: -3px; margin-bottom: 5px;'>{st.session_state['kullanici_adi']}</h2>{bolge_metni}</div>", unsafe_allow_html=True)
    st.sidebar.markdown("<div style='background: linear-gradient(90deg, #1e7145, #45b39d); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 24px; font-weight: 900; margin-bottom: 15px; margin-top: 10px; text-align: center; border-bottom: 2px dashed #cce3d5; padding-bottom: 10px;'>🌿 İBADET PANOSU</div>", unsafe_allow_html=True)

    menu_ogeleri = [
        "📖 Kuran-ı Kerim Hatmi", "🕌 Yasin-i Şerif", "🕋 İhlas Hatmi", "📿 Salavat Hatmi", 
        "🤲 Zikir Hatmi", "🛡️ Cevşen Hatmi", "📝 Çetele", "🔢 Zikirmatik", "🗂️ Biten Hatimler (Arşiv)", "👑 Moderatör Paneli"
    ]
    for oge in menu_ogeleri:
        if st.session_state['secili_menu'] == oge: st.sidebar.button(oge, key=f"btn_{oge}", use_container_width=True, type="primary", on_click=menuyu_degistir, args=(oge,))
        else: st.sidebar.button(oge, key=f"btn_{oge}", use_container_width=True, on_click=menuyu_degistir, args=(oge,))

    st.sidebar.markdown("---")
    menu = st.session_state['secili_menu']

    # --- KURAN HATMİ ---
    if menu == "📖 Kuran-ı Kerim Hatmi":
        st.markdown(f"<div class='bilgi-kutusu'><h3 style='color: #1e7145; font-weight: 800; margin-top:0px;'>📖 Ana Kuran Hatmi (Veritabanı)</h3></div>", unsafe_allow_html=True)
        try:
            response = supabase.table("hatim_listesi").select("*").order("cuz_no").execute()
            cuzler = response.data
            toplam_cuz = 30
            alinan_cuz = sum(1 for cuz in cuzler if cuz["durum"] == "dolu")
            yuzde = int((alinan_cuz / toplam_cuz) * 100) if toplam_cuz > 0 else 0

            bg_color = "#f0fdf4" if alinan_cuz == 30 else "#ffffff"
            border_color = "#4ade80" if alinan_cuz == 30 else "#eaf3ed"
            
            # Mobil Uyumlu Yan Yana Metrikler
            st.markdown(f"""
            <div style="display: flex; justify-content: space-around; background-color: {bg_color}; padding: 15px; border-radius: 12px; border: 2px solid {border_color}; margin-bottom: 20px;">
                <div style="text-align: center;"><div style="color: gray; font-size: 14px; font-weight: bold;">Toplam</div><div style="color: #1e7145; font-size: 24px; font-weight: 900;">30</div></div>
                <div style="text-align: center;"><div style="color: gray; font-size: 14px; font-weight: bold;">Alınan</div><div style="color: #1e7145; font-size: 24px; font-weight: 900;">{alinan_cuz}</div></div>
                <div style="text-align: center;"><div style="color: gray; font-size: 14px; font-weight: bold;">Kalan</div><div style="color: #1e7145; font-size: 24px; font-weight: 900;">{toplam_cuz - alinan_cuz}</div></div>
            </div>
            """, unsafe_allow_html=True)
            
            st.progress(yuzde)
            if alinan_cuz == 30: st.success("✅ Merkezi Kuran Hatmi Tamamlanmıştır!")
            st.markdown("<br>", unsafe_allow_html=True)

            # Mobilde Cüzlerin Sıralı İnmesi İçin Özel Satır (Row) Mantığı
            for satir in range(6):
                sutunlar = st.columns(5)
                for sutun in range(5):
                    cuz_idx = (satir * 5) + sutun
                    if cuz_idx < len(cuzler):
                        cuz = cuzler[cuz_idx]
                        i = cuz["cuz_no"]
                        durum = cuz["durum"]
                        alan_kisi = cuz["kullanici_adi"]
                        with sutunlar[sutun]:
                            if durum == "dolu": st.button(f"Cüz {i}\n({alan_kisi})", key=f"c_{i}", disabled=True, use_container_width=True)
                            else:
                                if st.button(f"Cüz {i}", key=f"c_{i}", use_container_width=True):
                                    supabase.table("hatim_listesi").update({"durum": "dolu", "kullanici_adi": st.session_state['kullanici_adi']}).eq("cuz_no", i).execute()
                                    st.rerun()
            st.markdown("</div>", unsafe_allow_html=True)
        except Exception as e:
            st.error("⚠️ Veritabanı uyku modunda! Lütfen Supabase panelinizden 'Restore' butonuna basarak veritabanını uyandırın.")

        st.markdown("<br><h3 style='color:#1e7145;'>📑 Yeni Kuran Hatmi Grupları</h3>", unsafe_allow_html=True)
        with st.expander("➕ Yeni Kuran Hatmi Başlat"):
            c1, c2 = st.columns(2)
            y_k_ad = c1.text_input("Grup / Hatim Adı", placeholder="Örn: Ramazan Ayı Grubu")
            y_k_bas = c2.date_input("Başlangıç Tarihi", value=bugun, key="ykb")
            y_k_bit = c2.date_input("Bitiş Tarihi", value=haftaya, key="ykbi")
            if st.button("🚀 Yeni Kuran Grubu Oluştur", type="primary"):
                if y_k_ad:
                    yeni_id = len(st.session_state['ekstra_kuranlar']) + 1
                    bos_cuzler = {str(k): "" for k in range(1, 31)} 
                    st.session_state['ekstra_kuranlar'].append({'id': yeni_id, 'baslik': y_k_ad, 'baslangic': y_k_bas, 'bitis': y_k_bit, 'cuzler': bos_cuzler, 'aktif': True})
                    st.rerun()

        for ek in st.session_state['ekstra_kuranlar']:
            if ek.get('aktif', True):
                ek_alinan = sum(1 for v in ek['cuzler'].values() if v != "")
                ek_yuzde = int((ek_alinan / 30) * 100)
                ek_bg = "#ffffff"; ek_border = "#eaf3ed"; ek_durum = ""
                if ek_alinan == 30: ek_bg = "#f0fdf4"; ek_border = "#4ade80"; ek_durum = "<span style='color:#16a34a; font-size:14px;'>✅ Tamamlandı</span>"
                elif bugun > ek['bitis']: ek_bg = "#fef2f2"; ek_border = "#f87171"; ek_durum = "<span style='color:#dc2626; font-size:14px;'>⚠️ Süre Doldu!</span>"

                st.markdown(f"<div style='background-color:{ek_bg}; border:2px solid {ek_border}; border-radius:15px; padding:15px; margin-bottom:15px; box-shadow:0 2px 8px rgba(0,0,0,0.03);'>", unsafe_allow_html=True)
                ec1, ec2 = st.columns([3,1])
                with ec1:
                    st.markdown(f"<div style='font-size:18px; font-weight:800; color:#1e7145;'>{ek['baslik']} {ek_durum}</div>", unsafe_allow_html=True)
                    st.markdown(f"<div style='font-size:13px; color:gray;'>📅 {ek['baslangic'].strftime('%d.%m.%Y')} - {ek['bitis'].strftime('%d.%m.%Y')}</div>", unsafe_allow_html=True)
                with ec2: st.markdown(f"<div style='text-align:right; font-size:20px; font-weight:800; color:#45b39d;'>%{ek_yuzde}</div>", unsafe_allow_html=True)
                
                st.progress(ek_yuzde)
                st.markdown("<br>", unsafe_allow_html=True)
                
                # Mobilde Sıralı İnmesi İçin Row Mantığı (Ekstra Gruplar)
                for satir in range(6):
                    ek_cols = st.columns(5)
                    for sutun in range(5):
                        c_no = (satir * 5) + sutun + 1
                        if c_no <= 30:
                            alan = ek['cuzler'][str(c_no)]
                            with ek_cols[sutun]:
                                if alan != "": st.button(f"Cüz {c_no}\n({alan})", key=f"ek_{ek['id']}_{c_no}", type="primary", use_container_width=True)
                                else:
                                    if st.button(f"Cüz {c_no}", key=f"ek_{ek['id']}_{c_no}", use_container_width=True):
                                        ek['cuzler'][str(c_no)] = st.session_state['kullanici_adi']; st.rerun()
                                        
                if ek_alinan == 30:
                    if st.button("🗂️ Arşive Taşı", key=f"arsiv_ek_{ek['id']}", type="primary", use_container_width=True):
                        ek['aktif'] = False; st.rerun()
                st.markdown("</div>", unsafe_allow_html=True)

    # --- DİNAMİK HATİMLER ---
    elif menu == "🕌 Yasin-i Şerif": dinamik_hatim_olusturucu("Yasin Hatimleri", "🕌", "yasin_listesi", 41)
    elif menu == "🕋 İhlas Hatmi": dinamik_hatim_olusturucu("İhlas Hatimleri", "🕋", "ihlas_listesi", 100000)
    elif menu == "📿 Salavat Hatmi": dinamik_hatim_olusturucu("Salavat Hatimleri", "📿", "salavat_listesi", 10000)
    elif menu == "🤲 Zikir Hatmi": 
        dinamik_hatim_olusturucu("Zikir Hatimleri", "🤲", "zikir_listesi", 70000)
        st.markdown("<br><hr>", unsafe_allow_html=True)
        zikirmatik_bileseni("hatim")

    # --- CEVŞEN HATMİ ---
    elif menu == "🛡️ Cevşen Hatmi":
        st.markdown(f"<div class='bilgi-kutusu'><h3 style='color: #1e7145; font-weight: 800; margin-top:0px;'>🛡️ Büyük Cevşen (Hizb-ül Hakaik)</h3></div>", unsafe_allow_html=True)
        cevsen_listesi = ["Duâ-yı Cevşenü'l-Kebîr", "Evrâd-ı Kudsiye", "Delâilü'n-Nûr", "Sekîne", "İsm-i A'zam Mertebesinde Bir Duâ", "Münâcât-ı Üveys-el Karanî", "Duâ-yı İsm-i A'zam", "Duâ-yı Tercümân-ı İsm-i A'zam", "Münâcâtü'l-Kur'ân", "Tahmîdiye", "Hulâsatü'l-Hulâsa", "Kasîde-i Celcelûtiye", "Münâcâtlar"]
        sutunlar = st.columns(2)
        for i, bolum in enumerate(cevsen_listesi):
            with sutunlar[i % 2]:
                if bolum == "Sekîne": st.button(f"🔴 {bolum}\n(Fatma)", key=f"cev_{i}", disabled=True, use_container_width=True)
                elif bolum == "Duâ-yı Cevşenü'l-Kebîr": st.button(f"🔴 {bolum}\n({st.session_state['kullanici_adi']})", key=f"cev_{i}", type="primary", use_container_width=True)
                else:
                    if st.button(f"📖 {bolum}", key=f"cev_{i}", use_container_width=True): st.toast(f"{bolum} alındı!", icon="✅")

    # --- ÇETELE ---
    elif menu == "📝 Çetele":
        col_tarih1, col_tarih2 = st.columns([1, 2])
        with col_tarih2:
            tarih_araligi = st.date_input("Zaman Çizelgesi", value=(st.session_state['cetele_bas'], st.session_state['cetele_bitis']), label_visibility="collapsed")
            if len(tarih_araligi) == 2:
                st.session_state['cetele_bas'] = tarih_araligi[0]; st.session_state['cetele_bitis'] = tarih_araligi[1]
                
        tb = st.session_state['cetele_bas']; tbi = st.session_state['cetele_bitis']
        st.markdown(f"<div class='tarih-bari' style='margin-top:-10px;'><span>📅</span><span style='font-size:16px;'>{tb.strftime('%d.%m.%Y')} - {tbi.strftime('%d.%m.%Y')}</span><span style='font-size:16px;'>🌿</span></div>", unsafe_allow_html=True)

        if st.session_state['cetele_modu'] == 'ozet':
            col1, col2 = st.columns([2, 1])
            with col1: st.markdown("<h4 style='color:#45b39d; font-weight:800; margin-top:5px;'>📊 Günlük Hedefler</h4>", unsafe_allow_html=True)
            with col2:
                tamamlanan = sum(1 for v in st.session_state['cetele'].values() if v['okunan'] >= v['hedef'])
                if st.button(f"📝 Düzenle {tamamlanan}/{len(st.session_state['cetele'])}", use_container_width=True):
                    st.session_state['cetele_modu'] = 'detay'; st.rerun()
            st.markdown("<hr style='margin-top:0px;'>", unsafe_allow_html=True)

            for baslik, veriler in st.session_state['cetele'].items():
                yuzde = int((veriler['okunan'] / veriler['hedef']) * 100) if veriler['hedef'] > 0 else 0
                st.markdown(f"""
                <div style="display: flex; align-items: center; justify-content: space-between; background: white; padding: 12px 15px; border-radius: 12px; margin-bottom: 10px; border: 1px solid #eaf3ed; box-shadow: 0 2px 5px rgba(0,0,0,0.02);">
                    <div style="font-weight: 700; color: #333; flex: 1.5; font-size: 15px;">{veriler['icon']} {baslik}</div>
                    <div style="flex: 2; margin: 0 12px; min-width: 80px;">
                        <div style="background-color: #eaf3ed; border-radius: 10px; height: 10px; width: 100%; overflow: hidden;">
                            <div style="background-color: #45b39d; height: 10px; width: {min(yuzde, 100)}%;"></div>
                        </div>
                    </div>
                    <div style="background-color: #eaf3ed; border-radius: 8px; padding: 4px 10px; font-weight: 800; color: #45b39d; font-size: 14px; text-align: center; min-width: 55px;">
                        {veriler['okunan']}/{veriler['hedef']}
                    </div>
                </div>
                """, unsafe_allow_html=True)
                
        elif st.session_state['cetele_modu'] == 'detay':
            col1, col2 = st.columns([3, 1])
            with col1: st.markdown("<h4 style='color:#45b39d; font-weight:800; margin-top:5px;'>HEDEF GİRİŞİ</h4>", unsafe_allow_html=True)
            with col2:
                if st.button("✖ Kapat", use_container_width=True): st.session_state['cetele_modu'] = 'ozet'; st.rerun()

            for baslik, veriler in st.session_state['cetele'].items():
                c_bg = "#ffffff"; c_bd = "#eaf3ed"
                if veriler['okunan'] >= veriler['hedef']: c_bg = "#f0fdf4"; c_bd = "#4ade80"
                elif bugun > st.session_state['cetele_bitis']: c_bg = "#fef2f2"; c_bd = "#f87171"

                st.markdown(f"<div class='cetele-karti' style='background-color:{c_bg}; border:2px solid {c_bd};'>", unsafe_allow_html=True)
                uc1, uc2 = st.columns([2, 1])
                with uc1: st.markdown(f"<div style='font-size:18px; font-weight:800; color:#1e7145; margin-top:5px;'>{veriler['icon']} {baslik}</div>", unsafe_allow_html=True)
                with uc2:
                    if veriler['okunan'] >= veriler['hedef']: st.button("✅ Tamamlandı", key=f"f_{baslik}", disabled=True, type="primary", use_container_width=True)
                    else:
                        if st.button("✔️ Tamamla", key=f"d_{baslik}", type="primary", use_container_width=True):
                            st.session_state['cetele'][baslik]['okunan'] = veriler['hedef']; st.rerun()
                ac1, ac2, ac3, ac4 = st.columns([1, 1.5, 1, 1.5])
                with ac1:
                    if st.button("➖", key=f"e_{baslik}", use_container_width=True) and st.session_state['cetele'][baslik]['okunan'] > 0: st.session_state['cetele'][baslik]['okunan'] -= 1; st.rerun()
                with ac2: st.markdown(f"<div style='text-align:center; font-size:24px; font-weight:900;'>{veriler['okunan']}</div>", unsafe_allow_html=True)
                with ac3:
                    if st.button("➕", key=f"a_{baslik}", use_container_width=True): st.session_state['cetele'][baslik]['okunan'] += 1; st.rerun()
                with ac4:
                    yh = st.number_input("", min_value=1, value=veriler['hedef'], step=1, key=f"h_{baslik}", label_visibility="collapsed")
                    if yh != veriler['hedef']: st.session_state['cetele'][baslik]['hedef'] = yh; st.rerun()
                st.markdown("</div>", unsafe_allow_html=True)
            
            with st.expander("➕ Yeni Manuel Görev Ekle"):
                y_g_c1, y_g_c2, y_g_c3 = st.columns([2, 1, 1])
                y_g_ad = y_g_c1.text_input("Görev Adı")
                y_g_hedef = y_g_c2.number_input("Sayı", min_value=1, value=10)
                y_g_icon = y_g_c3.selectbox("İkon", ["📌", "🤲", "📖", "📿", "🏃"])
                if st.button("Görevi Ekle", type="primary"):
                    if y_g_ad: st.session_state['cetele'][y_g_ad] = {'hedef': y_g_hedef, 'okunan': 0, 'icon': y_g_icon}; st.rerun()

            alt_btn1, alt_btn2 = st.columns(2)
            with alt_btn1:
                if st.button("❌ İptal", use_container_width=True): st.session_state['cetele_modu'] = 'ozet'; st.rerun()
            with alt_btn2:
                if st.button("✅ Kaydet / Çık", use_container_width=True, type="primary"): st.session_state['cetele_modu'] = 'ozet'; st.rerun()

    # --- ARŞİV ---
    elif menu == "🗂️ Biten Hatimler (Arşiv)":
        st.markdown(f"<div class='bilgi-kutusu'><h3 style='color: #1e7145; font-weight: 800; margin-top:0px;'>🗂️ Tamamlanan Hatimler Arşivi</h3></div>", unsafe_allow_html=True)
        arsiv_dolu = False
        kategoriler = {'Kuran Grupları': 'ekstra_kuranlar', 'Yasin': 'yasin_listesi', 'İhlas': 'ihlas_listesi', 'Salavat': 'salavat_listesi', 'Zikir': 'zikir_listesi'}
        for isim, state_key in kategoriler.items():
            bitenler = [h for h in st.session_state[state_key] if not h.get('aktif', True)]
            if bitenler:
                arsiv_dolu = True
                st.markdown(f"<h4 style='color:#45b39d;'>{isim} Arşivi</h4>", unsafe_allow_html=True)
                for h in bitenler:
                    toplam_okunan = h['hedef'] if 'hedef' in h else 30 
                    st.markdown(f"<div class='cetele-karti' style='background-color:#f0fdf4; border-left:4px solid #4ade80;'><div style='display:flex; justify-content:space-between;'><div style='font-size:16px; font-weight:800; color:#333;'>{h['baslik']}</div><div style='color:#16a34a; font-weight:bold;'>✅ Tamamlandı</div></div><div style='font-size:13px; color:gray; margin-top:5px;'>Tarih: {h['baslangic'].strftime('%d.%m.%Y')} - {h['bitis'].strftime('%d.%m.%Y')} | Toplam: {toplam_okunan}</div></div>", unsafe_allow_html=True)
        if not arsiv_dolu: st.info("Henüz tamamlanarak arşive kaldırılmış bir hatim bulunmuyor.")

    # --- ZİKİRMATİK ANA MENÜ ---
    elif menu == "🔢 Zikirmatik":
        zikirmatik_bileseni("ana")

    # --- MODERATÖR PANELİ ---
    elif menu == "👑 Moderatör Paneli":
        st.header("👑 Yönetici Kontrol Paneli")
        if not st.session_state['admin_yetkisi']:
            admin_sifre = st.text_input("Yönetici Şifresi:", type="password", placeholder="Yönetici Şifresi")
            if st.button("Yetkili Girişi Yap", type="primary"):
                if admin_sifre == "patron123": st.session_state['admin_yetkisi'] = True; st.rerun()
                else: st.error("Yetkisiz giriş!")
        else:
            st.success("Yönetici girişi onaylandı.")
            try:
                response = supabase.table("hatim_listesi").select("*").order("cuz_no").execute()
                
                st.markdown("### 🛠️ Hatim Yönetim ve Düzenleme Konsolu")
                with st.expander("📖 Alınan Ana Kuran Cüzlerini İptal Et / Boşa Çıkar"):
                    dolu_cuzler = [c for c in response.data if c["durum"] == "dolu"]
                    if dolu_cuzler:
                        cuz_secenekleri = {f"{c['cuz_no']}. Cüz ({c['kullanici_adi']})": c['cuz_no'] for c in dolu_cuzler}
                        secilen_cuz = st.selectbox("İptal etmek istediğiniz cüzü seçin:", list(cuz_secenekleri.keys()))
                        if st.button("❌ Seçilen Cüz Kaydını Sil / Sıfırla", type="primary"):
                            c_no = cuz_secenekleri[secilen_cuz]
                            supabase.table("hatim_listesi").update({"durum": "bos", "kullanici_adi": ""}).eq("cuz_no", c_no).execute()
                            st.toast(f"{c_no}. Cüz başarıyla sıfırlandı!", icon="✅")
                            st.rerun()
                    else: st.info("Şu an kimse cüz almamış.")
                    
                with st.expander("📑 Açılmış İbadet Gruplarını Düzenle / Gizle / Sil"):
                    kat_haritasi = {
                        '🕌 Yasin Grubu': 'yasin_listesi', '🕋 İhlas Grubu': 'ihlas_listesi',
                        '📿 Salavat Grubu': 'salavat_listesi', '🤲 Zikir Grubu': 'zikir_listesi',
                        '📖 Ekstra Kuran Grubu': 'ekstra_kuranlar'
                    }
                    for k_adi, s_key in kat_haritasi.items():
                        st.markdown(f"**{k_adi}**")
                        if not st.session_state[s_key]: st.caption("Bu kategoride açılmış grup yok.")
                        for d_idx, h_item in enumerate(st.session_state[s_key]):
                            st.markdown(f"<div class='cetele-karti' style='padding:10px;'>", unsafe_allow_html=True)
                            m_c1, m_c2, m_c3, m_c4 = st.columns([2, 1, 1, 1])
                            
                            okunan_sayisi = h_item.get('okunan', sum(1 for v in h_item.get('cuzler', {}).values() if v != ""))
                            m_c1.write(f"**{h_item['baslik']}**\n({okunan_sayisi}/{h_item.get('hedef', 30)})")
                            
                            if 'okunan' in h_item:
                                y_okunan = m_c2.number_input("Sayıyı Düzenle", min_value=0, value=int(h_item['okunan']), key=f"med_{s_key}_{d_idx}", label_visibility="collapsed")
                                if y_okunan != h_item['okunan']:
                                    st.session_state[s_key][d_idx]['okunan'] = y_okunan; st.rerun()
                            
                            if h_item.get('aktif', True):
                                if m_c3.button("👁️ Gizle", key=f"mgiz_{s_key}_{d_idx}", use_container_width=True):
                                    st.session_state[s_key][d_idx]['aktif'] = False; st.rerun()
                            else:
                                if m_c3.button("👁️ Göster", key=f"mgos_{s_key}_{d_idx}", use_container_width=True):
                                    st.session_state[s_key][d_idx]['aktif'] = True; st.rerun()
                            
                            if m_c4.button("❌ Sil", key=f"msil_{s_key}_{d_idx}", use_container_width=True):
                                st.session_state[s_key].pop(d_idx); st.rerun()
                            st.markdown("</div>", unsafe_allow_html=True)

                st.markdown("---")
                st.markdown("### 📊 Genel İzleme Tablosu")
                kullanici_ozetleri = {}
                for cuz in response.data:
                    kisi = cuz["kullanici_adi"]
                    if cuz["durum"] == "dolu" and kisi:
                        if kisi not in kullanici_ozetleri: kullanici_ozetleri[kisi] = {"Kuran": [], "Yasin": "-", "İhlas": "-", "Salavat": "-", "Zikir": "-", "Cevşen": "-"}
                        kullanici_ozetleri[kisi]["Kuran"].append(str(cuz["cuz_no"]))
                
                if st.session_state['kullanici_adi'] in kullanici_ozetleri:
                    kullanici_ozetleri[st.session_state['kullanici_adi']]["Yasin"] = "1 Adet"; kullanici_ozetleri[st.session_state['kullanici_adi']]["İhlas"] = "1.000"; kullanici_ozetleri[st.session_state['kullanici_adi']]["Salavat"] = "500"

                tablo_verisi = [{"👤 İsim": k, "📖 Kuran": ", ".join(v["Kuran"]), "🕌 Yasin": v["Yasin"], "🕋 İhlas": v["İhlas"], "📿 Salavat": v["Salavat"]} for k, v in kullanici_ozetleri.items()]
                if tablo_verisi: st.dataframe(tablo_verisi, use_container_width=True, hide_index=True)
                else: st.info("Henüz aktif cüz dağılımı yok.")
                
                if st.button("🔄 Tüm Ana Kuran Cüzlerini Sıfırla", use_container_width=True):
                    supabase.table("hatim_listesi").update({"durum": "bos", "kullanici_adi": ""}).neq("cuz_no", 0).execute()
                    st.toast("Listesi sıfırlandı!", icon="✅"); st.rerun()
            except Exception as e:
                st.error("⚠️ Lütfen Supabase veritabanını aktif edin (Uyandırın).")

    # --- ÇIKIŞ ---
    st.sidebar.markdown("<br><br>", unsafe_allow_html=True)
    if st.sidebar.button("🚪 Güvenli Çıkış Yap", use_container_width=True):
        st.session_state['giris_yapildi'] = False; st.session_state['kullanici_adi'] = ""; st.session_state['bolge'] = ""; st.session_state['admin_yetkisi'] = False; st.rerun()