---
layout: default
type: regular
tags: canvas
format: markdown
title: putImageData is a complete jerk

---

## Overwriting

Using canvas' `putImageData()` method completely overwrites the pixels it replaces. Take a look.

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/desandro/6k97S/embedded/result,js,html"> </iframe>

Each canvas has a yellow background to exhibit transparency. The first canvas has the same three circles overlaid on top of each other. As their fillStyle color has partial opacity, the red color is built up.

The second example uses `getImageData()` to capture a snapshot of the current canvas context. That image is then re-rendered at an offset position. Instead of three circles overlapping one another, the area of the `putImageData` output blows out the pixels underneath.

## Unaffected by manipulation methods

Neither `translate()` nor `rotate()` will have any effect on subsequent `putImageData()` calls. 

## Breaks Firefox if bleeds outside canvas bounds

Also of note is that Firefox with throw an error if the output of `putImageData()` extends outside the bounds of the canvas. In this example, I had to crop the dimension of `getImageData()` so the `putImageData()` output would fit inside the canvas. If I kept `getImageData` to the original canvas dimensions, Firefox returns with `An invalid or illegal string was specified" code: "12`.

## jerk.

Collectively, this is all pretty disappointing, as `putImageData` had tremendous potential. It would be especially useful to use `putImageData` as a way of reproducing Photoshop layers, or brushes, or all sorts of wondrous techniques that will have to be hacked together.