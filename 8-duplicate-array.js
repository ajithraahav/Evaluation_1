var arr = [1,2,9,4,5,8,3,5,1,4,5];
var arr1 = [];

function remove(){
    for(var i=0; i < arr.length; i++){
        arr1.push(arr[i]);
        for(var j=0; j < arr.length; j++){
            if(arr[i]==arr1[j]){
                arr.pop(arr[i]);
            }
        }
    }
    return arr1;
}

console.log(remove());