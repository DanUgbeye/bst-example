import deleteForm from "./data.js";
import getInput from "../../utils/getInput.util.js";
import onFormSubmit from "../../utils/onFormSubmit.util.js";
import validateInput from "../../utils/validateInput.util.js";
import BST from "../../data/tree.data.js";
import { Modal } from "../modals/index.js";

export default function initListeners() {
  getInput("delete-item-input", (value) => {
    deleteForm.error.get() && deleteForm.error.set("");
    deleteForm.value.set(value);
    const validation = validateInput(deleteForm.value.get());
    if (!validation.valid) {
      deleteForm.error.set(validation.message);
    }
  });

  window.document.getElementById("delete-item-input").addEventListener("blur", () => {
    !deleteForm.value.get() && deleteForm.error.get() && deleteForm.error.set("");
  })

  onFormSubmit("delete-item-form", () => {
    const validation = validateInput(deleteForm.value.get());
    if (!validation.valid) {
      return deleteForm.error.set(validation.message);
    }

    const deleted = BST.delete(Number(deleteForm.value.get()));
    if (deleted) {
      Modal.success(`element ${deleteForm.value.get()} deleted`);
      // reset values
      const inputElement = window.document.getElementById("delete-item-input");
      inputElement.value = "";
      deleteForm.value.set("");
    } else {
      Modal.error(`element ${deleteForm.value.get()} not found`);
    }
  });
}
