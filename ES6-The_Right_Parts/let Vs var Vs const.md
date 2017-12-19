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
	
	const x = 3;
	const y = [1,2,3];
	y[0] = 1 // since its an muatable  
	
	

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA1MTkxNjQ2OF19
-->