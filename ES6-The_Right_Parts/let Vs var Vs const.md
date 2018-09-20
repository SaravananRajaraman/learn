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
	
	//if you want to immuatable use Object.freeze()  
	
	const z = [1,2,3,................]
	// z = null // not possible 
	//	here you can't do the garbage collect 
	// since z is an const
	
	

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwMTU5MzUyMTcsLTM5Mjg3MTgwMV19
-->