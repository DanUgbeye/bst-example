class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (this.root === null) {
      this.root = new BinaryNode(data);
      return true;
    } else {
      function searchTree(node, data) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new BinaryNode(data);
            return true;
          } else if (node.left !== null) {
            return searchTree(node.left, data);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new BinaryNode(data);
            return true;
          } else if (node.right !== null) {
            return searchTree(node.right, data);
          }
        } else return false;
      }

      return searchTree(this.root, data);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) return null;
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  delete(data) {
    let deleted;
    function deleteNode(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        deleted = node;
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = deleteNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else {
        node.right = deleteNode(node.right, data);
        return node;
      }
    }
    this.root = deleteNode(this.root, data);
    return deleted ? true : false;
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  depthOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

class BinaryNode {
  /** @type {BinaryNode | null} */
  right;

  /** @type {BinaryNode | null} */
  left;

  /**
   * @param {any} data node data
   * @param {BinaryNode | null} right
   * @param {BinaryNode | null} left
   */
  constructor(data, right = null, left = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

export default BinaryTree;
