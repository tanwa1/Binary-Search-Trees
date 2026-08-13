class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }

  insert() {}

  deleteItem(value) {}

  levelOrderForEach(callBack) {}

  inOrderForEach(callBack) {}

  preOrderForEach(callBack) {}

  postOrderForEach(callBack) {}

  height(value) {}

  depth(value) {}

  isBalanced() {}

  rebalance() {}
}

function buildTree(array) {
  if (array.length === 0) return null;

  const dedupe = new Set(array);

  const sortedArray = [...dedupe].sort((a, b) => a - b);

  const findMid = Math.floor(sortedArray.length / 2);

  const newNode = new Node(array[findMid]);

  newNode.left = buildTree(sortedArray.slice(0, findMid));

  newNode.right = buildTree(sortedArray.slice(findMid + 1));

  return newNode;
}
