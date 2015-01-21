//The meaning of hasOwnProperty

var app = app || {};
app.name = 'dev';
console.log(app.hasOwnProperty('name')); //true
console.log(app.hasOwnProperty('id')); //false