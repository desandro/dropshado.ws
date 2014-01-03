---

title: CSS transforms breaking flash
type: regular
tags: transforms, Flash
format: markdown
generator: Tumblr Gem

layout: default

---

I'm finding that Flash content inside an element with a CSS transform is a bit buggy across browsers, even for a simple 2D translation `translate(20px, 50px)`. Safari sometimes renders the content, in the example below, the YouTube video is offset.  Firefox 4 doesn't render anything.  Chrome and Opera seem to be fine.

<iframe style="width: 100%; height: 400px" src="http://jsfiddle.net/desandro/t3Cmy/embedded/result,html,css"> </iframe>

[View example on jsFiddle](http://jsfiddle.net/desandro/t3Cmy/)