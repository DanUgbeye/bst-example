import BinaryTree from "../binary-search-tree/index.js";

const BST = new BinaryTree();

const presetData = [22, 44, 56, 47, 45, 89, 30];

presetData.forEach((data) => {
  BST.insert(data);
})

export default BST;