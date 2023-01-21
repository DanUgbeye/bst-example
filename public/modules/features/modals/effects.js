import { successModal, errorModal, treeModal } from "./data.js";

export default function initEffects() {
  successModal.open.subscribe((state) => {
    const backdropElement = window.document.getElementById("modal-backdrop");
    const successModalElement = window.document.getElementById("success-modal");
    const successMessageElement = window.document.getElementById("success-modal-message");
    if (state) {
      successMessageElement.innerHTML = successModal.message;
      backdropElement.classList.remove("hidden");
      backdropElement.classList.add("grid");

      successModalElement.classList.remove("hidden");
      successModalElement.classList.add("grid");
    } else {
      backdropElement.classList.remove("grid");
      backdropElement.classList.add("hidden");

      successModalElement.classList.remove("grid");
      successModalElement.classList.add("hidden");
    }
  });

  errorModal.open.subscribe((state) => {
    const backdropElement = window.document.getElementById("modal-backdrop");
    const errorModalElement = window.document.getElementById("error-modal");
    const errorMessageElement = window.document.getElementById("error-modal-message");
    if (state) {
      errorMessageElement.innerHTML = errorModal.message;
      backdropElement.classList.remove("hidden");
      backdropElement.classList.add("grid");

      errorModalElement.classList.remove("hidden");
      errorModalElement.classList.add("grid");
    } else {
      backdropElement.classList.remove("grid");
      backdropElement.classList.add("hidden");

      errorModalElement.classList.remove("grid");
      errorModalElement.classList.add("hidden");
    }
  });

  treeModal.open.subscribe((state) => {
    const backdropElement = window.document.getElementById("modal-backdrop");
    const treeModalElement = window.document.getElementById("tree-modal");
    const treeListElement = window.document.getElementById("tree-list");
    if (state) {
      treeListElement.innerHTML = treeModal.data.join(", ");
      backdropElement.classList.remove("hidden");
      backdropElement.classList.add("grid");

      treeModalElement.classList.remove("hidden");
      treeModalElement.classList.add("grid");
    } else {
      backdropElement.classList.remove("grid");
      backdropElement.classList.add("hidden");

      treeModalElement.classList.remove("grid");
      treeModalElement.classList.add("hidden");
    }
  });
}
