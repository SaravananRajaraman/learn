### concise-properties-and-methods
	var a;
	
	var c = "hello";
	
	var obj = {
		a,
		b(){} // b: function(){} //It will not use on b: function b(){ b()}
	}
	obj[c] = 42;
	
	
	var obj = {
		a,
		b(){},
		[c]: 42, //computed props
		[c+"fun"](){}, //computed methods 
		*foo(){} //concise genrator 
	}
	
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwMjM2NjM4NjRdfQ==
-->