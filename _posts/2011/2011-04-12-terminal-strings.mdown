---

title: Strings in terminal
type: regular
tags: Terminal, bash
format: markdown
generator: Tumblr Gem

layout: default

---

I've finally clued in to setting and using simple strings within Terminal. Set a string:

    name='David DeSandro'

No spaces around the `=`. Quotes are required if your string has spaces. Reference it with `$`

    echo $name
    # will output `David DeSandro`

For example, when [creating a new post](http://dropshado.ws/post/4067059374/tumblr-github-pages-bridge), I have to reference the same long filename several times.

    dropfile='_posts/2011/2011-04-12-terminal-strings.mdown'
    mate $dropfile
    git add $dropfile
    tumblr $dropfile
