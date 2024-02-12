const { Treenode, Tree, prettyPrint } = require("./bst");

describe("Tree", () => {
  let tree;

  beforeEach(() => {
    tree = new Tree([1, 2, 3, 4, 5]);
  });

  test("insert", () => {
    tree.insert(6);
    prettyPrint(tree.root);
    expect(tree.root.right.right.right.val).toBe(6);
  });

  test("delete", () => {
    tree.delete(3);
    expect(tree.root.right.val).toBe(4);
  });

  test("height", () => {
    expect(tree.height()).toBe(2);
  });

  test("isBalanced", () => {
    expect(tree.isBalanced()).toBe(true);
    tree.insert(6);
    expect(tree.isBalanced()).toBe(false);
  });

  test("rebalance", () => {
    tree.insert(6);
    tree.rebalance();
    expect(tree.isBalanced()).toBe(true);
  });
});
