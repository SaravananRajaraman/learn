### Arrow function 

	function bar(){
		return 2;
	}
	function bar(x){
		return x;
	}
	
	
	bar = () => 2;
	bar = (x) => x;

#### Variation 

	() => 3;
	
	x => 3;

	(x,y) => 3;

	x => { try{ x } catch(e){ log("Error") } }

	x => { return 3;}

	x => ({ y:x })
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTMwMjI3ODQyMywxMjE1OTgzODUyXX0=
-->