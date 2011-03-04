---
layout: default
type: regular
tags: css, webkit, animation, easing
format: markdown
title: WebKit animation bounce easing

---
Getting a fluid bouncing animation can be tricky as you have to set the easing (otherwise known as `-webkit-animation-timing-function`) for each keyframe.  Keep the physics of a bouncing ball in mind. As the object moves upwards, its acceleration decreases until it comes to the top of its accent. So going upwards, `-webkit-animation-timing-function: ease-out`. Returning downwards, acceleration increases due to gravity. Ergo,  `-webkit-animation-timing-function: ease-in`.  

Take a look at this example code:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>WebKit animation bounce easing</title>
      <meta charset="utf-8" />

      <style media="screen">

        h1 {
          position: absolute;
          left: 10px;
          top: 200px;
          -webkit-animation: bounce 1s infinite ;
        }

        @-webkit-keyframes bounce {
            0% { -webkit-transform: translate3d(0,   0px,0); 
                 -webkit-animation-timing-function: ease-out; }
           50% { -webkit-transform: translate3d(0,-150px,0); 
                 -webkit-animation-timing-function: ease-in; }
          100% { -webkit-transform: translate3d(0,   0px,0); }
        }

      </style>

    </head>
    <body>

      <h1>Bouncing</h1>

    </body>
    </html>

Note that the easing is being set on which keyframe. For the upward motion (0% - 50%) it is set on the initial keyframe. On the downward motion (50% - 100%), it is set on the 50% keyframe. The final keyframe requires no easing to be set as this is the final destination of the animation, with no motion occurring afterwards.

This example works in Safari 5. Chrome's animation rendering engine (I'm looking at on 5.0.375.125 beta) currently looks glitchy.
