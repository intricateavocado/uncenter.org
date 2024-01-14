# uncenter.dev

[![Eleventy](https://img.shields.io/badge/Eleventy-3.0.0--alpha.4-333333.svg?style=flat-square)](https://11ty.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

## Features

-   **Syntax highlighting** with [`markdown-it-shikiji`](https://shikiji.netlify.app/packages/markdown-it).
-   **Optimized images** with [`@11ty/eleventy-img`](https://github.com/11ty/eleventy-img).
-   **RSS feed** using [`@ryanccn/eleventy-plugin-rss`](https://github.com/ryanccn/eleventy-plugin-rss).
-   **Spell-checking** through [`cspell`](http://cspell.org/).
-   **Optimized CSS, JS, and HTML** using [PostCSS](https://postcss.org/), [Lightning CSS](https://lightningcss.dev/), [terser](https://github.com/terser/terser), and [HTMLMinifier](https://github.com/kangax/html-minifier).

## Development

```sh
pnpm install  # install dependencies
pnpm dev      # start development server
pnpm build    # run production build
pnpm clean    # clean up build artifacts
pnpm format   # format files
```

## Structure

-   `src/_layouts/`, `src/_includes/`: nunjucks templates for layouts and components
-   `src/_data/`: data used in templates
-   `src/generated`: root files (feeds, sitemap, robots.txt)
-   `src/assets/`: static assets (styling, scripts, fonts)
-   `src/posts/`: blog posts
-   `images/`: images for blog posts
-   `public/`: favicons and fonts
-   `config/11ty/`: collections, shortcodes, and filters for 11ty
-   `utils/markdown`: markdown configuration
-   `utils/transforms`: various functions for transforming/processing CSS, HTML, and JS

## License

Source code is under [MIT](LICENSE), blog posts (and other written content) are under [CC BY-SA 4.0](LICENSE-content).
