// https://leetcode.com/problems/make-the-string-great/description/

var makeGood = function (s) {
  if (s.length === 0 || s.length === 1) return s;

  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (
      res[res.length - 1] !== s[i] &&
      res[res.length - 1]?.toLowerCase() === s[i].toLowerCase()
    ) {
      res.pop();
      continue;
    } else {
      res.push(s[i]);
    }
  }
  return res.join("");
};
