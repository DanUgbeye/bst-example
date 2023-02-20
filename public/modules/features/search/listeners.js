import searchForm from "./data.js";
import getInput from "../../utils/getInput.util.js";
import onFormSubmit from "../../utils/onFormSubmit.util.js";
import validateInput from "../../utils/validateInput.util.js";
import database from "../../data/database.js";
import BinarySearchTree from "../../binary-search-tree/index.js";
import { Modal } from "../modals/index.js";

export default function initListeners() {
  getInput("search-item-input", (value) => {
    searchForm.error.get() && searchForm.error.set("");
    searchForm.value.set(value);
    const validation = validateInput(searchForm.value.get());
    if (!validation.valid) {
      searchForm.error.set(validation.message);
    }
  });

  window.document.getElementById("search-item-input").addEventListener("blur", () => {
    !searchForm.value.get() && searchForm.error.get() && searchForm.error.set("");
  })

  onFormSubmit("search-item-form", () => {
    const validation = validateInput(searchForm.value.get());
    if (!validation.valid) {
      return searchForm.error.set(validation.message);
    }

    const searchValue = Number(searchForm.value.get());
    const BST = new BinarySearchTree(database);
    // search tree
    const found = BST.find(searchValue);    

    if (found) {
      Modal.success(`element ${searchValue} found`);
      // reset values
      const inputElement = window.document.getElementById("search-item-input");
      inputElement.value = "";
      searchForm.value.set("");
    } else {
      Modal.error(`element ${searchValue} not found`);
    }

  });
}
