---

title: Safari rounds off fractional pixels
tags: [ Safari, hasfiddle ]

layout: default

id: '73100695877'
---

I'm looking to measure the width of an element with `width: 66.666%`, whose container is `width: 300px`. Most browsers return a fractional pixel value, i.e. `199.98px`. Safari rounds off the fractional pixel value to `199px`. It's a bit odd, as I would expect it would at least round up to `200px` when the value is that close.

See demo:

<p data-height="268" data-theme-id="0" data-slug-hash="CEfJF" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/desandro/pen/CEfJF'>getComputedStyle width 66.666%</a> by David DeSandro (<a href='http://codepen.io/desandro'>@desandro</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

I've opened [WebKit bug #126844](https://bugs.webkit.org/show_bug.cgi?id=126844) to capture this behavior.

I have found that using `calc()` values produces more expected results. If I change the width of the element to `width: calc( 100% * 2 / 3 )`, Safari returns with `200px`. It's still problematic, but it's an improvement.

<p data-height="268" data-theme-id="0" data-slug-hash="CKwfd" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/desandro/pen/CKwfd'>getComputedStyle width calc( 100% * 2/3)</a> by David DeSandro (<a href='http://codepen.io/desandro'>@desandro</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<script async="true" src="http://codepen.io/assets/embed/ei.js"> </script>
