var people = [{id: 1, name: "edison" }, {id: 2, name: "Annand" }, {id: 3, name: "Vasnath"}];

function groupBy(objectArray) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj.id
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }
  
  let groupedPeople = groupBy(people);
  console.log(groupedPeople)