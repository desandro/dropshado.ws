---

title: Inspecting DOM object properties
type: regular
tags: js
format: markdown
generator: Tumblr Gem

layout: default

---

I like taking a peek at native DOM objects like `Element` and `Node` using the console's [`dir`](http://getfirebug.com/wiki/index.php/Command_Line_API) function.

    dir( Element )
    
Then I crack open `prototype` see all the base properties and methods that native constructor has.

![Element prototype](http://i.imgur.com/yW1av.png)

I discovered [`Element.contains()`](http://jsfiddle.net/desandro/KmX6T/1/) this way.



