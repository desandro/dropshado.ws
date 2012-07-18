---

title: Pretty git log
type: regular
tags: [ git, TJ Holowaychuk ]
format: markdown
generator: Tumblr Gem

layout: default

---

[TJ Holowaychuk featured a pretty git log alias](http://tjholowaychuk.com/post/26904939933/git-extras-introduction-screencast), taking advantage of [`git log --pretty`](http://git-scm.com/docs/git-log#_commit_formatting). I am now rocking:

    alias glog="git log --format='%Cgreen%h%Creset %C(cyan)%an%Creset - %s' --graph"

![git log --pretty](http://i.imgur.com/SZyNd.png)
