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
	var x = arr[Symbol.i]




<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1NTk1NjI5N119
-->