---

title: Resolving anti-aliasing on WebKit hardware-accelerated elements
type: regular
tags: WebKit, CSS, typography, hasfiddle
format: markdown
generator: Tumblr Gem

layout: default

---

Activating hardware acceleration in WebKit with 3D CSS transforms changes the way WebKit renders text. WebKit composites the element so that when rendering the transform, it doesn't have to re-render sub-pixel anti-aliasing for every frame. This feature is a good thing in that vastly improves performance of transitions and transforms in WebKit.

But this affects anti-aliasing when there is no actual transform and hardware-acceleration is active on a element. i.e. banal 3D transforms like `translate3d( 0, 0, 0)` or `scale3d( 1, 1, 1 )`.

The solution is the same one for IE's opacity bug: add a matching background to the affected background.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/desandro/DDHHD/1/embedded/result,css,html"> </iframe>

[View fiddle: resolving anti-aliasing with hardware acceleration](http://jsfiddle.net/desandro/DDHHD/1/).

Hover over the image below to see the comparison for [TUAW](http://www.tuaw.com).

<img src="http://i.imgur.com/O3qBg.png" onmouseover='this.src = "http://i.imgur.com/Vm2n8.png" ' onmouseout='this.src = "http://i.imgur.com/O3qBg.png" ' style="border: 1px solid #CCC;" />

See also [Webkit Hardware acceleration bleeding into subsequent elements, and how to fix it - The Official Posterous Tech Blog](http://technology.posterous.com/webkit-hardware-acceleration-bleeding-into-su).
