const numberArray = [12, 45, 67, 99, 23, 9, 18, 56];

function findMaximum(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  let max = arr[0]; // Initialize max with the first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if a greater value is found
    }
  }

  return max; // Return the maximum value
}

const maxNumber = findMaximum(numberArray);

console.log(maxNumber);
