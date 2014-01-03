---
layout: default
type: regular
tags: css, transitions
format: markdown
title: 

---
You can 'combo' transition classes only when they use different properties.

for example, with this markup:

    <div class="slide-down slide-right fade"></div>

and these styles:

    .slide-down:hover { -webkit-transform: translateY(100% ); }
    .slide-right:hover { -webkit-transform: rotateX(180deg); }
    .fade:hover { opacity: 0; }
  
When you hover over this element, it will spin upside-down and fade to zero opacity, but it will not move along its Y-axis.