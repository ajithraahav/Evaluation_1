var names = "Ajith"; //Prints the log message to console
console.log(names);  //ouput - Ajith

var car = {color: "red", company: "ford" };   //Prints the value of object’s properties and methods .
console.log(car);  //output - 

for (let i = 0; i < 5; i++) {   //Prints count value how many times it run 
    console.count("number");
}
/* \
output:
number :1 ;
number :2 ;
number :3 ;
number :4 ;
number :5 ;
*/

console.table(["Ajith", "Vijay", "Surya"]); //Prits the value in table format

console.time();                         //Starts the timer for the code
for (let i = 0; i < 10000; i++) {
    console.timeLog();                  //Print the current time of the running code
}
console.timeEnd();                      //Print the full time of the code executed

function myFunction() {
    myOtherFunction();
  }                                   //Prints the trace route of the code how it is executed
  
function myOtherFunction() {
    console.trace();
}
/*
output:
console.trace
myotherFunction
myFunction
anonymous
*/

console.log("line start");
console.group();                 //It creates the group of messages
console.log("Inside Group");
console.groupEnd();              //End of the group
console.log("Outside Group");

/*
output:
line start
console.group
   Inside group!
Outside group
*/

let x = 5;
let y = 5;
console.assert(x + y == 11, "Expression returned 'false'");    //It gives error messsage to console

