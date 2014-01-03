---
layout: default
type: regular
tags: CSS, hasfiddle
format: markdown
title: Polka dot background with gradients

---
Playing around with gradient backgrounds after [Lea Verou](http://leaverou.me/demos/css3-patterns.html) and [Benjamin De Cock's](http://playground.deaxon.com/css/textured-tablecloth-background/) demos. Gradients don't render with perfect anti-aliasing if two color-stops share are especially close to one another. Circles are rendered with pixelated edges.  It's probably better just to use an image here, or if it needs to be dynamic, perhaps generate the image via `<canvas>`.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/desandro/5QbfH/embedded/result,css"> </iframe>

[**Fiddle**: Polka dot background with gradients](http://jsfiddle.net/desandro/5QbfH)