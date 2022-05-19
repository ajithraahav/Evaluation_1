var numbers = [1, 4, 9];
var doubles = numbers.map((num) => num * 2);

console.log("map",doubles);



let sum = 0;
var num = [65, 44, 12, 4];
num.forEach(myFunction);

function myFunction(item,index,arr) {
    arr[index] = item * 10;
}

console.log("foreach",num);