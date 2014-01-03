---
generator: Tumblr Gem
layout: default
type: regular
tags: oldIE
format: markdown
title: Local protocol-relative URL on oldIEs

---
Testing Isotope on IE7 locally.

I thought I'd be a smartypants ninja and use a [protocol-relative URL](http://paulirish.com/2010/the-protocol-relative-url/) for the [HTML5 shiv](http://code.google.com/p/html5shiv/) as Google will serve both `http` and `https`, like so:

    <!--[if lt IE 9]>
      <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

Turns out that IE7 did not load the shiv. Probably because the local URL for the site is `C:\`, which may be interpreted as `file:///`. Whatever the case, using the standard `http://` got it working.