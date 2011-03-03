---
layout: default
type: regular
tags: CSS, style guide, standards
format: markdown
title: CSS formatting

---

[Michael Bucks](http://twitter.com/MikeBucks/status/9759846320578560): @[desandro](http://twitter.com/desandro) @[simurai](http://twitter.com/simurai) How do you guys format complicated gradient, box shadow, keyframe, etc. CSS3 attributes? I'm digging myself a hole here.



Been thinking about formalizing a style guide for CSS as CSS3 includes some especially complex syntax.  Here's how I've been playing this tune lately.

My preference is towards improving readability and scan-ability, if at the cost of length.

## Lots of spaces

Taken from the [jQuery Style Guide](http://docs.jquery.com/JQuery_Core_Style_Guidelines#Spacing). Spaces inside parentheses so values can be easily read.

    -webkit-transform: rotateX( 45deg ) translate( 100%, 0% );
    background-color: hsla( 220, 100%, 50%, 0.7 )
    
## Stagger vendor pre-fixed properties

Values for the same property should line up across declarations.  This is a win for debugging as it makes it easier for glance at all the values and ensure that they are the same. Also good if you want to change them fast.  With a visual cascade, you can quickly group the properties together see where the next one begins. 

I made a couple [TextMate snippets](https://github.com/desandro/CSS3.tmbundle) for this sort of thing. 

    -webkit-border-radius: 10px;
       -moz-border-radius: 10px;
            border-radius: 10px;
    -webkit-transition: opacity 1s;
       -moz-transition: opacity 1s;
         -o-transition: opacity 1s;
            transition: opacity 1s;
    
## Use white space to line up similar values

Again, makes it easier to debug and read. Typically good for animation keyframes

    @-webkit-keyframes spinCube {
        0% { -webkit-transform: rotateX(   0deg ) translateZ( 100px ); }
       50% { -webkit-transform: rotateX(  90deg ) translateZ(  50px ); }
      100% { -webkit-transform: rotateX( 180deg ) translateZ(   0px ); }
    }

## Line breaks and tabs inside complex values

Usually in multiple backgrounds, gradient backgrounds, and multi-layered text-shadows. This looks a bit ridiculous because we're so used to simple values. But  if anyone else has to dive into a multiple-background _with_ multiple gradients value, they can easily go in and start tweaking it. I might be going a bit overboard with white space for the WebKit color-stops.

    background:
      -webkit-gradient( linear, left top, left bottom,
        from(            hsla( 0, 0%, 100%, 0.1 ) ), 
        color-stop( 50%, hsla( 0, 0%, 100%, 0.2 ) ),
        color-stop( 50%, hsla( 0, 0%,   0%, 0.0 ) ),
        to(              hsla( 0, 0%,   0%, 0.2 ) )
      ),
      -webkit-gradient( linear, left top, left bottom,
        from( hsl( 220, 100%, 60% ) ), 
        to(   hsl( 220,  80%, 60% ) )
      )
    ;
    background:
      -moz-linear-gradient( -90deg,
        hsla( 0, 0%, 100%, 0.1 ), 
        hsla( 0, 0%, 100%, 0.2 ) 50%,
        hsla( 0, 0%,   0%, 0.0 ) 50%,
        hsla( 0, 0%,   0%, 0.2 )
      ),
      -moz-linear-gradient( -90deg,
        hsl( 220, 100%, 60% ), 
        hsl( 220,  80%, 60% )
      )
    ;

