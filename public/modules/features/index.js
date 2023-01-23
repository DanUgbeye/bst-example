import initializeAddForm from "./add/index.js";
import initializeDeleteForm from "./delete/index.js";
import initializeModals from "./modals/index.js";
import initializeSearchForm from "./search/index.js";
import initializeTreeTraversals from "./tree-traversal/index.js";

export default function initializefeatures() {
  initializeAddForm();
  initializeDeleteForm();
  initializeSearchForm();
  initializeModals();
  initializeTreeTraversals();
}
