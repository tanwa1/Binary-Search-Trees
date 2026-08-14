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

    while(pointer !== null){

      if(value === pointer.data) return;

      if(value < pointer.data){
        if(pointer.left === null){
          pointer.left = newNode;
        }
        else{
          pointer = pointer.left;
        }
      } else if(value > pointer.data) {
          if(pointer.right === null){
            pointer.right = newNode;
          }
          else{
            pointer = pointer.right
          }
      }

    }
  }

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
