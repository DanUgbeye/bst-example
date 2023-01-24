import { successModal, errorModal, treeModal } from "./data.js";

export default function initEffects() {
  successModal.open.subscribe((state) => {
    const backdropElement = window.document.getElementById("modal-backdrop");
    const successModalElement = window.document.getElementById("success-modal");
    const successMessageElement = window.document.getElementById(
      "success-modal-message"
    );
    if (state) {
      successMessageElement.innerHTML = successModal.message;
      backdropElement.classList.remove("invisible", "pointer-events-none", "opacity-0");
      backdropElement.classList.add("grid", "opacity-100");

      successModalElement.classList.remove("scale-0");
      successModalElement.classList.add("-translate-y-[50%]", "scale-100");
   } else {
      backdropElement.classList.remove("grid", "opacity-100");
      backdropElement.classList.add("invisible", "pointer-events-none", "opacity-0");

      successModalElement.classList.remove("-translate-y-[50%]", "scale-100");
      successModalElement.classList.add("scale-0");
    }
  });

  errorModal.open.subscribe((state) => {
    const backdropElement = window.document.getElementById("modal-backdrop");
    const errorModalElement = window.document.getElementById("error-modal");
    const errorMessageElement = window.document.getElementById(
      "error-modal-message"
    );
    if (state) {
      errorMessageElement.innerHTML = errorModal.message;
      backdropElement.classList.remove("invisible", "pointer-events-none", "opacity-0");
      backdropElement.classList.add("grid", "opacity-100");

      errorModalElement.classList.remove("scale-0");
      errorModalElement.classList.add("-translate-y-[50%]", "scale-100");
    } else {
      backdropElement.classList.remove("grid", "opacity-100");
      backdropElement.classList.add("invisible", "pointer-events-none", "opacity-0");

      errorModalElement.classList.remove("-translate-y-[50%]", "scale-100");
      errorModalElement.classList.add("scale-0");
    }
  });

  treeModal.open.subscribe((state) => {
    const backdropElement = window.document.getElementById("modal-backdrop");
    const treeModalElement = window.document.getElementById("tree-modal");
    const treeListElement = window.document.getElementById("tree-list");
    const treeMethodElement = window.document.getElementById("tree-method");
    if (state) {
      treeMethodElement.innerHTML = treeModal.method.get();
      treeListElement.innerHTML = treeModal.data.join(", ");
      backdropElement.classList.remove("invisible", "pointer-events-none", "opacity-0");
      backdropElement.classList.add("grid", "opacity-100");

      treeModalElement.classList.remove("scale-0");
      treeModalElement.classList.add("-translate-y-[50%]", "scale-100");
    } else {
      backdropElement.classList.remove("grid", "opacity-100");
      backdropElement.classList.add("invisible", "pointer-events-none", "opacity-0");

      treeModalElement.classList.remove("-translate-y-[50%]", "scale-100");
      treeModalElement.classList.add("scale-0");
    }
  });
}
