var a = ({id: 1, name: "edison"}, {id: 1, name: "edison"})
var b = ({id: 1, name: "edison"}, {id: 2, name: "edison"})
function objcmp(obj1, obj2) {

    //copy properties into A and B
    let A = Object.getOwnPropertyNames(obj1);//returns an array of all properties names
    let B = Object.getOwnPropertyNames(obj2);
    // console.log(A, B)//[ 'id', 'name' ] [ 'id', 'name' ]
    // console.log(A.length)//2
    
    //return early if number of properties is not equal
    if (A.length != B.length)
        return false;

    //compare all properties on both objects
    for (let i = 0; i < A.length; i++) {
        let propName = A[i];
        if (obj1[propName] !== (obj2[propName]))
            return false;
    }
    //objects are equal 
    return true;
}

console.log(objcmp());