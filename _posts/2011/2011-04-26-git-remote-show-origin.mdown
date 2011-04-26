---

title: git remote show origin
type: regular
tags: git
format: markdown
generator: Tumblr Gem

layout: default

---

`git remote show origin` displays info for your remote origin repo. I typically use this when I want to get the URL or the remote repo. Here's what I get in my [HTML5 Boilerplate](https://github.com/paulirish/html5-boilerplate) repo:

    $ git remote show origin
    warning: more than one branch.master.remote
    * remote origin
      Fetch URL: git://github.com/paulirish/html5-boilerplate.git
      Push  URL: git://github.com/paulirish/html5-boilerplate.git
      HEAD branch: master
      Remote branches:
        master   tracked
        mobile   tracked
        stripped tracked
      Local branch configured for 'git pull':
        master merges with remote master
                  and with remote master
      Local ref configured for 'git push':
        master pushes to master (local out of date)
