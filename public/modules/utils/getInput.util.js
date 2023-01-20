/**
 * gets an element input value
 * @param {string} id element id
 * @param {(value: string) => void} callback callback with input value
 */
function getInput(id, callback) {
  const inputElement = window.document.getElementById(id);
  if (!inputElement) return false;

  inputElement.addEventListener("input", (e) => {
    return callback(e.target.value);
  });
  return true;
}

export default getInput;
