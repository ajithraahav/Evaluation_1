// function randomNum(from,to){
//     var number = Math.floor(Math.random() * to) + from;
//     for(var i=1; i <= to; i++){
//         console.log(i);
//     }
// }

// randomNum(1,5);
function randomNum(to){
    var number = Math.random() * to;
    return number;
}

console.log(randomNum(5));