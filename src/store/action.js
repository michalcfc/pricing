export const addPack = id => {
  return {
    type: "CHOOSING_PACK",
    id
  };
};

export const addItems = (name, value, id) => {
  return {
    type: "ADD_ITEMS",
    name,
    value,
    id
  };
};

export const removeItems = (name, value, id) => {
  return {
    type: "REMOVE_ITEMS",
    name,
    value,
    id
  };
};

export const reservation = (value) => {
  return {
    type: "WANT_RESERVATION",
    value
  };
};

export const changeData = data => {
  return {
    type: "INVOICE_DATA",
    data
  };
};


export const payMethod = method => {
  return {
    type: "PAY_METHOD",
    method
  };
};
