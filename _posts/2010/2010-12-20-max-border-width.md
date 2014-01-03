---
layout: default
type: regular
tags: WebKit, css, hasfiddle
format: markdown
title: Max border-width

---
Some browsers max-out border-width.  In the fiddle below, where I set `border-bottom-width: 9999px`, WebKit browsers render only 1807px, Opera renders 2407px. Like a mad scientist, Firefox renders all ten-thousand-minus-one pixels.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/desandro/AW4H4/embedded/result,html,css,js"> </iframe>

[Max border-width fiddle](http://jsfiddle.net/desandro/AW4H4/)