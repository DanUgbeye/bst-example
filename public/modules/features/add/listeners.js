import addForm from "./data.js";
import getInput from "../../utils/getInput.util.js";
import onFormSubmit from "../../utils/onFormSubmit.util.js";
import validateInput from "../../utils/validateInput.util.js";
import database from "../../data/database.js";
import { Modal } from "../modals/index.js";

export default function initListeners() {
  getInput("add-item-input", (value) => {
    addForm.error.get() && addForm.error.set("");
    addForm.value.set(value);
    const validation = validateInput(addForm.value.get());
    if (!validation.valid) {
      addForm.error.set(validation.message);
    }
  });

  window.document
    .getElementById("add-item-input")
    .addEventListener("blur", () => {
      !addForm.value.get() && addForm.error.get() && addForm.error.set("");
    });

  onFormSubmit("add-item-form", () => {
    const validation = validateInput(addForm.value.get());
    if (!validation.valid) {
      return addForm.error.set(validation.message);
    }

    const addValue = Number(addForm.value.get());
    const exists = database.indexOf(addValue);
    
    if (exists === -1) {
      // add to database array
      database.push(addValue);
      
      Modal.success(`Element ${addValue} added`);
      // reset values
      const inputElement = window.document.getElementById("add-item-input");
      inputElement.value = "";
      addForm.value.set("");
    } else {
      if (exists !== -1) {
        Modal.error(`Element ${addValue} already exists`);
      } else {
        Modal.error(`Failed to add ${addValue}`);
      }
    }
  });
}
