class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }

  includes(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.data) {
        return true;
      }

      if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  insert(value) {
    let newNode = new Node(value);

    let pointer = this.root;

    while (pointer !== null) {
      if (value === pointer.data) return;

      if (value < pointer.data) {
        if (pointer.left === null) {
          pointer.left = newNode;
        } else {
          pointer = pointer.left;
        }
      } else if (value > pointer.data) {
        if (pointer.right === null) {
          pointer.right = newNode;
        } else {
          pointer = pointer.right;
        }
      }
    }
  }

  deleteItem(value) {
    let parent = this.root;

    let current = this.root;

    while (current !== null) {
      if (current.data === value) {
        if (current.left === null && current.right === null) {
          const currentRoot =
            current === this.root
              ? (this.root = null)
              : parent.left === current
                ? (parent.left = null)
                : (parent.right = null);
          return currentRoot;
        } else if (current.left === null || current.right === null) {
          const child = current.left !== null ? current.left : current.right;
          const oneChild =
            current === this.root
              ? (this.root = child)
              : parent.left === current
                ? (parent.left = child)
                : (parent.right = child);
          return oneChild;
        } else {
          let successor = current.right;
          let succParent = current;

          while (successor.left !== null) {
            succParent = successor;
            successor = successor.left;
          }
          current.data = successor.data;
          if (succParent === current) {
            current.right = successor.right;
          } else {
            succParent.left = successor.right;
          }
          return;
        }
      } else {
        parent = current;
        current = value < current.data ? current.left : current.right;
      }
    }
  }

  levelOrderForEach(callBack) {

    if(callBack === undefined) throw new Error("Callback required");

    let Queue = [this.root];

    while (Queue.length > 0) {
      const node = Queue.shift();
      callBack(node.data);

      if (node.left !== null) Queue.push(node.left);
      if (node.right !== null) Queue.push(node.right);
    }
  }

  // inOrderForEach(callBack) {}

  // preOrderForEach(callBack) {}

  // postOrderForEach(callBack) {}

  // height(value) {}

  // depth(value) {}

  // isBalanced() {}

  // rebalance() {}
}

function buildTree(array) {
  if (array.length === 0) return null;

  const dedupe = new Set(array);

  const sortedArray = [...dedupe].sort((a, b) => a - b);

  const findMid = Math.floor(sortedArray.length / 2);

  const newNode = new Node(sortedArray[findMid]);

  newNode.left = buildTree(sortedArray.slice(0, findMid));

  newNode.right = buildTree(sortedArray.slice(findMid + 1));

  return newNode;
}
