---

title: Trigger event methods
type: regular
tags: js, hasfiddle
format: markdown
generator: Tumblr Gem

layout: default

---

Looking into triggering events without jQuery. Turns out you can just use some events as methods, for example [`.click()`](https://developer.mozilla.org/en/DOM/element.click) or  [`.blur()`](https://developer.mozilla.org/en/DOM/element.blur). I'd love to find a listing reference for these methods, but haven't found one yet.

I'm using `.blur()` to dismiss the iOS keyboard once a text input has been focused.

    var input = document.getElementById('input'),
        button = document.getElementById('button'),
        onClick = function(){
          input.blur();
        };
    
    button.addEventListener( 'click', onClick, false);

[**See fiddle:** trigger blur to dismiss iOS keyboard](http://jsfiddle.net/desandro/hQJ33/1/embedded/result)