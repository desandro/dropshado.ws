---
layout: default
type: regular
tags: canvas, HTML5
title: 4.8.10.2 Security with canvas elements — HTML5
format: markdown
---

[4.8.10.2 Security with canvas elements — HTML5](http://dev.w3.org/html5/spec/the-canvas-element.html#security-with-canvas-elements)

> **Information leakage** can occur if scripts from one origin can access information (e.g. read pixels) from  images from another origin (one that isn't the same).
>
> To mitigate this, `canvas` elements are defined to have a flag indicating whether they are _origin-clean_. All `canvas` elements must start with their _origin-clean_ set to true. The flag must be set to false if any of the following actions occur:
>
> - The element's 2D context's `drawImage()` method is called with an `HTMLImageElement` or an `HTMLVideoElement` whose origin is not the same as that of the `Document` object that owns the `canvas` element.

...

> Whenever the `toDataURL()` method of a canvas element whose _origin-clean_ flag is set to false is called, the method must raise a `SECURITY_ERR` exception.
>
> Whenever the `getImageData()` method of the 2D context of a canvas element whose _origin-clean_ flag is set to false is called with otherwise correct arguments, the method must raise a `SECURITY_ERR` exception.

I was pretty jazzed to get [Close Pixelate](http://desandro.com/resources/close-pixelate/) working on all over the web. Dynamically pulling in images from Flickr would have been fun. Turns out the HTML5 Spec explicitly disallows using `getImageData` or `toDataURL()` on images not hosted on the same domain of the current page.