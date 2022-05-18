var arr = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5];

var result = arr.filter(checkDuplicate);

function checkDuplicate() {
  for (var i = arr[0]; i < arr.length; i++) {
    for (var j = arr[0]; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return arr.splice(arr[i],1);
      }
    }
  }
}

console.log(result);
