// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function lowestCommonAncestor(root, p, q) {
  if (root === null) return root;
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  else if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);
  else return root;
}
// Create test tree:       6
//                       /   \
//                      2     8
//                     / \   / \
//                    0   4 7   9
//                       / \
//                      3   5

let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);

// Test cases
let p, q, result;
// let p = root.left; // node with value 2
// let q = root.right; // node with value 8
// let result = lowestCommonAncestor(root, p, q);
// console.log("LCA of 2 and 8:", result);

p = root.left; // node with value 2
q = root.left.right; // node with value 4
result = lowestCommonAncestor(root, p, q);
console.log("LCA of 2 and 4:", result);

// p = root.right.left;
// q = root.right.right;
// console.log(lowestCommonAncestor(root, p, q));
