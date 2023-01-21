import ObservedData from "../../utils/observedData.util.js";

const successModal = {
  open: new ObservedData(false),
  message: "",
};

const errorModal = {
  open: new ObservedData(false),
  message: "",
};

const treeModal = {
  open: new ObservedData(false),
  data: new ObservedData([]),
};



export { successModal, errorModal, treeModal };
