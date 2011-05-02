---

title: Named access on the window object
type: regular
tags: js, hasfiddle
format: markdown
generator: Tumblr Gem

layout: default

---

[Per the HTML5 spec](http://dev.w3.org/html5/spec/browsers.html#named-access-on-the-window-object), you can access elements via their id.  For example, on [dropshado.ws](dropshado.ws), which has markup of `<section id="posts">...</section>`, plugging in `window.posts` or `posts` in the console will return the HTML element.

    document.getElementById('posts')
    // >> <section id=​"posts">...</section>​
    window.posts
    // >> <section id=​"posts">...</section>​
    posts
    // >> <section id=​"posts">...</section>​
    posts === document.getElementById('posts')
    // >> true

From my brief tests, WebKit and Opera support this, not Firefox 4.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/desandro/4Ds9s/embedded/js,result,html,css"> </iframe>

[Global HTML element with ids fiddle](http://jsfiddle.net/desandro/4Ds9s/)

The good news is that this is a convenient for debugging, no need to type out `document.getElementById`. Bad news is that its not especially reliable. See also this [WHATWG thread polluting global namespace and other concerns](http://lists.whatwg.org/pipermail/whatwg-whatwg.org/2011-April/031109.html).

