---
layout: default
type: regular
tags: css, transforms
format: markdown
title: turn angle unit

---
Going through last year's 24ways, I caught this nugget.

[Natalie Downe](http://24ways.org/2009/going-nuts-with-css-transitions):

> Rotations can be specified in degrees, radians (`rads`) or grads). WebKit also supports turns unfortunately Firefox doesn’t just yet.

`turn` is a valid [CSS3 angle unit](http://www.w3.org/TR/css3-values/#angles). A year later after Ms. Downe's article, WebKit is still the only platform to support it.

<iframe style="width: 100%; height: 400px" src="http://jsfiddle.net/desandro/zjskf/3/embedded/result,css,html"> </iframe>

[`turn` angle unit fiddle](http://jsfiddle.net/desandro/zjskf/3/)