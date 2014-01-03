---

title: Subpixel positioning with CSS transforms and type rendering
type: regular
tags: CSS, transforms, typography, hasfiddle
format: markdown
generator: Tumblr Gem

layout: default

---

Along with [WebKit hardware-accelerated anti-aliasing](http://dropshado.ws/post/6142339613/resolving-anti-aliasing-on-webkit-hardware-accelerated), CSS 3D transforms can have adverse affects on type rendering when `translate` X/Y values have subpixel, or decimal values.

[View fiddle: Subpixel type rendering](http://jsfiddle.net/desandro/RLcRX/). Hover over elements to disable transforms.

<iframe style="width: 100%; height: 540px;" src="http://jsfiddle.net/desandro/RLcRX/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

In WebKit, the first two elements will have fuzzy type and borders, as rendered elements don't exactly line up with pixels on the screen.

Just to be thorough, I took a look at 2D subpixel translation transforms (i.e. `translateX(0.5px)`). In WebKit, the type seems to render appropriately with the subpixel values. However the borders don't look so good. They get positioned in between pixel spaces, rendering a 1px border with 2 pixels. Firefox doesn't have any issues with borders.

![subpixel transform positioning type rendering screenshot](http://i.imgur.com/Cgwjy.png)

The fix is to prevent decimal values when using `translate` and round those values to the nearest integer.

