---

title: Transition end propertyName
tags: [ transitions, hasfiddle ]

layout: default
id: '60136524817'

---

When listening to transition End event, the [`event` object comes with `propertyName`](http://www.w3.org/TR/css3-transitions/#Events-TransitionEvent-propertyName). This is useful when detecting just what transition has completed.

    elem.addEventListener( 'transitionend' function( event ) {
      console.log( event.propertyName + 'transition completed' );
    });

Also interesting is how the transition end event will only trigger once if a property gets changed again, during a previous transition.

<p data-height="268" data-theme-id="0" data-slug-hash="EHpct" data-user="desandro" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/desandro/pen/EHpct'>transtionEnd</a> by David DeSandro (<a href='http://codepen.io/desandro'>@desandro</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async="true" src="http://codepen.io/assets/embed/ei.js"></script>
