import deleteForm from "./data.js";
import getInput from "../../utils/getInput.util.js";
import onFormSubmit from "../../utils/onFormSubmit.util.js";
import validateInput from "../../utils/validateInput.util.js";
import  database from "../../data/database.js";
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

  window.document
    .getElementById("delete-item-input")
    .addEventListener("blur", () => {
      !deleteForm.value.get() &&
        deleteForm.error.get() &&
        deleteForm.error.set("");
    });

  onFormSubmit("delete-item-form", () => {
    const validation = validateInput(deleteForm.value.get());
    if (!validation.valid) {
      return deleteForm.error.set(validation.message);
    }

    const deleteValue = Number(deleteForm.value.get());
    let index = database.indexOf(deleteValue);
    if (index !== -1) {
      // delete from database
      database.splice(index, 1);
      
      Modal.success(`element ${deleteValue} deleted`);
      // reset values
      const inputElement = window.document.getElementById("delete-item-input");
      inputElement.value = "";
      deleteForm.value.set("");
    } else {
      Modal.error(`element ${deleteValue} not found`);
    }
  });
}
