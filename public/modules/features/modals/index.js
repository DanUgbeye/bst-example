import initEffects from "./effects.js";
import initListeners from "./listeners.js";
import { successModal, errorModal, treeModal } from "./data.js";

export default function initializeModals() {
  initEffects();
  initListeners();
}

export const Modal = {
  // sets message and shows success modal
  success: function (message = "") {
    successModal.message = message;
    successModal.open.set(true);
  },

  // sets message and shows error modal
  error: function (message = "") {
    errorModal.message = message;
    errorModal.open.set(true);
  },

  // sets elements data and shows tree modal
  tree: function (method = "Preorder", data = []) {
    treeModal.method.set(method);
    treeModal.data = data;
    treeModal.open.set(true);
  },
};
