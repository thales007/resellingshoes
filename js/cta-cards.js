// ============================================================
// CTA CARDS — Three reusable card components.
// Drop any of these into any page or article with one line:
//
//   Free guide card:   <div class="cta-card" data-card="free-guide"></div>
//   Paid guide card:   <div class="cta-card" data-card="paid-guide"></div>
//   SoleScore card:    <div class="cta-card" data-card="solescore"></div>
//
// Cards auto-populate from SITE_CONFIG in site-config.js
// ============================================================

(function () {

  // ── INJECT SHARED STYLES (once per page) ────────────────
  if (!document.getElementById('cta-card-styles')) {
    const style = document.createElement('style');
    style.id = 'cta-card-styles';
    style.textContent = `
      .cta-card-inner {
        border-radius: 10px;
        padding: 28px 32px;
        margin: 40px 0;
        font-family: 'DM Sans', sans-serif;
      }
      .cta-card-inner.free-guide {
        background: #f5ecd8;
        border-left: 4px solid #C4943A;
      }
      .cta-card-inner.paid-guide {
        background: #1A1A1A;
        color: #fff;
      }
      .cta-card-inner.solescore {
        background: #f0f7f3;
        border: 1px solid #c3ddd0;
        border-left: 4px solid #4CAF7D;
      }
      .cta-card-badge {
        display: inline-block;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 3px 10px;
        border-radius: 4px;
        margin-bottom: 12px;
      }
      .free-guide .cta-card-badge  { background: #C4943A; color: #fff; }
      .paid-guide .cta-card-badge  { background: #C4943A; color: #fff; }
      .solescore .cta-card-badge   { background: #4CAF7D; color: #fff; }
      .cta-card-title {
        font-family: 'DM Serif Display', serif;
        font-size: 20px;
        font-weight: 400;
        margin: 0 0 8px;
        line-height: 1.3;
      }
      .free-guide .cta-card-title,
      .solescore .cta-card-title  { color: #1A1A1A; }
      .paid-guide .cta-card-title { color: #fff; }
      .cta-card-desc {
        font-size: 15px;
        line-height: 1.6;
        margin: 0 0 20px;
      }
      .free-guide .cta-card-desc  { color: #4a3f2f; }
      .paid-guide .cta-card-desc  { color: rgba(255,255,255,0.75); }
      .solescore .cta-card-desc   { color: #2a4a38; }
      .cta-card-price {
        display: flex;
        align-items: baseline;
        gap: 10px;
        margin-bottom: 18px;
      }
      .cta-price-current {
        font-size: 28px;
        font-weight: 700;
        color: #fff;
      }
      .cta-price-original {
        font-size: 16px;
        color: rgba(255,255,255,0.45);
        text-decoration: line-through;
      }
      .cta-card-btn {
        display: inline-block;
        font-size: 15px;
        font-weight: 600;
        padding: 12px 24px;
        border-radius: 6px;
        text-decoration: none;
        transition: opacity 0.2s, background 0.2s;
        cursor: pointer;
      }
      .cta-card-btn:hover { opacity: 0.88; }
      .free-guide .cta-card-btn  { background: #C4943A; color: #fff; }
      .paid-guide .cta-card-btn  { background: #C4943A; color: #fff; }
      .solescore .cta-card-btn   { background: #4CAF7D; color: #fff; }
      .cta-card-subtext {
        display: block;
        font-size: 12px;
        margin-top: 10px;
        color: rgba(255,255,255,0.45);
      }
      .solescore .cta-card-subtext { color: #6aaa8a; }
      .free-guide .cta-card-subtext { color: #8a7050; }
      @media (max-width: 600px) {
        .cta-card-inner { padding: 22px 18px; }
      }
    `;
    document.head.appendChild(style);
  }

  // ── CARD TEMPLATES ──────────────────────────────────────
  function renderFreeGuide(cfg) {
    return `
      <div class="cta-card-inner free-guide">
        <span class="cta-card-badge">${cfg.badge}</span>
        <p class="cta-card-title">${cfg.title}</p>
        <p class="cta-card-desc">${cfg.description}</p>
        <a href="${cfg.url}" class="cta-card-btn">${cfg.ctaText}</a>
      </div>`;
  }

  function renderPaidGuide(cfg) {
    return `
      <div class="cta-card-inner paid-guide">
        <span class="cta-card-badge">${cfg.badge}</span>
        <p class="cta-card-title">${cfg.title}</p>
        <p class="cta-card-desc">${cfg.description}</p>
        <div class="cta-card-price">
          <span class="cta-price-current">${cfg.price}</span>
          <span class="cta-price-original">${cfg.originalPrice}</span>
        </div>
        <a href="${cfg.url}" class="cta-card-btn" target="_blank" rel="noopener">${cfg.ctaText}</a>
      </div>`;
  }

  function renderSoleScore(cfg) {
    return `
      <div class="cta-card-inner solescore">
        <span class="cta-card-badge">${cfg.badge}</span>
        <p class="cta-card-title">${cfg.title}</p>
        <p class="cta-card-desc">${cfg.description}</p>
        <a href="${cfg.url}" class="cta-card-btn" target="_blank" rel="noopener">${cfg.ctaText}</a>
        <span class="cta-card-subtext">${cfg.subtext}</span>
      </div>`;
  }

  // ── RENDER ALL CARDS ON THE PAGE ────────────────────────
  function renderCards() {
    document.querySelectorAll('.cta-card[data-card]').forEach(function (el) {
      const type = el.getAttribute('data-card');
      if (type === 'free-guide')  el.innerHTML = renderFreeGuide(SITE_CONFIG.freeGuide);
      if (type === 'paid-guide')  el.innerHTML = renderPaidGuide(SITE_CONFIG.paidGuide);
      if (type === 'solescore')   el.innerHTML = renderSoleScore(SITE_CONFIG.soleScore);
    });
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCards);
  } else {
    renderCards();
  }

})();
