---

title: touch.identifier = 0
tags: [ mobile, touch ]

layout: default

id: '45694832906'
---

In the [touch event API](http://www.w3.org/TR/touch-events/), each touch object has a unique `identifier` property. This allows you to keep track of which touch is which when listening to touch 
events. Try out [jsfiddle.net/desandro/WnnG9/8/show/light](http://jsfiddle.net/desandro/WnnG9/8/) on a touch device.

    document.body.addEventListener( 'touchstart', function( event ) {
      // dismiss after-touches
      if ( isTouching ) {
        return;
      }
      event.preventDefault();
      // only care about the first touch
      var touch = event.changedTouches[0];
      identifier = touch.identifier;
      log('touch START; indentifer ' + touch.identifier );
      window.addEventListener( 'touchmove', onTouchMove, false );
      window.addEventListener( 'touchend', onTouchEnd, false );
      isTouching = true;
    }, false );
    
    function getTouch( event ) {
      // cycle through every change touch and get one that matches
      for ( var i=0, len = event.changedTouches.length; i < len; i++ ) {
        var touch = event.changedTouches[i];
        if ( touch.identifier === identifier ) {
          return touch;
        }
      }
    }
    
    function onTouchMove( event ) {
      // get matched touch
      var touch = getTouch( event );
      if ( !touch ) {
        return;
      }
      log( 'touch move ' + touch.pageX + ' ' + touch.pageY );
    }

I ran into a bug because I was short-cutting checking `touch.idenfitier`. iOS uses a unique number for each every touch, like `166930777`, `166930778`, `166930779`. It looks like Opera Mobile (and possibly Android) isn't as granular with these identifiers, instead using `0`, `1`, `2` for each gesture event, then using `0`, `1`, `2` for the next one. [I ran into a gotcha on that first touch](https://github.com/desandro/draggabilly/commit/bd04a337#L1L240), when it's a falsy value `touch.identifier = 0`.
