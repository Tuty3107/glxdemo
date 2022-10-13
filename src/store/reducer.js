const initState = {
  label1: "Chon phim",
  label3: "Chon rap",
  label2: "Chon ngay",
  label4: "Chon suat"
};
const GETLABEL1 = "get_label1";
const GETLABEL2 = "get_label2";
const GETLABEL3 = "get_label3";
const GETLABEL4 = "get_label4";

const getLabel1 = (payload) => {
  return {
    type: GETLABEL1,
    payload,
  };
};
const getLabel2 = (payload) => {
  return {
    type: GETLABEL2,
    payload,
  };
};
const getLabel3 = (payload) => {
  return {
    type: GETLABEL3,
    payload,
  };
};
const getLabel4 = (payload) => {
  return {
    type: GETLABEL4,
    payload,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case GETLABEL1:
      return {
        ...state,
        label1: action.payload,
      };
    case GETLABEL2:
      return {
        ...state,
        label2: action.payload,
      };
    case GETLABEL3:
      return {
        ...state,
        label3: action.payload,
      };
    case GETLABEL4:
      return {
        ...state,
        label4: action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
};

export { initState, getLabel1, getLabel2, getLabel3, getLabel4 };
export default reducer;
