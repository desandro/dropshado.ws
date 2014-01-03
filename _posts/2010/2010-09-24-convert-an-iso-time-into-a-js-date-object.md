---
layout: default
type: regular
tags: js, date, time
format: markdown
title: Convert an ISO time into a JS Date object

---
From [John Resig's Pretty Date script](http://ejohn.org/blog/javascript-pretty-date/)

    var date = new Date( ( isoTime || '').replace(/-/g,'/').replace(/[TZ]/g,' '));

[ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) time formats look like `2010-09-24T03:05Z`