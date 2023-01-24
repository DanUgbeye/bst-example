import BST from "../../data/tree.data.js";
import { Modal } from "../modals/index.js";

export default function initListeners() {
  // show preorder tree traversal
  window.document
    .getElementById("preorder-traversal-button")
    .addEventListener("click", () => Modal.tree("Preorder", BST.preOrder()));

  // show inorder tree traversal
  window.document
    .getElementById("inorder-traversal-button")
    .addEventListener("click", () => Modal.tree("Inorder", BST.inOrder()));

  // show postorder tree traversal
  window.document
    .getElementById("postorder-traversal-button")
    .addEventListener("click", () => Modal.tree("Postorder", BST.postOrder()));
}
