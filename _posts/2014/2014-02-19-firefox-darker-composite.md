---

title: Firefox doesn't support canvas composite darker
tags: [ canvas, Firefox, hasfiddle ]

layout: default

id: '77229081704'
---

[Firefox doesn't support canvas `globalCompositeOperation` `darker`](https://bugzilla.mozilla.org/show_bug.cgi?id=571532). As it turns out, the `darker` composite value was removed from the [canvas spec](http://www.w3.org/html/wg/drafts/2dcontext/html5_canvas/#dom-context-2d-globalcompositeoperation) in 2007. See [the globalCompositeOperation examples](https://developer.mozilla.org/samples/canvas-tutorial/6_1_canvas_composite.html), ironically from Mozilla Developer Network documentation.

The closest solution is to use `difference` (which oddly enough isn't in the spec), which Firefox (currently v28) does support. But `difference` is different from `darker`. `difference` subtracts channel values, `darker` multiplies them. If you're using primary colors (`#f00`, `#f0f`, etc.) it may work.

IE10 supports neither.

<p data-height="440" data-theme-id="0" data-slug-hash="tCyEF" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/desandro/pen/tCyEF'>darker/difference canvas composite</a> by David DeSandro (<a href='http://codepen.io/desandro'>@desandro</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async="true" src="//codepen.io/assets/embed/ei.js">''</script>
