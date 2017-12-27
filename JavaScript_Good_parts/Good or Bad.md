### Left or Right ?
	
	//Silent Error
	return 
	{
		ok: false
	};

	//Correct 
	return{
		ok: false
	}

A good style can help produce better programs.

### Composition 

Use elements of good composition where applicable.

for eg: use a space after a comma, not before

Wrong:
	
	foo (bar) ;
	return(a+b) ;
	if(a=== 0) {...}
	function foo (b) {...}
	function(x) {...}

Immediately invocable function expressions

	function(){
	...
	} (); //Error
	
	(function(){
	...
	})();
	
	(function(){
	...
	}()); //Good prat

### Scope

##Block scope v function scope

Declare all var at the top of the function 

Declare all function before you call them


<!--stackedit_data:
eyJoaXN0b3J5IjpbMjg5MDU4MDU3XX0=
-->