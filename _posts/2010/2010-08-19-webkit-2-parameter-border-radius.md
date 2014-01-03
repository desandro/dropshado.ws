---
layout: default
type: regular
tags: webkit, css, border-radius
format: markdown
title: Webkit 2-parameter border-radius

---


Recent WebKit browsers (I'm looking at Safari 5.0.1 and Chrome 6.0.472.36 beta) now adhere to the [CSS3 border-radius spec](http://www.w3.org/TR/css3-background/#the-border-radius), so you can drop the `-webkit-` vendor prefix. But conflict occurs when you use two parameters as the value.

    .box {
      -webkit-border-radius: 40px 10px;
         -moz-border-radius: 40px 10px;
              border-radius: 40px 10px;
    }


Firefox, Opera, and the latest WebKit browsers (and IE9, I'm guessing) will display a box with the top-left and bottom-right with 40px border-radius, and a top-right and bottom-left with a border-radius of 10px. 

<div style="background: #058; width: 100px; height: 100px; margin-bottom: 0.8em; -webkit-border-radius: 40px 10px; -moz-border-radius: 40px 10px; border-radius: 40px 10px;"> </div>


But older WebKit browsers will not have the new `border-radius` rule overwrite the previous `-webkit-border-radius`, and instead the box with have an _eliptical_ border-radius, the equivalent of `border-radius: 40px/10px;`.

<div style="background: #058; width: 100px; height: 100px; margin-bottom: 0.8em;  -webkit-border-radius: 40px/10px; -moz-border-radius: 40px/10px; border-radius: 40px/10px;"> </div>