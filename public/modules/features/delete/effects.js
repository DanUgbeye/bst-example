import deleteForm from "./data.js";

export default function initEffects() {
  // handles showing error
  deleteForm.error.subscribe((value) => {
    const errorElement = window.document.getElementById("delete-item-error");
    const inputElement = window.document.getElementById("delete-item-input");
    if (errorElement) {
      if (value) {
        errorElement.innerHTML = value;
        errorElement.classList.remove("opacity-0");
        errorElement.classList.add("opacity-100");
        inputElement.classList.remove(
          "border-gray-400",
          "focus:border-blue-600"
        );
        inputElement.classList.add("border-red-600");
        inputElement.focus();
      } else {
        errorElement.classList.remove("opacity-100");
        errorElement.classList.add("opacity-0");
        inputElement.classList.remove("border-red-600");
        inputElement.classList.add("border-gray-400", "focus:border-blue-600");
      }
    }
  });  
} 