---

title: padding-bottom border-box border bug
tags: CSS

layout: default

id: '112220816147'
---

You can use `padding-bottom` as a way to set height of an element based on its parent width, so that it is proportional with its own width.

    /* item sized as a square 1/3 size of container */
    .item {
      width: 33.3%;
      padding-bottom: 33.3%;
    }

If you are using `box-sizing: border-box` and the element has border, you would expect that element to remain a perfect square.

    .item {
      width: 33.3%;
      padding-bottom: 33.3%;
      border: 2px solid;
    }

But that's not the case. Because the height is faked with `padding-bottom`, it's not actually setting its height. Consequently, the height of the border is added on top of the `padding-bottom` height.

This can be resolved either by using `outline` instead of border, or using `calc` to account for the border size.

<p data-height="419" data-theme-id="0" data-slug-hash="wBXqLB" data-default-tab="result" data-user="desandro" class='codepen'>See the Pen <a href='http://codepen.io/desandro/pen/wBXqLB/'>bug with padding-bottom, border, and box-sizing: border-box</a> by David DeSandro (<a href='http://codepen.io/desandro'>@desandro</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
