---

title: Tumblr / GitHub Pages bridge
type: regular
tags: Tumblr, GitHub Pages, Jekyll
format: markdown
generator: Tumblr Gem

layout: default

---

Over the past couple weeks I've tried to build a Tumblr / GitHub Pages bridge. It ain't perfect, but I'm happy with the result. See [http://desandro.github.com/dropshado.ws](http://desandro.github.com/dropshado.ws) or view the source [dropshado.ws on GitHub](https://github.com/desandro/dropshado.ws).

## Why bother

I like Tumblr because:

+ tags
+ hosted externally
+ simple templating

I don't like Tumblr because:

+ Have to use web interface to post
+ constant outages

If I had to do this blog all over again, I'd use [GitHub Pages](http://pages.github.com) because:

+ lives in TextMate
+ Already integrated into GitHub

I discovered the [Tumblr Gem](http://mwunsch.tumblr.com/post/441371943/tumblr-rb) which allows me to post content via the command line. So all new content can live on my hard drive.

Now when I publish a post, I run the `tumblr` Terminal command on a new file.  Me likes.

## Tumblr API

This prompted me to retrofit all the previous content and back it up locally. There is a [Tumblr Backup desktop app](http://www.tumblr.com/goodies), but this generates HTML pages, as opposed to exporting raw content and data.

To get the old content, I built a [simple page that pulls in the data](http://desandro.github.com/dropshado.ws/dev/api) from the [Tumblr API](http://www.tumblr.com/docs/en/api).

    <script src="http://dropshado.ws/api/read/json?filter=none"></script> 

This content was formatted so I could copy / paste it into a new file. Certainly a hack, definitely not the best way to do it, but it worked for me.

## Building the Jekyll twin

Since the [format of plaintext post for the Tumblr Gem](http://mwunsch.github.com/tumblr/tumblr.5.html) needs to be in YAML, it made perfect sense to generate the site using Jekyll, and then serve it on GitHub Pages. Benefits being:

+ View site locally
+ Preview new posts locally
+ Have a back-up of content when Tumblr is hungover and MIA
+ Host asset files on GitHub Pages

The result works, but it isn't quite a flawless match:

+ Markdown content like link description or quote content doesn't get parsed as Markdown because the Tumblr Gem needs this content to be in the YAML front matter.
+ Tags are broken

For now, I'll stick with this gitted Tumblr workflow so I can be productive posting productivity posts.  Eventually, I'd like to make the switch to GitHub Pages, but it ain't gonna be easy because GitHub Pages does not support any mechanism for 301 redirects. Nor does Jekyll have an easy solution for tags.