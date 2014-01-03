---

title: Coloring remote command line prompts
type: regular
tags: ssh, bash, terminal
format: markdown
generator: Tumblr Gem

layout: default

---

Picking up on a running theme on the dropshado.ws, I gots to have my [command line prompts](http://dropshado.ws/post/1264042377/coloring-the-terminal-prompt) [looking fresh](http://dropshado.ws/post/3224621879/bash-it). Locally, I'm now using [bash-it](https://github.com/revans/bash-it), with its killer theming engine by [John Schulz](https://twitter.com/jfsiii) to make it happen.

Just recently I realized that I can style my prompt on my remote server when I SSH. Here's what I added to `~/.bash_profile`.

    PS1="\[\e[0;32m\]\u@\h \[\e[0;34m\]\w \[\e[0;30m\]# \[\e[39m\]"

Which looks like

<p style="background: black; color: white; padding: 5px;"><code><span style="color: #FF5">username@server</span> <span style="color: #55F">~/path/to/dir</span> <span style="color: #666"># </span> writing sweet commands</code></p>