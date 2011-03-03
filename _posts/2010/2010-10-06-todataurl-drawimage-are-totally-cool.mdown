---
layout: default
type: regular
tags: canvas, John Schulz
format: markdown
title: toDataURL & drawImage are totally cool

---
John Schulz [continues](http://dropshado.ws/post/1173044865/getimagedata) to do my job for me. 

re: [putImageData is a complete jerk](http://dropshado.ws/post/1244700472/putimagedata-is-a-complete-jerk) I don't know if this has been suggested already, but use drawImage instead [http://jsfiddle.net/JFSIII/Ga5jf/](http://jsfiddle.net/JFSIII/Ga5jf/)

— [John Schulz](http://twitter.com/JFSIII/status/26454715341)

The thing pulling it all together is converting the canvas into a data URL and using that as an image:

    var img = new Image();
    img.src = canvas2.toDataURL('image/png');
    ctx2.drawImage(img, 30, 10);

Gonna have to give him a back rub one of these days.