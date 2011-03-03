---
layout: default
type: regular
tags: CSS
format: markdown
title: attr funtion

---
Discovered the `attr()` function via [Divya Manian superb CSS Vocabulary article](http://nimbupani.com/css-vocabulary.html).

## CSS2

[In CSS2](http://www.w3.org/TR/CSS2/generate.html#propdef-content), you can use `attr()` function to generate content inside `:before` and `:after` pseudo-elements.

    <style>#attr-fn-demo:after { content: attr(id); background: yellow; }</style>

    <p id="attr-fn-demo">The id of this element is: </p>

<style>#attr-fn-demo:after { content: attr(id); background: yellow; }</style>

<p id="attr-fn-demo">The id of this element is: </p>

## CSS3

[The CSS3 implementation takes it to a whole new level](http://www.w3.org/TR/css3-values/#attribute). One can pull the value of an element's attribute, add a unit, and it returns as a string _inside a declaration_.

It's perfect for tag clouds, bar graphs, and a myriad of other applications. magine, if you will, using the value from an element's `data-popularity` attribute to control its opacity.

    <style>
      .tag { opacity: attr( data-popularity ); }
    </style>

    <div class="tag" data-popularity=".85">Foo</div>
    <div class="tag" data-popularity="1.0">Bar</div>
    <div class="tag" data-popularity=".7">Baz</div>

Sadly, no browsers support this AWESOME feature at the moment (confirmed with Ms. Manian).  

[Test fiddle](http://jsfiddle.net/desandro/txBk5/) using the example from [Oxygen XML](http://www.oxygenxml.com/doc/ug-oxygen/topics/dg-attr-function.html)