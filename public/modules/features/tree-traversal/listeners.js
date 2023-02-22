import BinarySearchTree from "../../binary-search-tree/index.js";
import database from "../../data/database.js";
import { Modal } from "../modals/index.js";

export default function initListeners() {
  // show preorder tree traversal
  window.document
    .getElementById("preorder-traversal-button")
    .addEventListener("click", () =>
      Modal.tree("Preorder", new BinarySearchTree(database).preOrder())
    );

  // show inorder tree traversal
  window.document
    .getElementById("inorder-traversal-button")
    .addEventListener("click", () =>
      Modal.tree("Inorder", new BinarySearchTree(database).inOrder())
    );

  // show postorder tree traversal
  window.document
    .getElementById("postorder-traversal-button")
    .addEventListener("click", () =>
      Modal.tree("Postorder", new BinarySearchTree(database).postOrder())
    );
}
