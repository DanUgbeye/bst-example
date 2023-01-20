import deleteForm from "./data.js";
import getInput from "../../utils/getInput.util.js";
import onFormSubmit from "../../utils/onFormSubmit.util.js";
import validateInput from "../../utils/validateInput.util.js"

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
    //TODO delete item from tree
    console.log(deleteForm);
  });
}
