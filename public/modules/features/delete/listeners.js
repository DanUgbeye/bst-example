import deleteForm from "./data.js";
import getInput from "../../utils/getInput.util.js";
import onFormSubmit from "../../utils/onFormSubmit.util.js";
import validateInput from "../../utils/validateInput.util.js";
import BST from "../../data/tree.data.js";
import { successModal, errorModal } from "../modals/data.js";

export default function initListeners() {
  getInput("delete-item-input", (value) => {
    deleteForm.error.get() && deleteForm.error.set("");
    deleteForm.value.set(value);
  });

  onFormSubmit("delete-item-form", () => {
    const isValid = validateInput(deleteForm.value.get());
    if (!isValid) {
      deleteForm.error.set("cannot delete empty item");
      return;
    }

    const deleted = BST.delete(deleteForm.value.get());
    if (deleted) {
      successModal.message = `element ${deleteForm.value.get()} deleted`;
      successModal.open.set(true);
    } else {
      errorModal.message = "element not found";
      errorModal.open.set(true);
    }

    // reset values
    const inputElement = window.document.getElementById("delete-item-input");
    inputElement.value = "";
    deleteForm.value.set("");
  });
}
