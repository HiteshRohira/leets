// https://leetcode.com/problems/string-matching-in-an-array/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[j].includes(words[i]) && words[i] !== words[j]) {
        res.push(words[i]);
        break;
      }
    }
  }
  return res;
};
