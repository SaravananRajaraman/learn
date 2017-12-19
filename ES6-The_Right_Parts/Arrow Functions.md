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

	p.then( data => data.title)
	p.then(function (data) {
	  return data.title;
	});

--

	var obj = {
		id: 42,
		foo: setTimeout(function(){
			console.log(this.id);
		},500);
	}
	

Do you need arrow function: https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20%26%20beyond/fig1.png
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2NDc5MzgxMTcsMTIxNTk4Mzg1Ml19
-->