---

title: jQuery event trigger namespace
tags: [ jQuery, events, JavaScript ]

layout: default

id: '109695906602'
---

[jQuery event namespaces](http://css-tricks.com/namespaced-events-jquery/) allow you to separate event listeners.

    // bind click listeners
    $element.on( 'click.alpha', function() {
      console.log('Alpha click');
    });
    $element.on( 'click.beta', function() {
      console.log('Beta click');
    });
    // unbind alpha click listener only
    $element.off('click.alpha');

**EDIT** **The rest of this post is false** I had thought I verified this, but alas, no. Triggering with a namespace will not trigger that event _without_ the namespace.

---

They can also be used when triggering events, to specify where that event came from.

    $element.trigger('click.pluginName')

I'm using namespace triggering in [Flickity](http://flickity.metafizzy.co), as a way to distinguish Flickity's `select` event from the [native `select` event](https://developer.mozilla.org/en-US/docs/Web/Events/select).

    // create jQuery event from original event object
    var $event = jQuery.Event( event );
    // set type, like select.flickity
    $event.type = type + '.flickity';
    this.$element.trigger( $event, args );
