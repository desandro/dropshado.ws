---

title: Returning to stop the function
type: regular
tags: js
format: markdown
generator: Tumblr Gem

layout: default

---

I've been using `return` more to stop logic inside a function. See [PPK: Returning to stop the function](http://www.quirksmode.org/js/function.html#link7).

    // within conditional
    function doStuff() {
      var myCondition = checkCondition();
      if ( !myCondition ) {
        // do
        // lots
        // of
        // stuff
      }
    }
    
    // proceed if condition is met
    function doStuff() {
      var myCondition = checkCondition();
      // don't proceed if not myCondition
      if ( !myCondition ) {
        return;
      }
      // do
      // lots
      // of
      // stuff
    }

The benefit is that the subsequent code isn't all held within the conditional, thus breaking it out of an unnecessary nest... like an newborn eagle on its first flight.