---

title: Conditional CSS doesn’t work in Chrome
tags: [ canvas ]

layout: default

id: '79494424279'
---

[Jeremy Keith's Conditional CSS technique](http://adactio.com/journal/5429) currently doesn't work in Chrome.

    @media all and (min-width: 45em) {
        body:after {
            content: 'widescreen';
            display: none;
        }
    }

The problem is with how [Chrome will not generate pseudo elements](https://code.google.com/p/chromium/issues/detail?id=236603) when set to `display: none`.

My current solution/hack is to fallback to the `head font-size` code, as Opera now supports this.

    @media screen and (min-width: 45em) {
        head {
            font-family: widescreen;
        }
    }

Thx [@overflowhidden for the assist](https://twitter.com/overflowhidden/status/444020047552712704).
