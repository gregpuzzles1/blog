# Tech Trail Pulse

Source for **Tech Trail Pulse** — a Hugo-powered personal site with blog posts, interactive puzzle tools, and curated hobby pages.

## Website

- **Live site:** [techtrailpulse.com](https://techtrailpulse.com)

## Tech Stack

- [Hugo](https://gohugo.io/) static site generator (`0.160.1` in CI)
- [Blowfish](https://github.com/nunocoracao/blowfish) Hugo theme (Git submodule)
- Markdown content with Hugo shortcodes and custom HTML blocks
- GitHub Actions for build/deploy to GitHub Pages
- Google Analytics (gtag) via custom head partial

## What's Included on the Site

- **Home / Trail Notes** landing page
- **Posts** section with articles and interactive puzzle/game pages, including:
  - Interactive Latin Squares
  - Beehive Hidato Gameplay
  - Classic & Interactive 15 Puzzle pages
  - Classic Sudoku Web App
  - Interactive Tower of Hanoi
  - Interactive Word Search
  - Pascal’s Triangle Learning Tool
- **About** page
- **Reading Trail** (book gallery / reading list)
- **Puzzlemania** (puzzle and LEGO architecture galleries)
- RSS and JSON outputs for the home page

## Local Development

1. Clone the repository.
2. Initialize the theme submodule:
   ```bash
   git submodule update --init --recursive
   ```
3. Run Hugo locally:
   ```bash
   hugo server -D
   ```
4. Build production output:
   ```bash
   hugo --gc --minify
   ```

## Deployment

Deployments are handled by GitHub Actions (`.github/workflows/pages.yml`) on pushes to `main`.
