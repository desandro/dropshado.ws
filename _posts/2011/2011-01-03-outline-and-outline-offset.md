---
layout: default
type: regular
tags: CSS, Piotr Petrus
format: markdown
title: outline and outline-offset

---
Typically, I've only seen `outline` used for `:active` styles, i.e. `a:active { outline: none; }`. Smartypants [Piotr Petrus](http://riddle.pl/) [clued me in](http://jsfiddle.net/6jyEW/) to using `outline` for offset borders with [`outline-offset`](//developer.mozilla.org/en/CSS/outline).

<iframe style="width: 100%; height: 250px" src="http://jsfiddle.net/desandro/5ZJXT/embedded/result,css,html/"> </iframe>

[`outline` fiddle](http://jsfiddle.net/desandro/5ZJXT)

Note that `outline` does not inherit `border-radius`. Firefox does have [`-moz-outline-radius`](//developer.mozilla.org/en/CSS/-moz-outline-radius) just for this. No outline-radius in other browsers currently.