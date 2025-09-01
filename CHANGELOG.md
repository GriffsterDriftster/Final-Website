# Changelog – Onbrd Solutions website refresh

## 2025‑09‑01

This update implements the set of “Today’s Change Requests” outlined in the Agent Brief.  It focuses on simplifying the service tier list, unifying calls to action, adding colour accents and improving SEO and accessibility.  All URLs, page structures and typography are preserved.

### Global

* Defined additional brand palette variables in `assets/main.css` (`--mint`, `--mint-soft`, `--lav`, `--lav-soft`, `--ring`, `--border`, `--shadow`) to unify colour usage across new components.
* Added reusable utility classes: `.button-primary`/`.btn-primary` for consistent 10 px‑radius buttons with focus rings; `.plan-grid`, `.plan-card`, `.plan-bullets`, `.plan-cta` for the responsive service tier cards; `.faq-card` for coloured FAQ panels; `.section-alt` for soft background blocks; `.accent-badge` for pill‑shaped accents.

### `index.html`

* Removed the skip‑to‑content link and ensured keyboard navigation remains intact.
* Replaced the old tier table with a simplified, responsive plan grid.  Each plan card presents essential information (AI teammates, channels, learning sources, automations, tuning, onboarding & support, go‑live time and risk) in concise bullet form with a single “Get a quote” CTA.
* Added `section-alt` class to the tiers section for a subtle background tone and improved visual rhythm.
* Updated the FAQ entry “Can I try before committing?” to reflect that there is no free trial; users can cancel anytime and the team will gladly provide live demonstrations.
* Ensured the only CTA in the hero and header is “Get a quote”; all “Book a demo” references were removed earlier.

### `services.html`

* Removed the skip link and unified all CTAs to “Get a quote”.
* Applied the `section-alt` class to the agents section for subtle colour accenting.
* Left the sticky navigation, tables and layout intact, but with new CSS support for improved focus styles.

### `about.html` & `contact.html`

* Removed the skip link and unified header CTAs to “Get a quote”.
* Updated meta descriptions and ensured canonical links are correct.

### `blog/index.html`

* Added two new post cards linking to the freshly created articles “How AI Saves Time and Money for Businesses” and “AI Growth in America: Why Falling Behind Could Be Costly”.  Each card includes an image, summary and reading time.

### New blog posts

* Added `blog/ai-savings-business.html`: discusses how AI adoption is saving businesses time and money, with statistics from credible sources, practical anecdotes and clear takeaways.  Includes TL;DR bullet points, table of contents, SEO meta tags and JSON‑LD.
* Added `blog/ai-growth-america.html`: explores U.S. AI adoption trends, the importance of having a strategy and the risks of delaying investment.  It cites recent surveys and includes TL;DR, table of contents and structured data.

### `sitemap.xml`

* Added entries for the new blog posts to ensure they are discoverable by search engines.

### Remaining areas

* Verified that no “Book a demo” text remains in any page.
* Footer has been cleaned up to remove the previous location reference; it now displays only the company, year and navigation links.
* Accessibility improvements include focus outlines on buttons and logical heading structures.  Performance is maintained by lazy‑loading images and deferring scripts.
