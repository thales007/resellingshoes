# GitHub Actions Setup

## Workflows installed

### article-publish.yml
Triggers automatically when any `.md` file is pushed to `src/content/articles/` on the `astro-migration` branch. Updates `public/js/articles-data.js` and `public/sitemap.xml`, then commits the changes back to the branch.

**No setup required** — uses the built-in `GITHUB_TOKEN`.

---

### article-validate.yml
Triggers on pull requests that include `.md` files in `src/content/articles/`. Checks each article for required frontmatter fields, title length, forbidden terms, and word count. Posts results as a PR comment.

**No setup required** — uses the built-in `GITHUB_TOKEN`.

---

### index-request.yml
Triggers when `public/sitemap.xml` changes on the `main` branch. Reads the diff, finds newly added `<loc>` entries, and sends a Google Indexing API request for each new URL.

**One-time setup required:**

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (or use an existing one)
3. Enable the **Indexing API** (search for it in the API Library)
4. Go to **IAM & Admin → Service Accounts**
5. Create a new service account — name it `resellingshoes-indexing`
6. On the service account, go to **Keys → Add Key → Create new key → JSON**
7. Download the JSON key file
8. Go to [Google Search Console](https://search.google.com/search-console) → **Settings → Users and Permissions**
9. Add the service account email (ends in `@...iam.gserviceaccount.com`) as an **Owner**
10. Go to your GitHub repo → **Settings → Secrets and variables → Actions**
11. Click **New repository secret**
12. Name: `GOOGLE_SERVICE_ACCOUNT_KEY`
13. Value: paste the entire contents of the downloaded JSON key file
14. Save

The workflow handles everything else automatically from that point forward.
