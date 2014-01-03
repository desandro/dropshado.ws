---

title: Function.prototype.bind
type: regular
tags: JavaScript, Modernizr, hasfiddle
format: markdown
generator: Tumblr Gem

layout: default

---

[Modernizr 2.5](http://www.modernizr.com/news/modernizr-25) added lots of robust feature detects and tests, but perhaps its most convienent feature is the addition of a [`Function.prototype.bind` polyfill](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind). In short, `.bind()` allows you to set `this` within a function.

As I employ prototypal objects and class methods a lot, I'm using `.bind()` a bunch. It's helpful within `setTimeout`:

    function ClassAct() {
      this.generation = Math.floor( Math.random() * 10 + 4 );
      this.name = 'James J. Jones, the ' + this.generation + 'th.';
    }
    
    ClassAct.prototype.sayHello = function() {
      console.log('Gday! I am ' + this.name );
    };
    
    // old, ugly way
    ClassAct.prototype.sayDelayedHello = function() {
      // can't use `this` in here, because it will be set to the `window` object
      // have to hack it with local `_this` var
      var _this = this;
      setTimeout( function() {
        _this.sayHello();
      }, 1000 );
    };
    
    // with Function.prototype.bind()
    ClassAct.prototype.sayDelayedHello = function() {
      setTimeout( this.sayHello.bind( this ), 1000 );
    };

Or, you could use it for quick and easy event handling:

    function ClassAct() {
      // say hello on click
      // without .bind( this ), `this` in sayHello() will not be ClassAct instance
      document.addEventListener( 'mousedown', this.sayHello.bind( this ), false );
    }

See it in action: here's a fiddle to compare using `.bind()` within class methods: [Without Function.prototype.bind](http://jsfiddle.net/desandro/ALMph/) and [with Function.prototype.bind](http://jsfiddle.net/desandro/ALMph/1).

<iframe style="width: 100%; height: 400px" src="http://jsfiddle.net/desandro/ALMph/1/embedded/js,result" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>