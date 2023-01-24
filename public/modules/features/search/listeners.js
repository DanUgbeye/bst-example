import searchForm from "./data.js";
import getInput from "../../utils/getInput.util.js";
import onFormSubmit from "../../utils/onFormSubmit.util.js";
import validateInput from "../../utils/validateInput.util.js";
import BST from "../../data/tree.data.js";
import { Modal } from "../modals/index.js";

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
      Modal.success(`element ${element.data} found`);
    } else {
      Modal.error(`element ${searchForm.value.get()} not found`);
    }

    // reset values
    const inputElement = window.document.getElementById("search-item-input");
    inputElement.value = "";
    searchForm.value.set("");
  });
}
