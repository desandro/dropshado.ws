---

title: git config --get remote.origin.url
type: regular
tags: git
format: markdown
generator: Tumblr Gem

layout: default

---

Here's a faster way to get the URL of a remote git repo, using [`git config`](http://kernel.org/pub/software/scm/git/docs/git-config.html):

    git config --get remote.origin.url
    # >> git@github.com:desandro/dropshado.ws.git

Or to get list all the options of local `.git/config`:

    git config --local -l
    # >> core.repositoryformatversion=0
    # >> core.filemode=true
    # >> core.bare=false
    # >> core.logallrefupdates=true
    # >> core.ignorecase=true
    # >> remote.origin.url=git@github.com:desandro/dropshado.ws.git
    # >> remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
    # >> branch.gh-pages.remote=origin
    # >> branch.gh-pages.merge=refs/heads/gh-pages

See previous method [`git remote show origin`](http://dropshado.ws/post/4964571254/git-remote-show-origin).