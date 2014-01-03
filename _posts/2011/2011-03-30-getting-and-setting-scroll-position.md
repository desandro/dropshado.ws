---

title: Getting and setting scroll position
type: regular
tags: js
format: markdown
generator: Tumblr Gem

layout: default

---

I relied on jQuery to handle getting and setting scroll position in [BeerCamp 2011](http://2011.beercamp.com), but after taking another look, its pretty easy to do with modern browsers.

    // get scroll position
    var x = window.scrollX,
        y = window.scrollY;
    
    // set scroll position to x: 140, y: 700
    window.scrollTo( 140, 700 );

You might see `pageXOffset` and `pageYOffset`, as [these properties are the same](http://dev.w3.org/csswg/cssom-view/#dom-window-pagexoffset) as `scrollX` and `scrollY`. [Old IE doesn't support either](http://www.quirksmode.org/dom/w3c_cssom.html#t02).
    