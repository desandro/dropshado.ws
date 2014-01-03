---

title: Flex box with collapsed height
tags: [ CSS, flexbox, hasfiddle ]

layout: default

id: '51574113930'
---

By default, [flex box](http://css-tricks.com/using-flexbox/) makes item elements inherit the height of their container. To disable this behavior, and collapse item heights, use `align: start` (or the proper variation there-of).

    .row {
      /* flex box */
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;   
      /* align start, disable vertical height */
      -webkit-box-align: start;
         -moz-box-align: start; /* FF <=20 */
         -ms-flex-align: start; /* IE10 */
      -webkit-align-items: flex-start;
              align-items: flex-start;
    }

<pre class="codepen" data-height="300" data-type="result" data-href="zhcKu" data-user="desandro" data-safe="true"><code> </code><a href="http://codepen.io/desandro/pen/zhcKu">Check out this Pen!</a></pre>
<script async="true" src="http://codepen.io/assets/embed/ei.js"> </script>
