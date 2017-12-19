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
--
	
	(function () {
	  return 3;
	});

	(function (x) {
	  return 3;
	});

	(function (x, y) {
	  return 3;
	});

	(function (x) {
	  try {
	    x;
	  } catch (e) {
	    log("Error");
	  }
	});

	(function (x) {
	  return 3;
	});

	(function (x) {
	  return { y: x };
	});

### Promises & this
<!--stackedit_data:
eyJoaXN0b3J5IjpbNDI5MDk3OTAsMTIxNTk4Mzg1Ml19
-->