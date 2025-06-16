// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // find smallest word
  let smol = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < smol.length) smol = strs[i];
  }
  let c;
  // keep making smallest word smallest word smaller till we get prefix
  while (smol.length > 0) {
    c = 0;
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(smol)) {
        smol = smol.slice(0, smol.length - 1);
        break;
      }
      c++;
    }
    if (c === strs.length) break;
  }

  return smol;
};
