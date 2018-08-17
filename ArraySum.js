// Return true if the sum of any two elements in an array equal a target value

function twoSum(arr, target) {
  // Store the difference between arr[i] and target in an object
  const diffObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (diffObj[arr[i]]) return true;
    
    const diff = target - arr[i];
    diffObj[diff] = diff;
  }

  return false;
}

function twoSumTest() {
  const test1 = twoSum([1, 3, 4], 7);
  const test2 = twoSum([-10, 10, 14, 3, 0], 0);
  const test3 = twoSum([1, 2, 3, 4, 5], -2);

  console.log(test1); // true
  console.log(test2); // true
  console.log(test3); // false
}

// twoSumTest();


// Return true if the sum of any number of elements in an array equal a target value

function anySum(arr, target) {
  // Sort the array in ascending order
  const sorted = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum === target) return true;
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum === target) return true;
      else if (sum > target) break;
    }
  }
  return false;
}

function anySumTest() {
  const test1 = anySum([1, 2, 3, 4], 6);
  const test2 = anySum([-1, 2, 3, 0, 3], 8);
  const test3 = anySum([1, -8, 7, 1, 0], 10);

  console.log(test1); // true
  console.log(test2); // true
  console.log(test3); // false
}

anySumTest();