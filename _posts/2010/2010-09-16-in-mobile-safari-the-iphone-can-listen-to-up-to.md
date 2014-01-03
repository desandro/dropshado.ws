---
layout: default
type: regular
tags: iOS, Mobile Safari, js
format: markdown
title: iOS Touch count

---
In Mobile Safari, the iPhone can 'listen' to up to 5 touches.  The iPad's limit is 11 (testing 4.2 beta).

I speculate that iPad maxes out at 11 instead of 10, for any weird issue where you already have all 10 figures touching and you move one extra quick and it registers as another 'touchstart' event.