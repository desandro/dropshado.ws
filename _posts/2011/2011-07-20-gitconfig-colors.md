---

title: .gitconfig colors
type: regular
tags: git, Terminal, John Schulz
format: markdown
generator: Tumblr Gem

layout: default

---

Aw yeah, another command-line coloring post!

[John Schulz pointed me](https://twitter.com/jfsiii/status/93677944110723072) to this [git cheat sheat](http://cheat.errtheblog.com/s/git). Right up front it provides the settings in [~/.gitconfig](http://kernel.org/pub/software/scm/git/docs/git-config.html) to color git command output like `git diff`, `git status`, and `git branch`.  Here's what I'm rocking:

    [core]
      quotepath = false
      whitespace=fix,-indent-with-non-tab,trailing-space,cr-at-eol
    [color]
      ui = true
    [color "branch"]
      current = yellow black
      local = yellow
      remote = magenta
    [color "diff"]
      meta = yellow bold
      frag = magenta bold
      old = red reverse
      new = green reverse
      whitespace = white reverse
    [color "status"]
      added = yellow
      changed = green
      untracked = cyan reverse
      branch = magenta

Which looks like:

![color git commands](http://i.imgur.com/AoyWC.png)