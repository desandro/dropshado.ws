---

title: Match CSS animation keyframe transforms
tags: [ CSS, animation, transforms ]

layout: default

id: '110480258337'
---

My loader spinner wasn't spinning.

    .loader-spinner {
      animation: spinLoader 600ms steps(12, end) infinite;
    }
    
    @keyframes spinLoader {
      from { transform: translate( -50%, -50% ); }
      to { transform: translate( -50%, -50% ) rotate(1turn); }
    }

The problem was that the keyframes for `transform` need to match. Even though there's an implicit `rotate(0turn)` in the `transform` value, it's required to be explicit for animation keyframes.

    @keyframes spinLoader {
      /* match transform values */
      from { transform: translate( -50%, -50% ) rotate(0turn); }
      to { transform: translate( -50%, -50% ) rotate(1turn); }
    }

<p data-height="268" data-theme-id="0" data-slug-hash="wBPEXP" data-default-tab="result" data-user="desandro" class='codepen'>See the Pen <a href='http://codepen.io/desandro/pen/wBPEXP/'>loader spinner with CSS animation</a> by David DeSandro (<a href='http://codepen.io/desandro'>@desandro</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
