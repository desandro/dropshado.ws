---

title: IE unloaded img size
tags: [ ie ]

layout: default

id: '133934066982'
---

Internet Explorer 11, unlike Chrome or Firefox, renders a small 28px x 32px placeholder for an unloaded image. This might getcha if you are using responsive sizing `img { width: 100% }`. Other browsers will render a full-width unloaded image with 0 height, but IE11 will render it large, maintain its size ratio. [See pen](http://codepen.io/desandro/pen/meZJJK?editors=110).

[![Unloaded image demo on IE11](http://i.imgur.com/OJX5jG8.png)](http://codepen.io/desandro/pen/meZJJK?editors=110)
