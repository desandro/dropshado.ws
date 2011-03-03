---
layout: default
type: regular
tags: js, Ryan Stout
format: markdown
title: oppositeOf object

---
Clever pattern by [Ryan Stout](http://agileproductions.com) to get the opposite value for strings.

    var oppositeOf = {
      'up' : 'down',
      'down' : 'up',
      'left' : 'right',
      'right' : 'left',
      'black' : 'white',
      'white' : 'black'
    };
    
    oppositeOf['left'];
    // => 'right'

[Phil Dokas](https://twitter.com/#!/pdokas/status/25293523343380480):

> ...That's the memento design pattern. That's how Undo in OS X is implemented :)