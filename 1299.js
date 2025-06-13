/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  if (arr.length === 1) return [-1];
  if (arr.length === 2) return [arr[arr.length - 1], -1];

  const res = [-1];
  let max = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    res.unshift(max);
    if (arr[i] > max) max = arr[i];
  }
  return res;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
