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
	
	//const : The value can't be 
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
eyJoaXN0b3J5IjpbLTE2ODA0NzM3MzldfQ==
-->