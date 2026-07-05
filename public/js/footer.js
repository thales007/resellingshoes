(function () {
  var style = document.createElement('style');
  style.id = 'site-footer-styles';
  style.textContent = [
    'footer.site-footer{background:#1A1916;color:#B8B4A8}',
    '.footer-inner{max-width:1200px;margin:0 auto;padding:64px 32px 36px;display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:40px}',
    '.footer-logo{font-weight:700;font-size:20px;color:#fff;margin-bottom:16px}',
    '.footer-logo .g{color:#4FB07C}',
    '.footer-logo .m{color:#8E8A7E;font-weight:600}',
    '.footer-inner p{font-size:14px;line-height:1.55;max-width:32ch;margin:0 0 16px}',
    '.footer-credit{font-size:13px;color:#6A675E}',
    '.footer-col-title{color:#fff;font-weight:700;font-size:14px;letter-spacing:0.04em;margin-bottom:14px}',
    '.footer-col-links{display:flex;flex-direction:column;gap:11px;font-size:14px}',
    '.footer-col-links a{color:#B8B4A8;text-decoration:none}',
    '.footer-bottom-wrap{max-width:1200px;margin:0 auto;padding:0 32px}',
    '.footer-bottom{border-top:1px solid rgba(255,255,255,0.1);padding:22px 0;display:flex;justify-content:space-between;font-size:13px;color:#6A675E;flex-wrap:wrap;gap:12px}',
    '.footer-bottom-links{display:flex;gap:20px}',
    '.footer-bottom-links a{color:#6A675E;text-decoration:none}',
    '@media(max-width:860px){.footer-inner{grid-template-columns:1fr 1fr;gap:28px 32px}}',
    '@media(max-width:600px){.footer-inner{grid-template-columns:1fr;padding-left:20px;padding-right:20px}.footer-bottom-wrap{padding-left:20px;padding-right:20px}}'
  ].join('');
  document.head.appendChild(style);

  var year = new Date().getFullYear();

  var html = '<footer class="site-footer">'
    + '<div class="footer-inner">'
      + '<div>'
        + '<div class="footer-logo">Reselling<span class="g">Shoes</span><span class="m">.com</span></div>'
        + '<p>Free guides and tools for part-time resellers flipping everyday shoes — not hype sneakers.</p>'
        + '<div class="footer-credit">A Selah Creative Media LLC project</div>'
      + '</div>'
      + '<div>'
        + '<div class="footer-col-title">RESOURCES</div>'
        + '<div class="footer-col-links">'
          + '<a href="/1000-shoe-reselling-method">$1,000 Method</a>'
          + '<a href="/the-everyday-shoe-flip">The Everyday Shoe Flip</a>'
          + '<a href="/articles">Articles</a>'
        + '</div>'
      + '</div>'
      + '<div>'
        + '<div class="footer-col-title">TOOLS</div>'
        + '<div class="footer-col-links">'
          + '<a href="https://solescore.app" target="_blank" rel="noopener noreferrer">SoleScore App (beta)</a>'
          + '<a href="/articles">Articles &amp; guides</a>'
        + '</div>'
      + '</div>'
      + '<div>'
        + '<div class="footer-col-title">COMPANY</div>'
        + '<div class="footer-col-links">'
          + '<a href="/about">About Timothy</a>'
          + '<a href="/contact">Contact</a>'
          + '<a href="/privacy">Privacy Policy</a>'
        + '</div>'
      + '</div>'
    + '</div>'
    + '<div class="footer-bottom-wrap">'
      + '<div class="footer-bottom">'
        + '<span>&copy; ' + year + ' Selah Creative Media LLC · resellingshoes.com</span>'
        + '<span class="footer-bottom-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></span>'
      + '</div>'
    + '</div>'
  + '</footer>';

  var root = document.getElementById('footer-root');
  if (root) root.outerHTML = html;
})();
