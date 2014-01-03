---

title: jQuery version in jQuery.fn.jquery
type: regular
tags: jQuery
format: markdown
generator: Tumblr Gem

layout: default

---

Get the version of jQuery

    jQuery.fn.jquery
    // >> '1.6.1'

It's bizarre that you can get this via a jQuery method. It allows you to get it as a property on any jQuery object.

    $(document).jquery
    // >> '1.6.1'
