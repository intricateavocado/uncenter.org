<div align="center">
    <h1>uncenter.org</h1>

![Website Status](https://img.shields.io/website?down_color=red&down_message=down&up_color=a&up_message=online&url=https%3A%2F%2Funcenter.org&style=for-the-badge)
![Netlify](https://img.shields.io/netlify/0be102c8-f30f-48ad-a0f0-7fb84eea2740?style=for-the-badge&color=9cf)
![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Funcenter.org&style=for-the-badge)

![Wakatime](https://wakatime.com/badge/user/44269a44-02c2-486c-a2ea-494b7071737e/project/37a0a8c7-515a-4f8e-90bc-cfab440d9035.svg?style=for-the-badge)
![Spaghetti Code](https://img.shields.io/badge/SPAGHETTI%20CODE-yes-important?style=for-the-badge)

This is my personal website, made with [11ty](https://www.11ty.dev/), Shiki, and [Tailwind CSS](https://tailwindcss.com/).

![Screenshot of uncenter.org](/images/home.png)

</div>

## Contributing

If you see any issues or have any suggestions for the website, please open an issue or pull request. If you have any questions, feel free to reach out to me on via the [contact methods listed on my website](https://uncenter.org/contact/).

## About

### Features

- **OG preview images** for posts and pages using [Satori](https://github.com/vercel/satori) and [Sharp](https://sharp.pixelplumbing.com/)
- **Syntax highlighting** for posts using [`shiki`](https://github.com/shikijs/shiki), configured based on [Raphael Höser's implementation](https://www.hoeser.dev/blog/2023-02-01-syntax-highlight/)
- **Optimized images** with [`eleventy-img`](https://github.com/11ty/eleventy-img)
- **RSS feed** for blog posts using [`eleventy-plugin-rss`](https://github.com/11ty/eleventy-plugin-rss)
- **Spell-checking** for posts using [`cspell`](http://cspell.org/)
- **Optimized CSS, JS, and HTML** using [`postcss`](https://postcss.org/), [`UglifyJS`](https://github.com/mishoo/UglifyJS), and [`html-minifier`](https://github.com/kangax/html-minifier)

### Structure

- `utils/`: scripts, utilities, & plugins:
  - `utils/dicts/`: dictionary text files for spell-checking (cSpell)
  - `utils/plugins/`: plugins for 11ty, imported in various places - currently holds `shikier.js` for syntax highlighting and `markdown.js` as the Markdown library
- `images/`: images for posts and pages, optimized during build
- `src/`: the source files for 11ty
  - `src/_data/`: data files - `inlined.js` holds minified CSS and JS files for inlining in templates, `now.js` fetches the current date and time, and the other three JSON & JS files hold metadata for projects and in general
  - `src/_assets/`: static assets such as images, fonts, and icons, as well as the CSS and JS files
  - `src/posts/*.md`: blog posts, written in Markdown
  - `src/pages/`: root pages
  - `src/_includes/`: components and sections
  - `src/_layouts/`: layouts - `index.njk` is the main layout with all metadata and required fields, `post.njk` is the layout for blog posts, and `page.njk` is the layout for root pages
  - `src/_11ty/`: 11ty filters, shortcodes, collections (imported as plugins in `eleventy.config.js`)
    - `src/_11ty/utils/`: utility functions for JavaScript data files and the other functions in `src/_11ty/`

### Environment Variables

- `UMAMI_TOKEN`: the API token for the Umami analytics instance

## Credits

Many thanks to the 11ty community for their contributions to the community, without which this website would not be possible- thanks to [Raphael Höser](https://www.hoeser.dev/), Stephanie Eckles for [11ty.rocks](https://11ty.rocks/), [Learn Eleventy from Scratch](https://learneleventyfromscratch.com/), [11ty.recipes](https://11ty.recipes/) by Mike Aparicio, [Bernard Nijenhuis' notes](https://bnijenhuis.nl/), and more.

Generic icons sourced from [Lucide](https://lucide.dev/), technology and development icons from [Devicons](https://devicon.dev/), and brand icons from [SVG Logos by Gil Barbara](https://github.com/gilbarbara/logos).

## License

[MIT](LICENSE.md)
