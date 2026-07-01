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
        <h4 style="margin-top:1.5rem">Sosyal Medya</h4>
        <ul>
          <li><a href="https://www.instagram.com/theway_tr" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:0.4rem">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            @theway_tr
          </a></li>
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
