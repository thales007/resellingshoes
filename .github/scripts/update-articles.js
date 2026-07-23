const fs = require('fs');
const path = require('path');

const articlesDir = 'src/content/articles';
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm = {};
  match[1].split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      fm[key] = value;
    }
  });
  return fm;
}

function esc(str) {
  return String(str).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

const articles = [];
for (const file of files) {
  const content = fs.readFileSync(path.join(articlesDir, file), 'utf8');
  const fm = parseFrontmatter(content);
  if (!fm) continue;
  const slug = file.replace(/\.md$/, '');
  articles.push({
    slug,
    title: fm.title || '',
    category: fm.category || 'BEGINNER',
    blurb: fm.blurb || fm.description || '',
    url: '/' + slug,
    readTime: fm.readTime || '6 min read',
    publishedAt: fm.publishedAt || new Date().toISOString().split('T')[0],
  });
}

articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

const lines = articles.map(a =>
  '  {\n' +
  '    slug: "' + esc(a.slug) + '",\n' +
  '    title: "' + esc(a.title) + '",\n' +
  '    category: "' + esc(a.category) + '",\n' +
  '    blurb: "' + esc(a.blurb) + '",\n' +
  '    url: "' + esc(a.url) + '",\n' +
  '    readTime: "' + esc(a.readTime) + '",\n' +
  '    publishedAt: "' + esc(a.publishedAt) + '",\n' +
  '    comingSoon: false,\n' +
  '  }'
).join(',\n');

const dataFile = 'public/js/articles-data.js';
let currentData = fs.readFileSync(dataFile, 'utf8');
const newData = currentData.replace(
  /const ARTICLES_DATA\s*=\s*\[[\s\S]*?\];/,
  'const ARTICLES_DATA = [\n' + lines + '\n];'
);

if (newData === currentData) {
  console.log('WARNING: ARTICLES_DATA pattern not matched — check file format');
} else {
  fs.writeFileSync(dataFile, newData, 'utf8');
  console.log('Updated articles-data.js with ' + articles.length + ' articles');
}

const sitemapFile = 'public/sitemap.xml';
let sitemap = fs.readFileSync(sitemapFile, 'utf8');
const baseUrl = 'https://resellingshoes.com';
const today = new Date().toISOString().split('T')[0];

for (const article of articles) {
  const url = baseUrl + article.url;
  if (!sitemap.includes('<loc>' + url + '</loc>')) {
    const entry = '\n  <url>\n    <loc>' + url + '</loc>\n    <lastmod>' + today + '</lastmod>\n    <priority>0.8</priority>\n  </url>';
    sitemap = sitemap.replace('</urlset>', entry + '\n</urlset>');
    console.log('Added to sitemap: ' + url);
  }
}

fs.writeFileSync(sitemapFile, sitemap, 'utf8');
console.log('Sitemap updated');
