---
layout: default
type: regular
tags: terminal
format: markdown
title: Open current folder in Terminal with application

---
[TextMate Manual](http://manual.macromates.com/en/using_textmate_from_terminal.html#shell_terminal):

> Mac OS X comes with an [`open`](http://developer.apple.com/documentation/Darwin/Reference/ManPages/man1/open.1.html) shell command which can be used to simulate a double click from within Terminal. It can also perform an _Open With..._ operation by use of the `-a` argument, e.g.: `open -a TextMate .` will open the current folder in TextMate (as a scratch project).

Found this when I was looking for way to open the current folder in Terminal with GitX.

    open -a GitX .