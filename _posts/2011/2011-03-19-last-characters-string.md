---

title: Getting last characters from a string
type: regular
tags: js
format: markdown
generator: Tumblr Gem

layout: default

---

Using [`.slice()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/slice) with a negative index will return characters from the end of the string.

    'alphabet'.slice(-3)
    // returns "bet"

I'm using it to grab a file extension from an image URL. A regular expression is more reliable and flexible, but this is quick and easy.

    