class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(arr) {
    this.root = this.sortedArrayToBST(arr.sort((a, b) => a - b));
  }

  sortedArrayToBST(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(arr[mid]);
    root.left = this.sortedArrayToBST(arr, start, mid - 1);
    root.right = this.sortedArrayToBST(arr, mid + 1, end);
    return root;
  }

  insert(value) {
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  delete(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, key) {
    if (!node) return null;
    if (key < node.val) {
      node.left = this.removeNode(node.left, key);
    } else if (key > node.val) {
      node.right = this.removeNode(node.right, key);
    } else {
      if (!node.left && !node.right) {
        node = null;
      } else if (!node.left) {
        node = node.right;
      } else if (!node.right) {
        node = node.left;
      } else {
        let aux = this.findMinNode(node.right);
        node.val = aux.val;
        node.right = this.removeNode(node.right, aux.val);
      }
    }
    return node;
  }

  findMinNode(node) {
    return node.left ? this.findMinNode(node.left) : node;
  }

  findMaxNode(node) {
    return node.right ? this.findMinNode(node.right) : node;
  }

  find(value, node = this.root) {
    if (!node) return null;
    if (node.val === value) return node;
    if (value < node.val) return this.find(value, node.left);
    return this.find(value, node.right);
  }

  height(node = this.root) {
    return node
      ? Math.max(this.height(node.left), this.height(node.right)) + 1
      : -1;
  }

  depth(node, parent = this.root) {
    return node === this.root ? 0 : this.depth(this.getParent(node)) + 1;
  }

  heightOfValue(value) {
    const node = this.find(value);
    return node ? this.height(node) : -1;
  }

  depthOfValue(value) {
    const node = this.find(value);
    return node ? this.depth(node) : -1;
  }

  getParent(node, parent = this.root) {
    if (!parent) return null;
    if (parent.left === node || parent.right === node) return parent;
    return (
      this.getParent(node, parent.left) || this.getParent(node, parent.right)
    );
  }

  isBalanced(node = this.root) {
    return this.checkBalance(node) !== -1;
  }

  checkBalance(node) {
    if (!node) return 0;
    const leftHeight = this.checkBalance(node.left);
    const rightHeight = this.checkBalance(node.right);
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }

  rebalance() {
    const nodes = this.inOrder();
    this.root = this.sortedArrayToBST(nodes, 0, nodes.length - 1);
  }

  printOrder(orderType) {
    let result = [];
    function traverse(node) {
      if (node) {
        if (orderType === "pre") result.push(node.val);
        traverse(node.left);
        if (orderType === "in") result.push(node.val);
        traverse(node.right);
        if (orderType === "post") result.push(node.val);
      }
    }
    traverse(this.root);
    return result;
  }

  inOrder() {
    return this.printOrder("in");
  }

  preOrder() {
    return this.printOrder("pre");
  }

  postOrder() {
    return this.printOrder("post");
  }

  bfs() {
    let result = [];
    let queue = [];
    if (this.root) queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
}

//helper function to print tree
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.val}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let tree = new Tree([1, 2, 3, 4, 5]);
tree.insert(7);
tree.insert(6);
tree.insert(10);
tree.insert(9);
tree.insert(8);
prettyPrint(tree.root);
console.log("height:", tree.height(), "depth of 9:", tree.depthOfValue(9));
console.log(tree.bfs());
console.log(tree.isBalanced());
tree.rebalance();
tree.delete(8);
prettyPrint(tree.root);
console.log(tree.isBalanced());
//inOrder
console.log("inOrder:", tree.inOrder());
//preOrder
console.log("preOrder:", tree.preOrder());
//postOrder
console.log("postOrder:", tree.postOrder());
//bfs
console.log("bfs:", tree.bfs());

module.exports = { TreeNode, Tree, prettyPrint };
