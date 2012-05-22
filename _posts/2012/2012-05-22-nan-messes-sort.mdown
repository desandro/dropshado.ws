---

title: NaN messes with sorting
type: regular
tags: javascript, js
format: markdown
generator: Tumblr Gem

layout: default

---

I'm building some dynamic table sorting. Looks like `NaN` values are messing with the sorting. For the sake of the example, let's use an array of number-like strings. Try pasting this in your console.

    (function() {
      var numbers = '19 26 63 twelve 83 106 hundred zero 12'.split(' ');
      return numbers.sort();
    })();
    // ["106", "12", "19", "26", "63", "83", "hundred", "twelve", "zero"]

The resulting array is as expected, since the values are still strings.

Let's parse those values as integers, using a compare function in [sort](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/sort).

    (function() {
      var numbers = '19 26 63 twelve 83 106 hundred zero 12'.split(' ');
      function parse( value ) {
        return parseInt( value );
      }
      return numbers.sort( function( a, b ) {
        return parse( a ) < parse( b );
      });
    })();
    // ["63", "26", "19", "twelve", "106", "83", "hundred", "zero", "12"]

This looks just random. I believe what's happening is how a `NaN` value from `parseInt('foo')` messes with the comparison. Comparing any number with `NaN` will return `false`.

    14 > NaN
    // false
    NaN > 14
    // false

Oh JavaScript, [you so cray](http://wtfjs.com/).

My solution is to account for `NaN` in the parser.

    (function() {
      var numbers = '19 26 63 twelve 83 106 hundred zero 12'.split(' ');
      function parse( value ) {
        value = parseInt( value );
        value = isNaN( value ) ? Infinity : value;
        return value;
      }
      return numbers.sort( function( a, b ) {
        return parse( a ) > parse( b );
      });
    })();
    // ["12", "19", "26", "63", "83", "106", "twelve", "hundred", "zero"]

You don't have to munge `NaN` as `Infinity`, but this at least treats the value as a number that can be properly compared.
