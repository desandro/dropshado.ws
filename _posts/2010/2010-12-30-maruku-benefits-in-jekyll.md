---
layout: default
type: regular
tags: maruku, jekyll
format: markdown
title: Maruku benefits in Jekyll

---
Right now I'm working through the documentation of the new super-Masonry plugin. I'm using [Jekyll](http://jekyllrb.com) to generate the pages and the examples, in the same manner that I did for [Intro to CSS 3D Transforms](http://desandro.github.com/3dtransforms). Jekyll has [Maruku](http://maruku.rubyforge.org/maruku.html) built in, which comes with several benefits.

* Automatic id attributes added to headers. i.e. [Introduction - Current Support Environment](http://desandro.github.com/3dtransforms/docs/introduction.html#current_support_environment)
* [Dynamic generation of table of contents](http://maruku.rubyforge.org/maruku.html#toc-generation). Note that you will [require an h1 tag](http://webiva.lighthouseapp.com/projects/38599/tickets/5-maruku-table-of-contents-not-generating-without-extra-h1-tag)
* [Meta-data syntax](http://maruku.rubyforge.org/proposal.html) for adding id and class attributes to tags