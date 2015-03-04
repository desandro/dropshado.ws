---

title: HTML5 video autoplay DOM change WebKit bug
tags: [ video, WebKit ]

layout: default

id: '112695083527'
---

WebKit/Blink has a bug where making a [DOM change to video elements will pause the video](https://bugs.webkit.org/show_bug.cgi?id=45188). This can prevent or stop video `autoplay`. [Arnaud Leyder has a solid explanation on Stack Overflow](http://stackoverflow.com/a/26907606/182183). 

The hack fix is to re-trigger `.play()` on the video after the DOM change has been made.

    // make DOM change to video
    elem.appendChild( video );
    // trigger .play() to resume autoplay for WebKit
    video.play();

<p data-height="380" data-theme-id="0" data-slug-hash="RNBxXq" data-default-tab="result" data-user="desandro" class='codepen'>See the Pen <a href='http://codepen.io/desandro/pen/RNBxXq/'>html5 video autoplay DOM change WebKit bug</a> by David DeSandro (<a href='http://codepen.io/desandro'>@desandro</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
