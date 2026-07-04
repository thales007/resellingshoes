// ============================================================
// RELATED ARTICLES STRIP — drop this on any article page to show
// "More in [category]" using the same data as articles.html.
//
// Usage: add this element wherever you want the strip to appear
// (typically right before the footer include), then load this
// script after articles-data.js:
//
//   <div id="related-articles" data-category="BEGINNER" data-current="how-to-resell-shoes"></div>
//   <script src="/js/articles-data.js"></script>
//   <script src="/js/related-articles.js"></script>
//
// data-category must match a category string in js/articles-data.js.
// data-current must match that article's `slug` so it excludes itself.
// ============================================================

(function () {
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var mount = document.getElementById('related-articles');
  if (!mount || typeof ARTICLES_DATA === 'undefined') return;

  var category = mount.getAttribute('data-category');
  var current = mount.getAttribute('data-current');

  var related = ARTICLES_DATA.filter(function (a) {
    return a.category === category && a.slug !== current && !a.comingSoon;
  }).slice(0, 3);

  if (related.length === 0) return;

  var style = document.createElement('style');
  style.textContent = [
    '.related-articles{margin-top:56px;padding-top:28px;border-top:1px solid #e5e0d8}',
    '.related-articles-head{font-family:"DM Serif Display",serif;font-size:20px;color:#1A1A1A;margin-bottom:16px}',
    '.related-articles-grid{display:grid;grid-template-columns:repeat(' + related.length + ',1fr);gap:16px}',
    '.related-articles-grid a{display:block;text-decoration:none;color:inherit;border:1px solid #e5e0d8;border-radius:10px;padding:16px;font-size:15px;font-weight:600;color:#1A1A1A;line-height:1.35}',
    '.related-articles-grid a:hover{border-color:#C4943A}',
    '@media(max-width:600px){.related-articles-grid{grid-template-columns:1fr}}'
  ].join('');
  document.head.appendChild(style);

  mount.className = 'related-articles';
  mount.innerHTML =
    '<div class="related-articles-head">More in ' + escapeHtml(category) + '</div>' +
    '<div class="related-articles-grid">' +
      related.map(function (a) {
        return '<a href="' + a.url + '">' + escapeHtml(a.title) + '</a>';
      }).join('') +
    '</div>';
})();
