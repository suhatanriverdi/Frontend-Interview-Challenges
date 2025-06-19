function mergeSort(nums: number[]) {
  if (nums.length === 1) {
    return nums;
  }

  const mid: number = Math.floor(nums.length / 2);
  const leftPart = mergeSort(nums.slice(0, mid));
  const rightPart = mergeSort(nums.slice(mid));

  return merge(leftPart, rightPart);
}

// Merges two lists into a single list by sorting them
function merge(leftPart: number[], rightPart: number[]) {
  const sortedPart: number[] = [];

  let l = 0;
  let r = 0;

  while (l < leftPart.length && r < rightPart.length) {
    if (leftPart[l] < rightPart[r]) {
      sortedPart.push(leftPart[l]);
      l += 1;
    } else {
      sortedPart.push(rightPart[r]);
      r += 1;
    }
  }

  while (l < leftPart.length) {
    sortedPart.push(leftPart[l]);
    l += 1;
  }

  while (r < rightPart.length) {
    sortedPart.push(rightPart[r]);
    r += 1;
  }

  //   Alternative shorther way
  // return sortedPart.concat(leftPart.slice(l)).concat(rightPart.slice(r));

  return sortedPart;
}

const nums = [5, 8, 2, 7, 2, 3, 6];

const sortedNums = mergeSort(nums);

console.log("Before Sort:", nums.join(", "));
console.log("After Sort:", sortedNums.join(", "));
