// Given a string as input return an array of all permuations.

function stringPermutations(str) {
  // There is only one permutation for a string of length 1
  if (str.length === 1) return [str];

  const perms = [];
  for (let i = 0; i < str.length; i++) {

    // Prevent duplicates 
    if (str.indexOf(str[i]) !== i) continue;

    // Create a string with all the characters minus the ith character
    const innerStr = str.substring(0, i) + str.substring(i + 1);
    
    // Recursively generate an array of permutaions without the ith character
    const innerPerms = stringPermutations(innerStr);

    for (let j = 0; j < innerPerms.length; j++) { 
      perms.push(str[i] + innerPerms[j]) 
    }
    
  }
  return perms;
}

const test = stringPermutations('abc');
console.log(test);