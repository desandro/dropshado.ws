---

title: Chrome source files
type: regular
tags: Chrome
format: markdown
generator: Tumblr Gem

layout: default

---

Looking under the hood at the Chrome dev tools and user agent styles, I came across some of the source files that power the dev tools

+ [chrome-devtools://devtools/DevTools.js](chrome-devtools://devtools/DevTools.js)
+ [chrome-devtools://devtools/devTools.css](chrome-devtools://devtools/devTools.css)

devTools.css is worth taking a look a look at as it has the base styles for the syntax highlighting used in the dev tools.  Search for `/* inspectorSyntaxHighlight.css */`.

If you're interested in taking a peek, I'd point you to `resources.pak` located in `/Applications/Google Chrome/Contents/YOUR_VERSION/Google Chrome Framework.framework/Resources/resources.pak`.
