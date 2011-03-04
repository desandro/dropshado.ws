---

title: getTimeFromMillis
type: regular
tags: js
format: markdown
generator: Tumblr Gem

layout: default

---

I needed a function that converted an integer of milliseconds into a string of a human-readable time.  This is based off the multiple responses from [StackOverflow: How to convert milliseconds into human readable form?](http://stackoverflow.com/questions/175554/how-to-convert-milliseconds-into-human-readable-form)

    // converts milliseconds to '3:45' or if hours > 0, '2:01:23'
    getTimeFromMillis = function( ms ) {
      var seconds = ~~( ( ms / 1000 ) % 60 ),
          minutes = ~~( ( ms / ( 1000 * 60 ) ) % 60 ),
          hours   = ~~( ( ms / ( 1000 * 60 * 60 ) ) ),
          twoDigit = function ( n ) {
            return n < 10 ? '0' + n : n;
          },
          seconds = ':' + twoDigit( seconds );

      return hours > 0 ? hours + ':' + twoDigit( minutes ) + seconds : minutes + seconds;

    };

It's up on Git, so please fork, revise and put me in my place.