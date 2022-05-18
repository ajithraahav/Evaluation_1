var arr = [
    {id: 1, name: "Stephen covey" },
    {id: 2, name: "Robin Sharma" },
    {id: 3, name:"Tolstoy"},
    {id: 3, name: "Tolstoy"},
    {id: 5, name: "James clear"}
];

function remove(){
    for(var i=0; i < arr.length; i++){
        if(arr[i].id!=arr[i].id){
        }
        else{
            arr.pop(arr[i]);
        }
    }
    return arr
}

console.log(remove());