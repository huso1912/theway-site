# The Way — Vitrin Sitesi Projesi

## Proje Amacı
"The Way" markası için bir **vitrin/katalog sitesi**. Site üzerinden ürün satışı yapılmayacak (sepet/ödeme yok) — amaç:
1. Markanın internette aranınca bulunabilir ve güvenilir görünmesi
2. Ürünleri detaylı, profesyonel şekilde tanıtmak
3. Ziyaretçiyi doğru pazaryeri linkine yönlendirip satışı orada tamamlatmak

İkas vb. entegratörlere ihtiyaç yok — az SKU + yönlendirme modeli için bu kapsam yeterli.

## Marka
- Marka adı: **The Way** (küçük italik "the" + büyük bold "WAY", beyaz/siyah zemin üzerinde — logo yazımı bu şekilde, ama marka adı yazılı geçtiğinde "The Way" olarak kullanılacak)
- Ton: Sıcak, samimi, organik — "reklam gibi hissettirmeyen". (Not: Instagram hesabında tespit edilen sorun, içeriklerin çok "reklam gibi" görünmesiydi — sitede de bundan kaçınılmalı; gerçek/aile odaklı dil kullan.)
- Hedef kitle: 10 ay – 5 yaş arası çocuğu olan ebeveynler

## Ürünler

### Ürün 1 — The Way Flow 9in1 Smart Trike
- 9 farklı kullanım modu, 10 ay – 5 yaş arası büyüyen çocuğa uyum sağlıyor
- 360° dönen koltuk
- 5 noktalı emniyet kemeri + güvenlik bariyeri
- 3 saniyede katlanma (seyahat dostu)
- Ağırlık: 8.4 kg
- EN71 sertifikalı
- 6 renk seçeneği: **[TODO: renk adlarını ekle]**
- Mevcut sosyal kanıt: Trendyol'da 151 favori, 1 değerlendirme (zayıf nokta — site içeriğinde gerçek kullanım anları/görsellerle bunu dengelemek önemli)

### Ürün 2-3 (ileride eklenecek)
**[TODO: ürün adı, özellikler, görseller — netleşince eklenecek]**

## Pazaryeri Linkleri (yönlendirme butonları için gerekli)
- Trendyol: **[TODO: link]**
- Hepsiburada: **[TODO: link]**
- Amazon: **[TODO: link]**
- N11: **[TODO: link]**

## Site Yapısı
1. **Ana sayfa** — marka tanıtımı + ürün(ler)e kısa giriş
2. **Ürün detay sayfası** (her ürün için) — özellikler, renk seçenekleri, görsel/video, "Satın Al" butonları (4 pazaryeri)
3. **Hakkımızda** — marka hikâyesi, güven unsurları (vergi no, iletişim)
4. **İletişim** — telefon, e-posta, adres
5. **Teknik Servis Talebi** — pazaryerlerinden alışveriş yapmış müşterilerin destek/arıza/şikayet başvurusu yapabileceği form sayfası (detay aşağıda)
6. (Opsiyonel, SEO için sonradan) Blog/SSS sayfası

## Teknik Servis Talebi Formu
Pazaryerinden (Trendyol/Hepsiburada/Amazon/N11) sipariş vermiş müşterilerin teknik destek/servis başvurusu yapabileceği form. Form alanları:
- **Pazaryeri** (seçim: Trendyol / Hepsiburada / Amazon / N11)
- **Sipariş No** (zorunlu, metin)
- **Ürün** (varsa birden fazla ürün olduğunda seçim: Flow 9in1 Smart Trike / diğer)
- **Ad Soyad**
- **Telefon** ve/veya **E-posta** (geri dönüş için, en az biri zorunlu)
- **Başvuru Sebebi** (seçim — örn: Arıza/Bozuk Parça, Eksik Parça, Kullanım Desteği, Değişim/İade Talebi, Diğer)
- **Açıklama** (serbest metin, sorunun detayı)
- (Opsiyonel) **Fotoğraf/Video yükleme** — arızalı parçayı görsel olarak iletebilmek için

**Not (teknik):** Statik bir site (sadece HTML/CSS/JS) form verisini kendi başına işleyemez/saklayamaz — bir gönderim mekanizması gerekir. Cowork ile bu noktada şu seçeneklerden biri değerlendirilecek:
- Basit ve ücretsiz: Formspree / Web3Forms gibi bir form-backend servisi (form gönderildiğinde e-postana düşer)
- Daha entegre: Cloudflare Pages Functions ile e-posta gönderimi veya bir Google Sheet'e otomatik kayıt
- Talep takibi büyürse: ileride basit bir tablo/panel (örn. Airtable veya Google Sheets) üzerinden başvuruları görüntüleme

## Teknik Yaklaşım
- Plain HTML / CSS / JS — framework gerekmiyor (az sayfa)
- GitHub deposu + Cloudflare Pages ile ücretsiz hosting
- Mobil öncelikli (responsive) tasarım
- SEO: her ürün sayfasına `Product` structured data (schema.org), açıklayıcı title/meta, hızlı yüklenme
- Marka logosu: şeffaf PNG olarak header/footer'da

## Cowork'e Geçmeden Önce Tamamlanması Gerekenler
- [ ] Domain adı tercihi (satın alınmış mı, yoksa önerilecek mi?)
- [ ] 4 pazaryeri ürün linki
- [ ] İletişim bilgileri (telefon, e-posta, adres, varsa vergi no)
- [ ] Marka logosu (şeffaf arka planlı PNG dosyası)
- [ ] Ürün görselleri / varsa kısa video
- [ ] Diğer 2-3 ürün bilgisi (henüz yoksa bu sayfa şimdilik atlanır, ileride eklenir)
- [ ] Teknik servis formu gönderim yöntemi tercihi (Formspree/Web3Forms gibi ücretsiz servis mi, yoksa e-posta/Google Sheets entegrasyonu mu?) + başvuruların düşeceği e-posta adresi

## Notlar
- Bu dosya Cowork projesine context olarak verilecek; Cowork klasördeki bu dosyayı proje hafızası olarak okuyacak.
- Eksik maddeler doldurulmadan da başlanabilir — placeholder içerikle iskelet kurulup sonra gerçek verilerle güncellenebilir.
