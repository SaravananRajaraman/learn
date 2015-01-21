//00 - Scope
(function() {
   var a = b = 5;
})(); 
console.log(b);

//01 - Create “native” methods (string method)
String.prototype.repeatify = String.prototype.repeatify || function(times) {
   var str = ''; 
   for (var i = 0; i < times; i++) {
      str += this;
   } 
   return str;
};
console.log('hello'.repeatify(3));

//02 - Hoisting
function test() {
   console.log(a);
   console.log(foo());    
   var a = 1;
   function foo() {
      return 2;
   }
} 
test();//undefined and 2

//03 - This works in JavaScript
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
}; 
console.log(obj.prop.getFullname()); 
var test = obj.prop.getFullname; 
console.log(test());

//04 - Data Types
console.log(typeof null); //object
console.log(typeof {}); //object
console.log(typeof []); //object
console.log(typeof undefined); //undefined

//05 - Event Loop
function printing() {
   console.log(1); 
   setTimeout(function() { console.log(2); }, 1000); 
   setTimeout(function() { console.log(3); }, 0); 
   console.log(4);
}
 
printing(); //1 4 3 2