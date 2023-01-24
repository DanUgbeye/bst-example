import addForm from "./data.js";
import getInput from "../../utils/getInput.util.js";
import onFormSubmit from "../../utils/onFormSubmit.util.js";
import validateInput from "../../utils/validateInput.util.js";
import BST from "../../data/tree.data.js";
import { successModal, errorModal } from "../modals/data.js";

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
    //TODO add item to tree
    const added = BST.insert(addForm.value.get());
    if (added) {
      successModal.message = `Element ${addForm.value.get()} added`;
      successModal.open.set(true);
    } else {
      if(added === false) {
        errorModal.message = `Element ${addForm.value.get()} already exists`;
      errorModal.open.set(true);
      } else {
        errorModal.message = `Failed to add ${addForm.value.get()}`;
        errorModal.open.set(true);
      }
    }

    // reset values
    const inputElement = window.document.getElementById("add-item-input");
    inputElement.value = "";
    addForm.value.set("");
  });
}
