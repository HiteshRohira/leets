// https://leetcode.com/problems/pascals-triangle/description/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const res = [[1], [1, 1]];
  let arr, tempRes;
  for (let i = 3; i <= numRows; i++) {
    arr = res[res.length - 1];
    tempRes = [arr[0]];
    for (let j = 0; j < arr.length; j++) {
      if (j === arr.length - 1) tempRes.push(arr[j]);
      else tempRes.push(arr[j] + arr[j + 1]);
    }
    res.push(tempRes);
  }
  return res;
};
