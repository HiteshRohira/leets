// https://leetcode.com/problems/group-anagrams/description/
//
// make a hash string with all the alphabets
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const map = new Map();

  for (let s of strs) {
    const key = createKey(s);
    if (map.has(key)) {
      map.get(key).push(s);
    } else map.set(key, [s]);
  }
  return Array.from(map.values());
}

function createKey(s) {
  const obj = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  for (let i of s) {
    obj[i] += 1;
  }
  return JSON.stringify(obj);
}

// console.log(groupAnagrams(["ddddddddddg", "dgggggggggg"]));
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
