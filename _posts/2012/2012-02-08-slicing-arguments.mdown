---

title: Slicing arguments
type: regular
tags: JavaScript, js. hasfiddle
format: markdown
generator: Tumblr Gem

layout: default

---

In the [jQuery Plugins Authoring tutorial](http://docs.jquery.com/Plugins/Authoring), Ralph Holzmann details an intriguing pattern for [plugin methods](http://docs.jquery.com/Plugins/Authoring#Plugin_Methods):

    var args = Array.prototype.slice.call( arguments, 1 );
    return methods[ method ].apply( this, args );
    // (edited for clarity)

As the tutorial explains, this pattern is what enabled jQuery UI plugins to have multiple methods. Indeed, If you look [deep within the coils of jQuery UI widget factory](https://github.com/jquery/jquery-ui/blob/a3abb3b5f/ui/jquery.ui.widget.js#L153), you'll find it there as well:

    var args = slice.call( arguments, 1 );
    instance[ options ].apply( instance, args );
    // (again, edited for clarity)

I had thought of this argument-slicing method pattern just as another bit of JavaScript witch-craft that seemed to work, but I had no comprehension of why.

Today, I'm working on a sort of particle/field class and this pattern finally clicked. Here's what I'm working with

    // field has multiple particles
    function Field() {
      this.particles = [];
      for ( var i=0; i < max; i++ ) {
        this.particles.push( new Particle( i ) );
      }
    }
    
    // particles have methods
    function Particle( index ) {
      this.index = index;
    }
    
    Particle.prototype.logIndex = function() {
      console.log( this.index );
    }

If I want `logIndex` on each particle in a field, I would have to loop through each particle and call its method.

    Field.prototype.logParticleIndexes = function() {
      for ( var i=0, len=this.particles.length; i < len; i++ ) {
        this.particles[i].logIndex();
      }
    }

This is all fine and well when you only have a couple methods in a field that have to iterate over each particle. But you could create another method that was more flexible, and trigger a method passed in from an argument.

    Field.prototype.eachParticleDo = function( methodName ) {
      for ( var i=0, len=this.particles.length; i < len; i++ ) {
        this.particles[i][ methodName ]();
      }
    }
    
    myField.eachParticleDo('logIndex');

But if the particle has method that require arguments, we'll need a way to pass those arguments in.

    Particle.prototype.setColor = function( color ) {
      this.elem.style.backgroundColor = color;
    };

This is where argument-slicing comes in.

    Field.prototype.eachParticleDo = function( methodName ) {
      // pass in any other arguments after `methodName`
      var args = Array.prototype.slice.call( arguments, 1 );
      var particle;
      for ( var i=0, len = this.particles.length; i < len; i++ ) {
        particle = this.particles[i];
        // first argument, particle, is what `this` will be inside function
        // second argument is the arguments for that function
        particle[ methodName ].apply( particle, args );
      }
    };
    
    myField.eachParticleDo( 'setColor', 'blue' );

Let's break down what's going on up there. In order to get any arguments after the first one, `methodName`, we need to remove `methodName` from `arguments`. With a normal array, we could use `ary.slice( 1 )`. But because `arguments` is a bizarre array-like object, we need to use an equally bizarre method to slice it. For more on this, See Sebastiano Armeli's [Understanding Array.prototype.slice.apply(arguments) in JavaScript](http://blog.sebarmeli.com/2010/11/12/understanding-array-prototype-slice-applyarguments/).  

Now that the arguments are in a proper array, they can be used as the arguments with `.apply()`. Per [flatline on Stack Overflow What is the difference between call and apply?](http://stackoverflow.com/a/1986909/182183):

> The main difference is that `apply` lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly.

Nice. Here's a quick particle demo with `eachParticleDo` in place.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/desandro/mNtrc/embedded/result,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

[See fiddle: Particle field with .eachParticleDo](http://jsfiddle.net/desandro/mNtrc/)

Try opening up [the raw fiddle](http://jsfiddle.net/desandro/mNtrc/show/light/) with your console and enter.

    myField.eachParticleDo( 'setColor', 'red' )

    