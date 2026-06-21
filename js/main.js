/* =========================================
   The Way — Ortak JS
   ========================================= */

/* --- Header & Footer enjeksiyonu --- */
const HEADER_HTML = `
<header class="site-header">
  <div class="container">
    <a href="index.html" class="logo" aria-label="The Way Ana Sayfa">
      <img src="images/logo.png" alt="The Way® — Tescilli Marka" class="logo-img" />
    </a>
    <button class="nav-toggle" aria-label="Menüyü aç/kapat" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <nav>
      <ul class="nav-links" role="list">
        <li><a href="index.html">Ana Sayfa</a></li>
        <li><a href="urun-flow-9in1.html">Ürünler</a></li>
        <li><a href="hakkimizda.html">Hakkımızda</a></li>
        <li><a href="servis.html">Teknik Servis</a></li>
        <li><a href="iletisim.html">İletişim</a></li>
      </ul>
    </nav>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-col">
        <a href="index.html" class="logo"><img src="images/logo.png" alt="The Way" class="logo-img logo-img--footer" /></a>
        <p>10 ay – 5 yaş arası çocuğunuzla büyüyen, güvenli ve akıllı çözümler.</p>
      </div>
      <div class="footer-col">
        <h4>Sayfalar</h4>
        <ul>
          <li><a href="index.html">Ana Sayfa</a></li>
          <li><a href="urun-flow-9in1.html">Flow 9in1 Smart Trike</a></li>
          <li><a href="hakkimizda.html">Hakkımızda</a></li>
          <li><a href="servis.html">Teknik Servis Talebi</a></li>
          <li><a href="iletisim.html">İletişim</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Satın Al</h4>
        <ul>
          <li><a href="https://www.trendyol.com/magaza/theway-m-818336?channelId=1&subPathStrategy=no-subpath" target="_blank" rel="noopener">Trendyol</a></li>
          <li><a href="https://www.hepsiburada.com/magaza/theway" target="_blank" rel="noopener">Hepsiburada</a></li>
          <li><a href="#" target="_blank" rel="noopener">Amazon</a></li>
          <li><a href="https://www.n11.com/magaza/the-way" target="_blank" rel="noopener">N11</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} The Way. Tüm hakları saklıdır.</span>
      <span>EN71 Sertifikalı · Türkiye</span>
      <span style="font-size:0.72rem; opacity:0.55">The Way® TÜRKPATENT Tescilli Marka</span>
    </div>
  </div>
</footer>
`;

function injectLayout() {
  // Header
  const headerTarget = document.getElementById('site-header');
  if (headerTarget) headerTarget.outerHTML = HEADER_HTML;

  // Footer
  const footerTarget = document.getElementById('site-footer');
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;

  // Aktif nav linkini işaretle
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPath = link.getAttribute('href').replace('/', '');
    if (linkPath === currentPath) link.classList.add('active');
  });

  // Hamburger menü
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }
}

document.addEventListener('DOMContentLoaded', injectLayout);

/* --- Form gönderimi (Google Apps Script) --- */
async function handleFormSubmit(formEl, successEl, errorEl, submitBtn) {
  submitBtn.disabled = true;
  submitBtn.textContent = 'Gönderiliyor…';

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(formEl),
    });
    const json = await res.json();
    if (json.success) {
      showAlert(successEl);
      formEl.reset();
    } else {
      showAlert(errorEl);
    }
  } catch (err) {
    showAlert(errorEl);
    console.error(err);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Gönder';
  }
}

function showAlert(el, customText) {
  if (!el) return;
  if (customText) el.textContent = customText;
  el.style.display = 'block';
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  setTimeout(() => { el.style.display = 'none'; }, 8000);
}
