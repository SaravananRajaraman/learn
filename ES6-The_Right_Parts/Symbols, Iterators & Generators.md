### Symbols

	var x = Symbol();
	var x = Symbol( "hello world" );
	var obj = {
		id :24
	};
	obj[x] = "Testing man";
	obj// {id: 24, Symbol(hello world): "Testing man"} | this will contain only the id, Some kind of hidden property


----------

### Iterators

Symbol.iterators
	
	var arr = [1,2,3];
	var it = arr[Symbol.iterator]();
	it.next(); // { value: 1, done: false }
	it.next(); // { value: 2, done: false }
	it.next(); // { value: 3, done: false }
	it.next(); // { value: undefined, done: true }

for...of

	for ( var v of arr ){ 
		console.log(v) 
	};


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4NTE1OTE5MTJdfQ==
-->