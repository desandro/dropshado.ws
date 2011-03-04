---
layout: default
type: regular
tags: HTML5, canvas, jquery, plugin, John Schulz
title: $.getImageData
format: markdown
---
[http://www.maxnov.com/getimagedata/](http://www.maxnov.com/getimagedata/)

[John Schulz](http://twitter.com/JFSIII/status/25304230459), regarding [using `getImageData()` on remote images](/post/1172959582/4-8-10-2-security-with-canvas-elements-html5):

> See [http://bit.ly/cTS0Vd](http://bit.ly/cTS0Vd) for ideas on loading remote images. It uses jQuery, but loading img-to-json URL+cb as script should work.

From the $.getImageData page:

> $.getImageData allows anyone to get an image from another domain and have pixel level access to it using the `getImageData()` method. It works by sending a request with the URL of the image to google's servers via the [Google App Engine](http://code.google.com/appengine/). The server then converts the image into base64 encoded [data URL](http://en.wikipedia.org/wiki/Data_URI_scheme) and sends the image back as a JSON object. This means that the image can be locally included on the website and therefore it can be edited by the `canvas` tag.