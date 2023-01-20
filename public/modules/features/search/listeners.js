import searchForm from "./data.js";
import getInput from "../../utils/getInput.util.js";
import onFormSubmit from "../../utils/onFormSubmit.util.js";
import validateInput from "../../utils/validateInput.util.js"

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
    //TODO search binary tree
    console.log(searchForm);
  });
}
