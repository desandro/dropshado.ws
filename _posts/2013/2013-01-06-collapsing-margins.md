---

title: Collapsing margins
tags: [ CSS, hasfiddle ]

layout: default

id: '39853759151'
---

[Collapsing margins](http://www.w3.org/TR/CSS21/box.html#collapsing-margins) is an ancient property of the CSS Box Model, which I am just now comprehending. In short, with two block elements, will collapse the margins between them collapse to the greater margin. But this only applies to block elements. Floated and inline-block elements will keep margins un-collapsed.

[See example on CodePen](http://codepen.io/desandro/pen/rjiAc).

<pre class="codepen" data-height="300" data-type="result" data-href="rjiAc" data-user="desandro" data-safe="true"><code> </code></pre>
<script async="async" src="http://codepen.io/assets/embed/ei.js"> </script>
