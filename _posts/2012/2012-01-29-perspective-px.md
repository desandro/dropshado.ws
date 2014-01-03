---

title: Perspective values require px
type: regular
tags: CSS, 3D, transforms, Paul Rouget
format: markdown
generator: Tumblr Gem

layout: default

---

Now that 3D transform support has landed in Firefox Aurora, it's prime time to go back and revise any previous WebKit-only demos for other browsers.

[Paul Rouget](http://coding.smashingmagazine.com/2012/01/06/adventures-in-the-third-dimension-css-3-d-transforms/#comment-563830):

> Please use "px" at the end of the perspective values. If you don’t, this will only works with Webkit (your examples don’t work correctly with Firefox because of that).

You got it, Paul.

    #my-3d-environment {
      -webkit-perspective: 1000px;
         -moz-perspective: 1000px;
          -ms-perspective: 1000px;
           -o-perspective: 1000px;
              perspective: 1000px;
    }
