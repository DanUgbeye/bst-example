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
  });

  onFormSubmit("delete-item-form", () => {
    const isValid = validateInput(deleteForm.value.get());
    if (!isValid) {
      deleteForm.error.set("cannot delete empty item");
      return;
    }

    const deleted = BST.delete(deleteForm.value.get());
    if (deleted) {
      Modal.success(`element ${deleteForm.value.get()} deleted`);
    } else {
      Modal.error(`element ${deleteForm.value.get()} not found`);
    }

    // reset values
    const inputElement = window.document.getElementById("delete-item-input");
    inputElement.value = "";
    deleteForm.value.set("");
  });
}
