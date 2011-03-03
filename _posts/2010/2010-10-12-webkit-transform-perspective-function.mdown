---
layout: default
type: regular
tags: webkit, Css, 3D, fiddle
format: markdown
title: WebKit Transform Perspective Function

---
<style media="screen">.wkptfn-container {  width: 360px;  height: 360px;  background: #DDD;  margin-bottom: 40px;}#wkptfn-example1 {  position: relative;}#wkptfn-example1 div {  position: absolute;  width: 280px;  height: 280px;  margin: 40px;  -webkit-transition: -webkit-transform 1s;  -webkit-backface-visibility: hidden;}#wkptfn-example1:hover {  background: #EE8;}#wkptfn-example1 .alpha {  background: blue;  -webkit-transform: perspective(800) rotateY( 0deg);}#wkptfn-example1:hover .alpha {  -webkit-transform: perspective(800) rotateY(-180deg);      }#wkptfn-example1 .beta {  background: red;  -webkit-transform: perspective(800) rotateY(180deg);}#wkptfn-example1:hover .beta {  -webkit-transform: perspective(800) rotateY( 0deg);}#wkptfn-example2 {  width: 360px;  height: 360px;  background: #DDD;  margin-bottom: 40px;}#wkptfn-example2 div,#wkptfn-example3 div {  width: 100px;  height: 100px;  float: left;  background: red;  margin: 10px;}#wkptfn-example2 div {  -webkit-transform: perspective(800) rotateY(45deg);}#wkptfn-example3 {  -webkit-perspective: 800;}#wkptfn-example3 div {  -webkit-transform-style: preserve-3d;  -webkit-transform: rotateY(45deg);}</style>

Yar, 3D transform be ahead. Safari only. The examples below also live together in a [lovely house in this fiddle](http://jsfiddle.net/desandro/gU7X4/).

[Safari has support for a perspective transform function](http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariCSSRef/Articles/Functions.html#//apple_ref/doc/uid/TP40007955-SW2). This is pretty convenient for doing a simple 3d transform, like a card flip.

    #wkptfn-example1 .alpha {
      background: blue;
      -webkit-transform: perspective(800) rotateY( 0deg);
    }

    #wkptfn-example1:hover .alpha {
      -webkit-transform: perspective(800) rotateY(-180deg);      
    }

    #wkptfn-example1 .beta {
      background: red;
      -webkit-transform: perspective(800) rotateY(180deg);
    }

    #wkptfn-example1:hover .beta {
      -webkit-transform: perspective(800) rotateY( 0deg);
    }

## Hover for Card Flippin' Action

<div id="wkptfn-example1" class="wkptfn-container">
  <div class="alpha"> </div>
  <div class="beta"> </div>
</div>

The problem with it is that the perspective is only for the one element. If you use the same transform across elements with different position, each element will have its own vanishing point.

    #wkptfn-example2 div {
      -webkit-transform: perspective(800) rotateY(45deg);
    }

<div id="wkptfn-example2" class="wkptfn-container">
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
</div>

To remedy this, you need to specify a perspective or the parent with `-webkit-perspective:` and then let the children inherit it with `-webkit-transform-style: preserve-3d;`

    #wkptfn-example3 {
      -webkit-perspective: 800;
    }

    #wkptfn-example3 div {
      -webkit-transform-style: preserve-3d;
      -webkit-transform: rotateY(45deg);
    }

<div id="wkptfn-example3" class="wkptfn-container">
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
  <div> </div>
</div>