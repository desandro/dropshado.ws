---
layout: default
type: regular
tags: js
format: markdown
title: Switch conditional statements

---

[Brandon](http://twitter.com/bjtylerx) helped me out with this one.

[Switch statements](https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Statements/switch) clean up your code when you're checking if a variable matches a value. Say if you're looking to check if the variable _direction_ is valid.

#### Bad way

	if ( direction === 'north' || direction === 'south' || direction === 'east' || direction === 'west' ) {
		console.log('valid direction: ' + direction);
	} else {	
	    console.log('invalid direction');
	}
		
#### Better way with a switch statement


	switch ( direction ) {
	  case 'north' : case 'south' : case 'east' : case 'west' : 
	    console.log('valid direction: ' + direction);
	    break;
	  default :
	    console.log('invalid direction');
	}
		
