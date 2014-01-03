---
layout: default
type: regular
tags: CSS, Jordan Dobson, hasfiddle
format: markdown
title: left / top / right / bottom positioning

---
So many gems within [Jordan Dobson's animated border demo](http://cssdesk.com/bhHJm), but I especially like his use of positioning with all four directions.
    
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

With no size dimensions set, the child element stretches to the size of its parent. Typically, when I want a absolutely-positioned element to match its parent, I'll use `left: 0; top: 0; width: 100%; height: 100%;`. The pattern employed by Mr. Dobson affords calculated margins, i.e. the child element can extend to within 10px of its parent.

<iframe style="width: 100%; height: 340px" src="http://jsfiddle.net/desandro/etnYW/embedded/result,css,html"> </iframe>

[View "left / top / right / bottom positioning" fiddle](http://jsfiddle.net/desandro/etnYW)