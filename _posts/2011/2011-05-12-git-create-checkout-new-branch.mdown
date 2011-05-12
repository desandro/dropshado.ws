---

title: Git create and checkout new branch
type: regular
tags: git
format: markdown
generator: Tumblr Gem

layout: default

---

Use the `-b` flag with [`git checkout`](http://www.kernel.org/pub/software/scm/git/docs/git-checkout.html) to create and checkout a new branch in one command.

    # old way
    git branch newbranch
    git checkout newbranch
    
    # new way
    git checkout -b newbranch

