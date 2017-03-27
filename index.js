function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var numbers = [1, 2, 3, 4]
  numbers.forEach(callback)
  return numbers
}

function doToArray(array, callback) {
  array.forEach(callback)
}
