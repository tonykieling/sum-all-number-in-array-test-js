function sumItems(array) {
  // console.log("array: ", array);
  // Sum all the numbers in the array

  let tempArray = [];
  // console.log("tempArray: ", tempArray);

  array.forEach((item) => {
    if (Array.isArray(item)) {
      // console.log("itemA: ", item);
      return tempArray.push(sumItems(item));
    } else {
      tempArray.push(item);
      // console.log("itemC: ", item);
      // return item += item;
    }
  });

  let result = 0
  tempArray.forEach((item) => {
    result += item;
  });
  return result;
}


const mArray = [1, 2, [3, [4, 5, 6]]];
// console.log(mArray);
console.log(sumItems(mArray));