var arr = [
    {id: 1, name: "Stephen covey" },
    {id: 2, name: "Robin Sharma" },
    {id: 3, name:"Tolstoy"},
    {id: 3, name: "Tolstoy"},
    {id: 5, name: "James clear"}
];

function remove(){
    for(var i=0; i < arr.length; i++){
        for(j=0; j < arr.length; j++){
            if(arr[i].id==arr[j].id){
                arr.pop(arr[i]);
            }
            else{
            }
        }
    }
    return arr;
}

console.log(remove());