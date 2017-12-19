### 1. Default Values
		function foo(x){
			// x = x || 42 // Don't preffe this since this an falis value
			x = x !== undefined ? x : 42;
		}
		foo(undefined);

--

		function foo (x = 42){
		}

----------

### 2. Lazy Expressions
	 function uniqID(){
		 console.log('!');
	 }
	 function foo(x = uniqID()){
	 }
	foo(1);
	foo(); //! //Everytime the uniqID will call

---
	var x = 1;
	function foo(x=2, f = function(){rerutn x }){
		var x = 5;
		console.log(f());
	}
	foo();
		
----------

### 3. Gather & Spread Operators Part 1
	function foo(...args){
	  args.unshift(42);
	  bar( ...args );
	}


----------
### 4. Using the Gather & Spread Operators

	var x = [1,2,3];
	var y = [4,5];
	var z = [0].concat(x,y,[6]);
--
		var z = [ ...x, ...y, 6 ];


----------


### Exercise

	function foo(x,y,z,...args){
		return [x,...args];
	}

	function bar(){
		var a=[2,4];
		var b=[1,2,4,5,6,7];
		return foo( ...a, ...b );
	}
	
	console.log(bar().join('') === "224567");
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0NzA1MDEyOTVdfQ==
-->