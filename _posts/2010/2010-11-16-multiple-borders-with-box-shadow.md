---
layout: default
type: regular
tags: CSS, fiddle
format: markdown
title: Multiple borders with box-shadow

---
I'm working on some comps that have two sets of borders.  I'm solving for this by hacking box-shadows to produce multiple borders. 


<iframe style="width: 100%; height: 420px" src="http://jsfiddle.net/desandro/KQsL2/embedded/result,html,css"> </iframe>

[Test fiddle](http://jsfiddle.net/desandro/KQsL2)

The trick is to use the spread parameter of the [`box-shadow`](http://www.w3.org/TR/css3-background/#box-shadow) property to create bigger shapes than the original element.

> The fourth length is a spread distance. Positive values cause the shadow shape to expand in all directions by the specified radius.

Note that like multiple backgrounds, box-shadows are rendered in reverse order. So the last shadow declared in the code will appear behind its predecessors. The first shadow appears at the top.

Interesting in how Firefox and Opera renders border-radius the faux-borders around the original element producing circles, whereas WebKit applies the original border-radius to the faux-borders, producing rounded rectangles.