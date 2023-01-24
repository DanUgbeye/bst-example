/**
 * validates user input
 * @param {string} value input value to validate
 */
export default function validateInput(value) {
  if (!value) return { valid: false, message: "value cannot be empty" };
  if (isNaN(Number(value)))
    return {
      valid: false,
      message: "only numbers are allowed",
    };
  return { valid: true, message: "value is valid" };
}
