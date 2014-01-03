---
layout: default
type: regular
tags: jQuery, hasfiddle
format: markdown
title: Removing a jQuery object from another jQuery object

---
Working on Isotope, I have a scenario where I need to remove a jQuery object from another jQuery object.  Item elements are cached within the plugin's instance. If the user needs to remove those elements from the DOM, they need to also remove them from the cache.

The solution is to use the `.not` method.

    // removes $b from $a
    $a = $a.not( $b )

You need to assign the result of the statement back to the original jQuery object. Using just `$a.not( $b )` will not affect `$a`.

See also [How to remove an element from jQuery object? - Stack Overflow](http://stackoverflow.com/questions/3108479/how-to-remove-an-element-from-jquery-object#answer-3108550)

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/desandro/KCpFp/embedded/js,html,css,result"> </iframe>

[Remove items from jQuery object fiddle](http://jsfiddle.net/desandro/KCpFp/)