---

title: Git submodules
type: regular
tags: git, Mathias Bynens
format: markdown
generator: Tumblr Gem

layout: default

---

I think I'm ready to discuss [Git submodules](http://book.git-scm.com/5_submodules.html). My chronic problem with submodules is that I don't use them often enough to understand how they work. From what I gather, you can do a lot more than what I'll cover, but I'm only interested in just placing a repo in a repo.

The benefit of submodules is that you can reduce duplicate code. Instead of copying files from one repo into another, Git can manage this for you. nclud.com v3 currently has 6 submodules. These are helpful for pulling changes to external repos -- in our case [jquery-smartresize](https://github.com/louisremi/jquery-smartresize) and [jquery.form.js](https://github.com/malsup/form).

I've been breaking out re-useable bits of code into smaller repos and gists. So I've got this [requestAnimationFrame polyfill](https://gist.github.com/1866474), and I want to include it in another project, [Inflickity](https://github.com/nclud/inflickity). This can be done with two `git submodule` commands:

    git submodule add git://gist.github.com/1866474.git request-animation-frame
    git submodule update --init

This will add the submodule, then pull in the appropriate commit. I'll be able to use `request-animation-frame/requestanimationframe.js` in the [Inflickity demo](http://nclud.github.com/inflickity/).

Both those commands trigger a change in the repo, changing `.gitmodules` and reference to the submodule repository.  This change will require a commit.

If anyone else clones the repo, they'll have to update and init the submodules as well.

    git clone https://github.com/nclud/inflickity.git
    cd inflickity
    git submodule update --init

**EDIT** Or better yet, [clone the repo and pull in submodules with `git clone --recursive`](http://stackoverflow.com/questions/3796927/git-clone-submodule/4438292#4438292) (thx [Mathias](https://twitter.com/mathias/status/184969937364844544)):

    git clone --recursive https://github.com/nclud/inflickity.git

Now, the crazy-pants part. Per the [Git reference](http://schacon.github.com/git/git-submodule.html), `git submodule update`...

> will make the submodules HEAD be detached

I think this is where I usually lose control of what was happening with my submodules. The submodule's repository has checked out the specific commit, and is not on the master branch as I would have expected. For example, let's try cloning the Inflickity repo and getting that submodule working.

    ~/projects $ git clone https://github.com/nclud/inflickity.git
    Cloning into inflickity...
    ...
    Unpacking objects: 100% (87/87), done.
    ~/projects $ cd inflickity
    ~/projects/inflickity $ git submodule update --init
    Submodule 'request-animation-frame' (git://gist.github.com/1866474.git) registered for path 'request-animation-frame'
    Cloning into request-animation-frame...
    ...
    Submodule path 'request-animation-frame': checked out 'db50266cd98d2d46277fd54d24cfd37766476a00'
    ~/projects/inflickity $ ls request-animation-frame/
    requestanimationframe.js

Great, so the contents of the submodule are there. But what happens if we check the status of that submodule repository:

    ~/projects/inflickity $ cd request-animation-frame/
    ~/projects/inflickity/request-animation-frame $ git status
    # Not currently on any branch.
    nothing to commit (working directory clean)

Not on any branch. Darnit. This will prevent the basic `git pull` from working, so you'll have to specify remote and branch.

    ~/projects/inflickity/request-animation-frame $ git pull origin master
    From git://gist.github.com/1866474
     * branch            master     -> FETCH_HEAD
    Already up-to-date.

`git submodule foreach` allows you to run a shell command for each submodule, which is ideal for pulling all submodules.

    ~/projects/inflickity $ git submodule foreach 'git pull origin master'
    Entering 'request-animation-frame'
    From git://gist.github.com/1866474
     * branch            master     -> FETCH_HEAD
    Already up-to-date.

Just like when adding submodules, if there are any new commits that were pulled for a submodule, you'll need to track that change in a commit for the parent repository.

In review, my three go-to git submodule commands are:

    # starts it off
    git submodule update --init
    # for anyone else cloning
    git clone --recursive my-repo.git
    # pull in any fresh commits
    git submodule foreach 'git pull origin master'

This keeps me in the parent repo, and I don't get confused popping in and out of submodules repo.
