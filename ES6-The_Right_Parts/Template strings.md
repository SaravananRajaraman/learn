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
		*foo(){} //concise generators
		*[c+"fun"](){} //concise computed generators 
	}
	

###
	
	var name = "John";
	var id = "25";

	var welcome = `Hello ${name} , your id was ${id} `;
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzIxOTk2NjE0XX0=
-->