// ============================================================
// ARTICLES DATA — single source of truth for the article archive
// and the "More in [category]" strips on individual article pages.
// Add a new article here and it shows up everywhere automatically.
// ============================================================

const ARTICLES_DATA = [
  {
    slug: "how-to-resell-shoes",
    title: "How to Resell Shoes: A Beginner's Guide to Flipping Everyday Brands",
    category: "BEGINNER",
    blurb: "The exact steps to find profitable shoes, check if they'll sell, calculate real profit, and list them on eBay.",
    url: "/how-to-resell-shoes",
    readTime: "12 min read",
    publishedAt: "2026-06-22",
    comingSoon: false,
  },
  {
    slug: "is-reselling-shoes-profitable",
    title: "Is Reselling Shoes Profitable? Here's the Honest Truth",
    category: "BEGINNER",
    blurb: "After $100K+ in gross shoe sales from thrift stores and yard sales, here's what the numbers actually look like.",
    url: "/is-reselling-shoes-profitable",
    readTime: "9 min read",
    publishedAt: "2026-06-24",
    comingSoon: false,
  },
  {
    slug: "best-shoes-to-resell",
    title: "Best Shoes to Resell: What Actually Sells at the Thrift Store",
    category: "SOURCING",
    blurb: "The brands with proven buyer demand — ranked by real sales data from 400+ pairs flipped since 2023.",
    url: "/best-shoes-to-resell",
    readTime: "11 min read",
    publishedAt: "2026-06-26",
    comingSoon: false,
  },
  {
    slug: "how-to-sell-shoes-on-ebay",
    title: "How to Sell Shoes on eBay: The Complete Listing Guide",
    category: "SELLING",
    blurb: "The title format, pricing strategy, item specifics, and shipping tiers used across hundreds of eBay sales.",
    url: "/how-to-sell-shoes-on-ebay",
    readTime: "14 min read",
    publishedAt: "2026-06-28",
    comingSoon: false,
  },
  {
    slug: "how-to-start-reselling-shoes",
    title: "How to Start Reselling Shoes with Almost Nothing",
    category: "GETTING STARTED",
    blurb: "How to build starting capital, find your first inventory, and compound your way to a real business.",
    url: "/how-to-start-reselling-shoes",
    readTime: "10 min read",
    publishedAt: "2026-06-30",
    comingSoon: false,
  },
  {
    slug: "where-to-sell-used-shoes",
    title: "Where to Sell Used Shoes: A Platform Breakdown",
    category: "PLATFORM STRATEGY",
    blurb: "eBay, Poshmark, Mercari, Facebook Marketplace — where to start and how to cross-list without doubling your work.",
    url: "/where-to-sell-used-shoes",
    readTime: "8 min read",
    publishedAt: "2026-07-02",
    comingSoon: false,
  },
  {
    slug: "is-shoe-reselling-dead",
    title: "Is Shoe Reselling Dead? Here's the Honest Answer",
    category: "BEGINNER",
    blurb: "The market has changed. That doesn't mean it's dead — it means you have to adapt. Here's what that actually looks like.",
    url: "/is-shoe-reselling-dead",
    readTime: "6 min read",
    publishedAt: "2026-07-05",
    comingSoon: false,
  },
  {
    slug: "how-to-flip-shoes",
    title: "How to Flip Shoes for Profit",
    category: "BEGINNER",
    blurb: "The complete beginner's breakdown — brands, math, sourcing, listing, and what a real flip actually looks like.",
    url: "/how-to-flip-shoes",
    readTime: "7 min read",
    publishedAt: "2026-07-05",
    comingSoon: false,
  },
  {
    slug: "how-to-sell-used-shoes-online",
    title: "How to Sell Used Shoes Online (And Actually Make Money)",
    category: "SELLING",
    blurb: "Have shoes sitting in your closet? What they're worth, where to list them, and how 20 minutes can turn into real money.",
    url: "/how-to-sell-used-shoes-online",
    readTime: "8 min read",
    publishedAt: "2026-07-04",
    comingSoon: false,
  },
];

if (typeof window !== "undefined") window.ARTICLES_DATA = ARTICLES_DATA;
if (typeof module !== "undefined") module.exports = ARTICLES_DATA;
