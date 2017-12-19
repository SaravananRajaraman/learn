### Array Destructuring

	function foo(){
		return [1,2,3];
	}

	var temp = foo();
	var a = tmp[0];
	var b = tmp[1];
	var c = tmp[2];
	
--

	var [a,b,c] = foo();
	
----------

### Destructuring & Default Values

	
	function foo(){
		return [1,2,3];
	}

	var temp = foo();
	var a = tmp[0];
	var b = tmp[1] !== undefined ? tmp[1] : 42;
	var c = tmp[2];

--

	var [
			a,
			b = 42,
			c
		] = foo();


	function foo(){
		return [1,2,3,4,5,6,7];
	}
	var [
			a,
			b = 42,
			c,
			...args //[4,5,6,7]
		] = foo();

---
### Dumping Variables

 var x = 1, y =2;

[ x, y ] = [ y, x ];

var a = [ 1, 2, 3 ];

[ x, y, ...a ] = [ 0, ...a, 4 ];
[ ,  , ...a ] = [ 0, ...a, 4 ];

### Nested Array Destructuring
   	function foo(){
		return [ 1, 2, 3, [ 4, 5, 6, 7 ] ];
	}
	
	var [
			a,
			b = 42,
			c,
			...args //[[4,5,6,7]]
		] = foo();
		
    var [ 
		    a,
		    b,
		    c,
		    [
			    d,
			    ,
			    e
		    ]
	    ] = foo() || [];

--

	function foo(){
		return [ 1, 2, 3, [ 4, 5, 6, 7] ];
	}
	var a,b;
	var x = [ a, b ] = x = foo();
	x //[ 1, 2, 3, [ 4, 5, 6, 7] ]
	
	var a,b,args,c,d;
	[
		,,,
		[ c, d ]
	] = [ a, b, ...args ] = foo()
---
### Object Destructuring

	function foo(){
		return { a:1, b:2, c:3 };
	}

	var tmp = foo();
	var a = tmp.a;
	var b = tmp.b;
	var c = tmp.c;
	
--

	var {
		a,
		b,
		c
	} = foo();

	var {
		a, // a = 1
		b : X, // X = 2 | b = ref error 
		c, // 3
		d // undefine
	} = foo(); 
	
	var {
		a, // a = 1
		b : X, // X = 2 | b = ref error 
		c, // 3
		d = 12 // d = 12
	} = foo();


----------


### Nested Object Destructuring

	function foo(){
		return { a:1, b:2, c:3,
			d: {
				e: 4
			}	
		};
	}

	var {
		a, // a = 1
		b : X, // X = 2 | b = ref error 
		c, // 3
		d: {
			e
		} = {} // This will set the default 
	} = foo() || {};

--

	var a,X,c,e;
	({
		a, // a = 1
		b : X, // X = 2 | b = ref error 
		c, // 3
		d: {
			e
		} = {} // This will set the default 
	} = foo() || {});
---

### Destructuring & Function Parameters 

	function foo( [ a, b, c ]= []) {
		console.log(a,b,c);
	}
	
	foo([1,2,3]);
--

	function foo({ a,b,c}){
		console.log(a,b,c);
	}
	
	foo({
		a:1,
		b:2,
		c:3
	});
--

	function foo({ a,b=10,c} = {}){
		console.log(a,b,c);
	}
	
	foo({
		c:3,
		a:1
	});
---
### Advanced Destructuring

	var defaults = {
		method: "POST",
		callback: function(){},
		headers: {
			"content-type": "text/plain"
		}	
	}

	var config = {
		url: "http://example.com",
		callback: foo,
		headers: {
			"x-requested-with": "tested"
		}
	}

	{
		let {
			url,
			callback = defaults.callback,
			headers: {
				"content-type": contentType = defaults.headers["contnent-type"],
				"x-requested-with": xReq
			}
		} = config;
		
		config = {
			method,
			url,
			callback,
			headers: {
				"content-type" : contentType,
				"x-requested-with": xReq
			}
		};
	}
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgxOTYyMTgwXX0=
-->