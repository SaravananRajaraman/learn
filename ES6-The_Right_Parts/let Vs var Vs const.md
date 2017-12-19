### Let vs. Var vs. Const

	function foo(x,y){
		if(x>y){
			var tmp = x;
			x = y;
			return tmp;
		}
		for(var i=0; i<x; i++){
			//...
		}
	}
	
	function foo(x,y){
		if(x>y){
			let tmp = x;
			x = y;
			return tmp;
		}
		//tmp 
		for(let i=0; i<x; i++){
			//...
		}
		//i
	}
	
	//const : A const is varable can't be reassigned 
	
	function foo(x,y){
		if(x>y){
			{
			
			}
		}
		//tmp 
		for(let i=0; i<x; i++){
			//...
		}
		//i
	}
	
	

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNzQwOTUwNjNdfQ==
-->