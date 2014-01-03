---
layout: default
type: regular
tags: js, hasfiddle
format: markdown
title: Extra parameters in setTimeout

---
`setTimeout` has optional parameters that can be used to pass in arguments into the timed-out function. From 
the [window.setTimeout - MDC Doc Center](https://developer.mozilla.org/en/DOM/window.setTimeout): 

    var timeoutID = window.setTimeout(func, delay, [param1, param2, ...]);

Useful for constructors when you want to use a constructor's method in the `setTimeout`.

    myAnimator.prototype.animate = function() {
      // advance frame
      this.frame++;
      // move element
      this.element.style.left = this.frame + 'px';
      // go to next frame
      if ( this.frame < this.maxFrames ) {
        // inside of setTimeout, this = window
        // pass in this as a parameter for the function
        setTimeout( function( instance ) {
          // instance = this
          instance.animate();
        }, 30, this );
      }
    };

[setTimeout extra parameters fiddle](http://jsfiddle.net/desandro/SXrQy/)