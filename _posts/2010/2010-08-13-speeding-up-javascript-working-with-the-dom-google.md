---
layout: default
type: regular
tags: js
format: markdown

---

# [Speeding up JavaScript Working with the DOM - Google Code By KeeKim Heng, Google Web Developer](http://code.google.com/speed/articles/javascript-dom.html)

> Working with the DOM can cause browser reflow, which is the browser's process of determining how things should be displayed. Directly manipulating the DOM, changing CSS styles of elements, and resizing the browser window can all trigger a reflow. Accessing an element's layout properties such as offsetHeight and offsetWidth can also trigger a reflow. Because each reflow takes time, the more we can minimise browser reflow, the faster our applications will be.

4 practices I need to remember when tooling around with the DOM:

__Rather than changing multiple style properties on an element, just change its class and rely on CSS.__

__Remove elements from the DOM when you're doing heavy manipulation.__

__When creating a new element, manipulate its properties _before_ appending it to the DOM.__

### Bad

    var element = document.createElement('div');
    document.body.appendChild(element);
    element.innerHTML = 'This is a div.';
    element.className = 'new-element';
    
### Good

    var element = document.createElement('div');
    element.innerHTML = 'This is a div.';
    element.className = 'new-element';
    document.body.appendChild(element);

__Append multiple elements to a DocumentFragement and when the entire structure is complete, append that DocumentFragement once to the DOM.__

### Bad

    for (var i=0; i < newElementCount; i++ ) {
      var element = document.createElement('div');
      document.body.appendChild(element);
    }

### Good

    var fragment = document.createDocumentFragment();
    for (var i=0; i < newElementCount; i++ ) {
      var element = document.createElement('div');
      fragment.appendChild(element);
    }  
    document.body.appendChild(fragment);