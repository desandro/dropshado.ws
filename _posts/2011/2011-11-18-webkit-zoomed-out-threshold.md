---

title: WebKit zoomed-out font-size threshold
type: regular
tags: WebKit, typography
format: markdown
generator: Tumblr Gem

layout: default

---

The zoomed-out font-size threshold in WebKit is a mysterious anomaly I've long had my suspicions about, but now have finally tested. Take some body copy, start zooming out the page, and observe how copy with smaller font-sizes seem to maintain some legible size, even though they should be much smaller. Try hitting _⌘-_ too see the effect on this fiddle.

<iframe style="width: 100%; height: 330px" src="http://jsfiddle.net/desandro/H3Muc/embedded/result" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

[View fiddle - zooming font-size threshold](http://jsfiddle.net/desandro/H3Muc/)

Here's how Chrome 16 renders the fiddle with Zoom Out hit twice. Zoomed-out font-sizes 13px-9px are all rendered as the same size. Smaller font-sizes return to proper proportions. Note that this is not Safari's preference to limit small font-size, as the teeny-tiny font-sizes are still rendered.

![WebKit zoomed-out font-size threshold](http://i.imgur.com/4yInV.png)

Zooming out four times, it appears that the threshold is setting a font-size to 9px. Any text set to 9px font-size or greater will be rendered at least the minimally-legible size of 9px. Anything smaller will be rendered proportionally.

![WebKit zoomed-out four times. Font-size 9px threshold](http://i.imgur.com/3B4Jf.png)