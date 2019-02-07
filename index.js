function sumItems(array) {
  // Sum all the numbers in the array
  let tempArray = []; // temporary array to hold a flatted array

  array.forEach((item) => {
    if (Array.isArray(item)) {
      return tempArray.push(sumItems(item));
    } else {
      tempArray.push(item);
    }    
  });

  //now, with flatted array, sum up the numbers
  let result = 0;
  tempArray.forEach((item) => {
    result += item;
  });

  return result;
}

module.exports = sumItems;