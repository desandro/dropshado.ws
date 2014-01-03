---

title: jQuery.data
type: regular
tags: jQuery
format: markdown
generator: Tumblr Gem

layout: default

---

I've been familiar with [jQuery's `data` method](http://api.jquery.com/data/) for a while now. It's awesome, allowing you to get and set data with a jQuery object.

    $('body').data('foo', 52);
    $('body').data('bar', { myType: 'test', count: 40 });
    
    $('body').data('foo'); // 52
    $('body').data(); // {foo: 52, bar: { myType: 'test', count: 40 }}

It's especially useful within [jQuery plugins](http://docs.jquery.com/Plugins/Authoring#Data), providing a mechanism to save the plugin's state. 

While looking over [jQuery UI plugin bridge](https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.widget.js), I found they were using [`$.data()`](http://api.jquery.com/jQuery.data/) instead of `$.fn.data`.  Where as `$.fn.data` is a method for jQuery objects like  `$('#elem').data('foo', 52)`, `$.data()` is a utility function that uses an element as one of its arguments.

    $.data( document.body, 'foo', 52);
    $.data( document.body, 'bar', { myType: 'test', count: 40 });
    
    $.data( document.body, 'foo'); // 52
    $.data( document.body ); // {foo: 52, bar: { myType: 'test', count: 40 }}

Using `$.data()` can yield better much performance as you don't have to wrap an element in a jQuery object. [Testing on jsPerf](http://jsperf.com/jquery-data-vs-jqueryselection-data), my results had `$.data()` performing 5x faster than `$.fn.data()`. Within [Isotope](http://isotope.metafizzy.co), making this change is boosting performance of sorting by 2x.