function ObservedData(initialValue) {
  let value = initialValue;
  let sub = [];

  function fire(val) {
    if (sub.length > 0) {
      sub.forEach((method) => {
        method(val);
      });
    }
  }

  return {
    set: function (val) {
      if(typeof val === "function") {
        value = val(value)
      } else {
        value = val;
      }
      fire(val);
    },

    get: function () {
      return value;
    },

    subscribe: function (method) {
      if (typeof method === "function") {
        sub.push(method);
      }
    },
  };
}

export default ObservedData;
