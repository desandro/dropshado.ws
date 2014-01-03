---

title: sans-serif differences
type: regular
tags: CSS, Typography
format: markdown
generator: Tumblr Gem

layout: default

---

Speaking of Helvetica, the current typography solution on the Boilerplate is to use just `sans-serif` for the base font-family. [See Issue 42 on their reasoning](https://github.com/paulirish/html5-boilerplate/issues/42). Windows gets its best sans-serif, Arial. Mac gets its champ, Helvetica. Or so you would think. On the Mac, it's a bit of a mix.

+ Chrome uses Helvetica Neue
+ Firefox uses Helvetica
+ Safari uses Helvetica
+ Opera 11.0 and earlier uses Lucida Grande
+ Opera 11.10 and later uses Helvetica (edited 19 Apr 2011 [thx Divya](https://twitter.com/nimbuin/status/60337694429020160) )

[See sans-serif fiddle](http://jsfiddle.net/desandro/v7x55/)

The differences aren't too drastic, but they're enough that you should be aware of them. Usually I run into issues when some text is wrapping differently between browsers, and throwing off an elements height. I'm surprised by the difference between WebKit cousins Chrome and Safari. Helvetica Neue line-height is taller, and has tighter kerning. 

Personally, my go-to sans-serif font stack is:

    font-family: 'Helvetica Neue', Arial, sans-serif;

Kevin at minimali.st details why to use it in [Better Helvetica Font Stack](http://minimali.st/2010/03/helvetica-and-arial-font-stack/). I can't definitively say it's a better solution that vanilla `sans-serif`, but at least I know what to expect.