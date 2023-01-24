import BST from "../../data/tree.data.js";
import { treeModal } from "../modals/data.js";

export default function initListeners() {
  // show preorder tree traversal
  window.document
    .getElementById("preorder-traversal-button")
    .addEventListener("click", (e) => {
      const elements = BST.preOrder();
      treeModal.method.set("Preorder");
      treeModal.data = elements;
      treeModal.open.set(true);
    });

  // show inorder tree traversal
  window.document
    .getElementById("inorder-traversal-button")
    .addEventListener("click", (e) => {
      const elements = BST.inOrder();
      treeModal.method.set("Inorder");
      treeModal.data = elements;
      treeModal.open.set(true);
    });

  // show postorder tree traversal
  window.document
    .getElementById("postorder-traversal-button")
    .addEventListener("click", (e) => {
      const elements = BST.postOrder();
      treeModal.method.set("Postorder");
      treeModal.data = elements;
      treeModal.open.set(true);
    });
}
