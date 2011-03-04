---
layout: default
type: regular
tags: console, js
format: markdown
title: console.time()

---
> The low-fi approach is to call `console.time("timing foo")` before the code you want to measure, and then `console.timeEnd("timing foo")` afterwards. Firebug will then log the time that was spent in between.

Easy way to measure performance, rather than invoking `console.profile()`. Also works with the WebKit Inspector.