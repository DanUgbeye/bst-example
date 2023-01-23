import { successModal, errorModal, treeModal } from "./data.js";

export default function initListeners() {
  // closing success modal when open
  [
    window.document.getElementById("close-success-modal"),
    window.document.getElementById("modal-backdrop"),
  ].forEach((element) => {
    element.addEventListener("click", (e) => {
      successModal.open.get() && successModal.open.set(false);
    });
  });

    // closing error modal when open
  [
    window.document.getElementById("close-error-modal"),
    window.document.getElementById("modal-backdrop"),
  ].forEach((element) => {
    element.addEventListener("click", (e) => {
      errorModal.open.get() && errorModal.open.set(false);
    });
  });

    // closing tree modal when open
  [
    window.document.getElementById("close-tree-modal"),
    window.document.getElementById("modal-backdrop"),
  ].forEach((element) => {
    element.addEventListener("click", (e) => {
      treeModal.open.get() && treeModal.open.set(false);
    });
  });

  // stop modals from closing when clicked
  [
    window.document.getElementById("success-modal"),
    window.document.getElementById("error-modal"),
    window.document.getElementById("tree-modal"),
  ].forEach((element) => {
    element.addEventListener("click", (e) => e.stopPropagation());
  });
}
