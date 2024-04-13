// TODO:
// - Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of objects.
// - In the newly returned array, every object must have a val key and the input array's number as a value.

// EXAMPLE:
// - For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

/**
 * Creates transform a list of numbers into a list of  objects.
 * @param {array} listOfNumbers - a list of numbers
 * @returns a  list of objects
 */
function transformToObjects(listOfNumbers) {
  result = [];
  // Write your code here
  //  change the list of numbers to the objects
  listOfNumbers.forEach(function(number){
      var object = {
        'val' : number
      }
      result.push(object);
  })
  return result;
}

// --------------------------------------------------------
// TESTS ZONE
// --------------------------------------------------------

// test 1  -
console.log(JSON.stringify(transformToObjects([1, 2, 3])));
//Expected output    [{val: 1}, {val: 2}, {val: 3}]
