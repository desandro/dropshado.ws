---
layout: default
type: regular
tags: Opera, CSS, transforms
format: markdown
title: Opera Transform Issues

---
Couple issues with Opera's current implementation of CSS transforms. I'm looking at this with version 10.62

- Re-renders texts with poor anti-aliasing
- A space in the value of transform functions will be thrown. So `scale( 0.5)` will not work, but `scale(0.5)` will.  This goes for any transform function, `translate()`, `rotate()`, etc.

## Live example:

<p style="-o-transform: translate( 20px, 10px)"> <code>-o-transform: translate( 20px, 10px)</code> <strong>Value function has leading space. Transform will not be recognized.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

<p style="-o-transform: translate(20px, 10px)"> <code>-o-transform: translate(20px, 10px)</code> <strong>No leading space. Transform re-renders text with poor anti-aliasing.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

## Screenshot:

![](http://media.tumblr.com/tumblr_l9wh7iRKk21qan2hw.png)
