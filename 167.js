// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let f = 0;
  let l = numbers.length - 1;
  // sum = 0;
  while (f <= l) {
    if (numbers[f] + numbers[l] === target) return [f + 1, l + 1];
    else if (numbers[f] + numbers[l] > target) l--;
    else f++;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
