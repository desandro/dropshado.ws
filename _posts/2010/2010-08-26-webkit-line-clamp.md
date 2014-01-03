---
layout: default
type: regular
tags: webkit, css
format: markdown
title: -webkit-line-clamp

---
`-webkit-line-clamp` is an [unsupported WebKit property](http://developer.apple.com/safari/library/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-UnsupportedProperties) that limits the number of lines of text displayed in a block element. In order to achieve the effect, it needs to be combo-ed with a couple of other exotic WebKit properties.

    <p style="
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    ">
      WebKit Browsers will clamp the number of lines 
      in this paragraph to 2. Lorem ipsum dolor sit amet, 
      consectetur adipisicing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim 
      ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis 
      aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur 
      sint occaecat cupidatat non proident, sunt in culpa qui 
      officia deserunt mollit anim id est laborum.
    </p>

<p style="
  overflow : hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
">WebKit Browsers will clamp the number of lines in this paragraph to 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>