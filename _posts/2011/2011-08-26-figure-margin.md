---

title: figure margin
type: regular
tags: HTML5, CSS
format: markdown
generator: Tumblr Gem

layout: default

---

`<figure>` elements a good amount of margin from Firefox and WebKit's user agent styles.

    figure {
      display: block;
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
      -webkit-margin-start: 40px;
      -webkit-margin-end: 40px;
    }

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/desandro/wRLXv/embedded/result,html,css"> </iframe>

See fiddle [figure margin](http://jsfiddle.net/desandro/wRLXv)

This is a new style within the past year, as [3dtransforms](https://desandro.github.com/3dtransforms) use `<figure>`s for the panels of the 3D objects. The default margin [was](https://github.com/desandro/3dtransforms/commit/8985a16b50f63a687d15f8522e09c608bac703ff) offsetting all the panels.

[normalize.css already has the situation under control](https://github.com/necolas/normalize.css/blob/aec13957659fae98f3de509a07408a98e930960a/normalize.css#L281-292), setting `figure { margin: 0; }`. 