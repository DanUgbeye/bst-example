/**
 * gets an element input value
 * @param {string} id element id
 * @param {() => void} callback callback to run on form submit
 */
function onFormSubmit(id, callback) {
  const inputElement = window.document.getElementById(id);
  if (!inputElement) return false;

  inputElement.addEventListener("submit", (e) => {
    e.preventDefault()
    return callback();
  });
  return true;
}

export default onFormSubmit;
