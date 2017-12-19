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

Its an obj that has an .next() on it.

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

	var str = "hello"; //String is iterable 
	[ ...str ] //[ "h", "e", "l", "l", "o" ]
	
---
### Generators
		
	function *gen() {
		console.log('Hello');
		yield 9; 
		console.log('World');
		return 10;
	}
	var it = gen();

	it.next() // {value: 9, done: false}
	it.next() // {value: 10, done: true}
	
	for (var v of main()){
		console.log(v) 
	}
	// ===> Basically the generators yield out main values
	// Hello
	// 9
	// World

--

	function *uniqID(){
		while(true){	
			yield Math.random()
		}
	}
	uniqID().next(); //{value: 0.3064620315633175, done: false}	

---
### Ranges
	
	Number.prototype[Symbol.iterator] = function*(){
		for(var i=0; i<=this; i++){
	};
<!--stackedit_data:
eyJoaXN0b3J5IjpbMzg3NTc3MjA3XX0=
-->