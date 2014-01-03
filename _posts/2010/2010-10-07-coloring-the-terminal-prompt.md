---
layout: default
type: regular
tags: terminal, bash
format: markdown
title: Coloring the Terminal prompt

---
Along with being the file to store your Terminal aliases, `~/.profile` also allows you to color the Terminal prompt. This article has the particulars: [BASH Shell change the color of my shell prompt under Linux or UNIX](http://www.mactricksandtips.com/2008/10/customizing-the-mac-terminal-bash-prompt.html)

First take a look at the current prompt with `echo $PS1`. It should return with `\h:\W \u\$ `. The articles above detail what those variables represent, and it translates to _host:directory username$_. Color syntax starts with `[\e[0;31m\]` and ends with `\[\e[m\]`. The color code itself is  `0:31`, where `31` is the color (in this case red) and `0` being the equivalent of font-weight (bold is `1`).

I am currently rocking:

    export PS1="\[\e[0;31m\]\h:\[\e[m\]\[\e[0;34m\]\W\[\e[m\] \[\e[0;30m\]\u\[\e[m\]\[\e[0;33m\]\$\[\e[m\] "

Which is the same _host:directory username$_ but now _red:blue darkgray_ and a beige `$`.

![Colored BASH Terminal](http://media.tumblr.com/tumblr_l9xrs1Pzsw1qan2hw.png)

**UPDATE 16 Nov 2010** Revised opening and closing tags to `\[\e[0;31m\]` and `\[\e[m\]`. Previous version didn't close tags properly and messed up line breaks.  Removed link to erroneous article.