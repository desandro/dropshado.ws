---

title: Object.prototype.watch()
tags: [ JavaScript, Firefox ]

layout: default

id: '108044246182'
---

[Firefox has native `.watch()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/watch).

> The watch() method watches for a property to be assigned a value and runs a function when that occurs.

Interestingly, it's special to Firefox.

> Warning: Generally you should avoid using watch() and unwatch() when possible. These two methods are implemented only in Gecko, and they're intended primarily for debugging use.

I discovered this when I was using `watch` for an option property name `options.watch = true`. My stuff worked fine in Chrome & Safari, but it was absolutely broken in Firefox.
