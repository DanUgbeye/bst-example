import searchForm from "./data.js";

export default function initEffects() {
  // handles showing error
  searchForm.error.subscribe((value) => {
    const element = window.document.getElementById("search-item-error");
    const inputElement = window.document.getElementById("search-item-input");
    if (element) {
      if (value) {
        element.innerHTML = value;
        element.classList.remove("opacity-0");
        element.classList.add("opacity-100");
        inputElement.classList.remove(
          "border-gray-400",
          "focus:border-blue-600"
        );
        inputElement.classList.add("border-red-600");
        inputElement.focus();
      } else {
        element.classList.remove("opacity-100");
        element.classList.add("opacity-0");
        inputElement.classList.remove("border-red-600");
        inputElement.classList.add("border-gray-400", "focus:border-blue-600");
      }
    }
  });  
} 