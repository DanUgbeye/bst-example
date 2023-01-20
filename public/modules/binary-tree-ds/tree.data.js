import ObservedData from "../utils/observedData.util.js";

export const TREE = ObservedData([]);

class BinaryTree {
  /**
   * @type {Node[]}
   */
  tree;

  constructor() {
    this.root = null
    this.tree = this.inorderTraverse(data);
  }

  insert(data) {

  }

  /** @param {any[]} data */
  static preorderTraverse(data) {}

  /** @param {any[]} data */
  static inorderTraverse(data) {}

  /** @param {any[]} data */
  static postorderTraverse(data) {}
}

class Node {
  /** @type {Node | null} */
  right;

  /** @type {Node | null} */
  left;

  /**
   * @param {any} data node data
   * @param {Node | null} right
   * @param {Node | null} left
   */
  constructor(data, right = null, left = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }

  /** @param {Node} node the node to set */
  setRight(node) {
    this.right = node;
  }

  /** @param {Node} node the node to set */
  setLeft(node) {
    this.right = node;
  }
}

export default new BinaryTree();
