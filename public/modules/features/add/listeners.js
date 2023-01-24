import addForm from "./data.js";
import getInput from "../../utils/getInput.util.js";
import onFormSubmit from "../../utils/onFormSubmit.util.js";
import validateInput from "../../utils/validateInput.util.js";
import BST from "../../data/tree.data.js";
import { Modal } from "../modals/index.js";

export default function initListeners() {
  getInput("add-item-input", (value) => {
    addForm.error.get() && addForm.error.set("");
    addForm.value.set(value);
  });

  onFormSubmit("add-item-form", () => {
    const isValid = validateInput(addForm.value.get());
    if (!isValid) {
      addForm.error.set("cannot add empty item");
      return;
    }

    const added = BST.insert(addForm.value.get());
    if (added) {
      Modal.success(`Element ${addForm.value.get()} added`);
    } else {
      if (added === false) {
        Modal.error(`Element ${addForm.value.get()} already exists`);
      } else {
        Modal.error(`Failed to add ${addForm.value.get()}`);
      }
    }

    // reset values
    const inputElement = window.document.getElementById("add-item-input");
    inputElement.value = "";
    addForm.value.set("");
  });
}
