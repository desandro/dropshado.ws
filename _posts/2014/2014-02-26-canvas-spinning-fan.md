---

title: Canvas spinning fan
tags: [ canvas ]

layout: default

id: '77906307928'
---

<iframe class="vine-embed" src="https://vine.co/v/MZImrrUu6jL/embed/simple" width="480" height="480" frameborder="0"> </iframe>
<script async="true" src="//platform.vine.co/static/scripts/embed.js"> </script>

The white noise you hear in [this Vine](https://vine.co/v/MZImrrUu6jL) is the sound of my laptop fan whirling away at top speed. This animation is rendered in `<canvas>`, in Chrome. While the animation does have thousands of particles being rendered, I hadn't expected the top-speed fan.

I've been able to pinpoint its cause. The animation was using the width of an image, `this.img.width`, for every particle, every frame. Setting this value to a separate property `this.imgWidth` has slowed down the fan significantly. I speculate that this issue is similar to [reflow triggers](http://blog.letitialew.com/post/30425074101/repaints-and-reflows-manipulating-the-dom-responsibly).

Clearly, debugging via hardware machinations is not a good strategy. I still struggle with making sense of anything in the Chrome Developer Tools around rendering performance -- especially for a rendering like this one, involving thousands of particles over thousands of frames.
