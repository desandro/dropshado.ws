---

title: Ignore initial popstate
type: regular
tags: history, js
format: markdown
generator: Tumblr Gem

layout: default

---

Within Mike Taylor's demo for [Introducing the HTML5 History API](http://dev.opera.com/articles/view/introducing-the-html5-history-api/), you'll find this note:

    window.addEventListener('popstate', function(e){
     // be nice to Chrome, the spec changed
     // and they haven't caught up yet
     // http://code.google.com/p/chromium/issues/detail?id=63040
     if (history.state){
       self.loadImage(e.state.path, e.state.note);
     }
    }, false);

Per [Chromium issue 63040](http://code.google.com/p/chromium/issues/detail?id=63040), Chrome dispatches a `popState` event on initial page load. This was okay when HTML5 history was first introduced, but then the spec changed. It's been over a year, and the bug still persists.

The easiest hack/solution, as [proposed in comment 11](http://code.google.com/p/chromium/issues/detail?id=63040#c11), is to add the `popstate` listener right after the initial page load, in a `setTimeout`.

    setTimeout( function() {
      window.addEventListener( 'popstate', myPopStateHandler, false );
    }, 10 );

I'm weary of throwing a `setTimeout` in for a resolution, always seems like a kludge. But for now, hey it works.
