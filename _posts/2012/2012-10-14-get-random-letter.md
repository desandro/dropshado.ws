---

title: Get random letter
tags: [ JavaScript, js, hasfiddle ]

layout: default

id: '33612371490'
---

Here's a helper function that uses [base 36](http://en.wikipedia.org/wiki/Base_36) numeral system to return a random letter _a_ to _z_. 

    function getRandomLetter() {
      var rand26 = Math.floor( Math.random() * 26 );
      return ( ( 10 + rand26 ) / 36 ).toString(36).substring(2);
    }

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/desandro/u2WgV/embedded/result,js" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>
