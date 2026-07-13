# logandeal.com

Personal site and blog for Logan Deal — a lightweight, statically-exported
[Next.js](https://nextjs.org/) app deployed to GitHub Pages.

## Stack

- **Next.js 15** (Pages Router) with **React 19**
- **MDX** for blog posts (`@next/mdx`)
- **Static export** (`output: "export"`) — no server required
- Self-hosted fonts via `next/font`: **Instrument Serif** (headings) and
  **Satoshi** (body)

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Writing a blog post

Add a folder under `pages/blog/` containing an `index.mdx` file:

```mdx
import BlogPost from "../../../components/BlogPost";

export const meta = {
  title: "My Post Title",
  description: "Short summary",
  date: "2026",
  readTime: 3,
};

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>;

## Heading

Post content goes here.
```

Posts are picked up automatically by `getAllPosts.js` and listed on `/blog`.

## Build & deploy

The site is served from the `docs/` folder on GitHub Pages.

```bash
npm run build-docs
```

This runs `next build` (which static-exports to `out/`), copies the result to
`docs/`, and writes `docs/.nojekyll` and `docs/CNAME` (`logandeal.com`). Commit
the updated `docs/` folder to publish.

## Project layout

```
pages/           Routes (index, about, blog, portfolio) + _app / _document
components/      Layout, Header, Post, BlogPost, HeadPost
public/          Static assets (images, favicon, self-hosted fonts)
mdx-components.js  MDX element overrides (required by @next/mdx)
getAllPosts.js   Collects blog posts from pages/blog/**/index.mdx
docs/            Build output served by GitHub Pages
```
