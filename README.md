<div align="center">
<h1>uncenter.org</h1>


[![Eleventy](https://img.shields.io/badge/Eleventy-2.0.1-333333.svg?style=flat-square&logo=eleventy&logoColor=white)](https://11ty.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

My personal website!

</div>

<picture>
    <source srcset="/images/dark.png" media="(prefers-color-scheme: dark)">
    <img src="/images/light.png" alt="the uncenter.org homepage, tablet/mobile view">
</picture>
<picture>
    <source srcset="/images/dark-wide.png" media="(prefers-color-scheme: dark)">
    <img src="/images/light-wide.png" alt="the uncenter.org homepage, desktop view">
</picture>
</div>

## Contributing

If you see any issues or have any suggestions for the website, please open an issue or pull request. If you have any questions, feel free to reach out to me on via the [contact methods listed on my website](https://uncenter.org/contact/).

## About

### Features

- **OG preview images** for posts and pages using [Satori](https://github.com/vercel/satori) and [`sharp`](https://sharp.pixelplumbing.com/)
- **Syntax highlighting** for posts using [`shiki`](https://github.com/shikijs/shiki), configured based on [Raphael Höser's implementation](https://www.hoeser.dev/blog/2023-02-01-syntax-highlight/)
- **Optimized images** with [`eleventy-img`](https://github.com/11ty/eleventy-img)
- **RSS feed** using [`eleventy-plugin-rss`](https://github.com/11ty/eleventy-plugin-rss)
- **Spell-checking** for posts through [`cspell`](http://cspell.org/)
- **Optimized CSS, JS, and HTML** using [`postcss`](https://postcss.org/), [`UglifyJS`](https://github.com/mishoo/UglifyJS), and [`html-minifier`](https://github.com/kangax/html-minifier)

### Environment Variables

- `UMAMI_TOKEN`: the API token for fetching analytics data from [Umami](https://umami.is/)
- `UMAMI_USERNAME`
- `UMAMI_PASSWORD`

## Credits

Many thanks to the 11ty community for their contributions to the community, without which this website would not be possible- thanks to [Raphael Höser](https://www.hoeser.dev/), Stephanie Eckles for [11ty.rocks](https://11ty.rocks/), [Learn Eleventy from Scratch](https://learneleventyfromscratch.com/), [11ty.recipes](https://11ty.recipes/) by Mike Aparicio, [Bernard Nijenhuis' notes](https://bnijenhuis.nl/), and more.

Generic icons sourced from [Lucide](https://lucide.dev/) and brand icons from [Simple Icons](https://simpleicons.org/).

## License

[MIT](LICENSE.md)
