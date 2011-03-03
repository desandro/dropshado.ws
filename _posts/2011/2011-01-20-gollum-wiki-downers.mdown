---
layout: default
type: regular
tags: git, github
format: markdown
title: Gollum wiki downers

---
I've been fiddling with a [Gollum wiki](http://github.com/github/gollum#readme) and found a couple disappointments running locally.

 + Changes must be committed in the git repo before they are seen in the wiki. 
 + Gollum only runs from master branch. [Issue 94](http://github.com/github/gollum/issues/issue/94). Coupled with the previous issue, this prevents any way to preview changes.  If you wish to view changes, you _must_ commit to the master branch.
 + If the Home page is missing, no table of contents will be automatically generated (as 
they are on GitHub). [Issue 74](http://github.com/github/gollum/issues/issue/74)
 + Sidebars are not added to pages (as they are on GitHub). [Issue 97](http://github.com/github/gollum/issues/issue/97)

These issues are all bummers considering how slick [Jekyll](https://github.com/mojombo/jekyll) is.