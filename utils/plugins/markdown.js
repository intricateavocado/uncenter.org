const markdownIt = require("markdown-it");
const markdownItChecklist = require("markdown-it-task-checkbox");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItLinkAttributes = require("markdown-it-link-attributes");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItMark = require("markdown-it-mark");
const markdownItAbbr = require("markdown-it-abbr");
const markdownItSup = require("markdown-it-sup");
const markdownItSub = require("markdown-it-sub");
const markdownItContainer = require("markdown-it-container");
const markdownItKBD = require("markdown-it-kbd");
const markdownItEmoji = require("markdown-it-emoji");

const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
})
    .use(markdownItChecklist, {
        disabled: true,
        divWrap: false,
        idPrefix: "",
        ulClass: "checklist",
        liClass: "checklist-item",
    })
    .use(markdownItAnchor, {
        permalink: markdownItAnchor.permalink.ariaHidden({
            placement: 'after',
            class: 'anchor',
            symbol: '#',
        })
    })
    .use(markdownItLinkAttributes, [
        {
            matcher(href) {
                return href.match(/^https?:\/\//);
            },
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer",
            },
        },
    ])
    .use(markdownItAttrs)
    .use(markdownItFootnote)
    .use(markdownItMark)
    .use(markdownItAbbr)
    .use(markdownItSup)
    .use(markdownItSub)
    .use(markdownItContainer, "card")
    .use(markdownItKBD)
    .use(markdownItEmoji);

module.exports = {
    markdownLibrary,
};