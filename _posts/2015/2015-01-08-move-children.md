---

title: moveChildren
tags: [ JavaScript ]

layout: default

id: '107523035307'
---

To move all children from one element into another.

    function moveChildren( fromElem, toElem ) {
      while ( fromElem.children.length ) {
        toElem.appendChild( fromElem.children[0] );
      }
    }
    // move all children in alpha into beta
    moveChildren( alpha, beta )
