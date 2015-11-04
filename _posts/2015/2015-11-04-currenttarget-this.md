---

title: event.currentTarget vs. this
tags: [ jQuery, JavaScript ]

layout: default

id: '132543858377'
---

You can use [`event.currentTarget` in place of `this` inside jQuery event handlers](https://api.jquery.com/event.currentTarget/)

    $('.button').on( 'click', function( event ) {
      console.log( event.currentTarget === this ); // true
    });

While `this` inside event handlers has become commonplace, I feel the `event.currentTarget` pattern is more obvious. It is more compatible working with other patterns that use `this` differently.
