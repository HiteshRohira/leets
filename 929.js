// https://leetcode.com/problems/unique-email-addresses/

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const set = new Set();

  for (let item of emails) {
    const key = getEmailKey(item);
    if (set.has(key)) continue;
    else set.add(key, 1);
  }
  return set.size;
};

function getEmailKey(email) {
  let key = "",
    arr = email.split("@");

  for (let char of arr[0]) {
    if (char === "+") break;
    else if (char === ".") continue;
    else key += char;
  }
  return key + "@" + arr[1];
}
