// https://leetcode.com/problems/group-anagrams/description/
//
// make a hash string with all the alphabets
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  return strs;
}

function createMap(s) {
  const map = new Map();
  for (const item of s) {
    map.set(item, (map.get(item) || 0) + 1);
  }
}

function checkAnagram(s, map) {
  // if (s.length !== t.length) return false;

  // const map = new Map();
  // for (const item of s) {
  //   map.set(item, (map.get(item) || 0) + 1);
  // }

  for (const item of s) {
    map.set(item, (map.get(item) || 0) - 1);
    if (map.get(item) < 0) {
      return false;
    }
  }

  return true;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
