---
layout: default
type: regular
tags: terminal
format: markdown
title: Terminal alias for hiding/showing hidden files

---
I've previously been using [Houdini](http://www.macupdate.com/info.php/id/26729/houdini) for toggling hidden file visibility. But now that I have the Terminal perpetually open, might as well make an alias for it.

    alias showhidden="defaults write com.apple.finder AppleShowAllFiles TRUE; killall Finder"
    alias hidehidden="defaults write com.apple.finder AppleShowAllFiles FALSE; killall Finder"
