import { successModal, errorModal, treeModal } from "./data.js";

export default function initListeners() {
  [
    window.document.getElementById("close-success-modal"),
    window.document.getElementById("modal-backdrop"),
  ].forEach((element) => {
    element.addEventListener("click", (e) => {
      successModal.open.get() && successModal.open.set(false);
    });
  });

  [
    window.document.getElementById("close-error-modal"),
    window.document.getElementById("modal-backdrop"),
  ].forEach((element) => {
    element.addEventListener("click", (e) => {
      errorModal.open.get() && errorModal.open.set(false);
    });
  });

  [
    window.document.getElementById("close-tree-modal"),
    window.document.getElementById("modal-backdrop"),
  ].forEach((element) => {
    element.addEventListener("click", (e) => {
      treeModal.open.get() && treeModal.open.set(false);
    });
  });
}
