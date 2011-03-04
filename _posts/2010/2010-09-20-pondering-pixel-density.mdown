---
layout: default
type: regular
tags: pixels
format: markdown
title: Pondering pixel density

---
The iPhone 4 got me thinking about pixel density a couple months back. I feel like I’ve mislead, thinking that "72 DPI" was the standard "resolution" for digital screens. Of course I know now this metric is merely a misunderstood concept I must have inherited from print designers trying to equate screens to physical paper.

At work, I typically have 3 screens at my disposal: a 15.4" screen on my 15" MacBook, a 3.5" screen on my iPhone 3GS, and [23" Cinema Display (2006 Model)](http://guides.macrumors.com/Apple_Cinema_Displays). Looking at the same view between these screens, the difference in pixel density is fairly visible. If you use an additional display with your laptop, try dragging a window in between the screens and compare how the window lines up.

Pixels per inch (Shouldn't it be pixels-per-inches-squared?) is calculated by the square root of horizontal pixels squared plus vertical pixels squared divided by the diagonal screen size. Or in Javascript terms:

    Math.sqrt( px*px + py*py ) / diag

With that, you can calculate the PPI for a number of devices.

+ iPhone 3G: _165_
+ iPhone 4: _330_
+ iPad: _132_
+ 15" MacBook Pro: _110_
+ 23" Cinema Display (2006 Model): _98_
+ Motorola Droid & Droid 2: _265_
+ HTC Evo 4G: _217_
+ BlackBerry Storm: _185_

So yeah, you can forget about 72 DPI for screens.

Odd that [Apple advertises the iPhone 4 as having PPI of 326](http://www.apple.com/iphone/specs.html). I'm not sure where the other 4 PPI went, unless the screen diagonal is actually greater than 3.5".