import searchForm from "./data.js";
import getInput from "../../utils/getInput.util.js";
import onFormSubmit from "../../utils/onFormSubmit.util.js";
import validateInput from "../../utils/validateInput.util.js";
import BST from "../../data/tree.data.js";
import { successModal, errorModal } from "../modals/data.js";

export default function initListeners() {
  getInput("search-item-input", (value) => {
    searchForm.error.get() && searchForm.error.set("");
    searchForm.value.set(value);
  });

  onFormSubmit("search-item-form", () => {
    const isValid = validateInput(searchForm.value.get());
    if (!isValid) {
      searchForm.error.set("cannot search empty item");
      return;
    }

    const element = BST.find(searchForm.value.get());
    if (element) {
      successModal.message = `element ${element.data} found`;
      successModal.open.set(true);
    } else {
      errorModal.message = `element ${searchForm.value.get()} not found`;
      errorModal.open.set(true);
    }

    // reset values
    const inputElement = window.document.getElementById("search-item-input");
    inputElement.value = "";
    searchForm.value.set("");
  });
}
