import ObservedData from "../../utils/observedData.util.js";

const searchForm = {
  value: new ObservedData(""),
  error: new ObservedData(""),
  modalOpen: new ObservedData(false),
};

export default searchForm;