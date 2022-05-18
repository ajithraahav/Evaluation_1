function num(val){
    var odd = 0;
    var even = 0;
    for(var i=0; i <= val; i++){
        if(i%2==0){
            even += i;
        }
        else if(i%2!=0){
            odd += i;
        }
    }
    return `Sum of even numbers in 100 - ${even}\nSum of odd numbers in 100 - ${odd}`;
};

console.log(num(100));