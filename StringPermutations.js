// Given a string as input return an array of all permuations.

function stringPermutations(str) {
  if (str.length === 1) return [str];
  const perms = [];
  for (let i = 0; i < str.length; i++) {
    // Don't allow duplicates.
    if (str.indexOf(str[i]) !== i) continue;
    const innerStr = str.substring(0, i) + str.substring(i + 1);
    const innerPerms = stringPermutations(innerStr);
    for (let j = 0; j < innerPerms.length; j++) { 
      perms.push(str[i] + innerPerms[j]) 
    }
  }
  return perms;
}

const test = stringPermutations('abc');
console.log(test);