---

title: Maruku self-closing tags
type: regular
tags: Jekyll, Maruku
format: markdown
generator: Tumblr Gem

layout: default

---

I've got a couple sites running on Jekyll / GitHub Pages, and I've been running into issues with Maruku automatically converting HTML tags without content into self closing tags. So if I have an example where I'm using empty divs like

    <div id="container">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>

Maruku will generate

    <div id="container">
      <div class="item" />
      <div class="item" />
      <div class="item" />
    </div>

This is especially problematic for embedding `iframe` content like jsFiddle embeds, or Video.

    <iframe style="width: 100%; height: 300px"
      src="http://jsfiddle.net/desandro/v7x55/embedded/"></iframe>
    
As the tag never gets closed, it throws off the entire DOM.  Self-closing divs seriously break Firefox.

My solution has been inserting an extra space in between opening and closing tag. 

    <div id="container">
      <div class="item"> </div>
      <div class="item"> </div>
      <div class="item"> </div>
    </div>

    <iframe style="width: 100%; height: 300px"
      src="http://jsfiddle.net/desandro/v7x55/embedded/"> </iframe>

Maruku preserves the whitespace and the tags remain separate.