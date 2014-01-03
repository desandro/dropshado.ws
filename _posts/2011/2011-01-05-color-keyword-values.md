---
layout: default
type: regular
tags: hasfiddle, CSS, webkit, color
format: markdown
title: color keyword values

---
WebKit parses `#colorkeyword` values as valid colors. `background: #yellow` renders as yellow.

<iframe style="width: 100%; height: 250px" src="http://jsfiddle.net/desandro/NVBmc/embedded/result,css,html"> </iframe>

[#color fiddle](http://jsfiddle.net/desandro/NVBmc)

Being thorough, I also tested other color values with an extra `#` in front. No dice, only keywords get parsed.