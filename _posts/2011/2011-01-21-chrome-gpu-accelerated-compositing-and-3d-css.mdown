---
layout: default
type: regular
tags: Chrome, transforms, css
format: markdown
title: Chrome GPU accelerated compositing and 3D CSS transforms

---
Contrary to my observations [a week ago](http://dropshado.ws/post/2744575024/google-chrome-labs), [Chrome beta channel](http://www.google.com/intl/en/landing/chrome/beta/) (I'm currently running 9.0.597.67 beta) now supports GPU accelerated compositing a.k.a. hardware acceleration and 3D CSS transforms. 

Go to `about:flags` URL and enable _GPU Accelerated Compositing_, then restart Chrome.

Accelerated compositing works as expected.  Transforms that use `translate3d( x, y, 0 )` transition much more smoothly than 2D `translate( x, y )`.

Looking over some of the [Intro to CSS 3D transforms](http://desandro.github.com/3dtransforms/) demos, I did find a several bugs:

+ `-webkit-backface-visibility: hidden;` doesn't hide all backfaces. See [Perspective 3 demo](http://desandro.github.com/3dtransforms/examples/perspective-03.html)
+ 3D transforms break the Element Inspector
+ I'm finding some inconsistencies between Safari and Chrome when I use both `-webkit-transform-origin` and `-webkit-perspective-origin`. I think Chrome is actually rendering it correctly.

But I'm jazzed to see 3D transforms and hardware acceleration come to Chrome. This will wake up the other browsers to get on board.