import ACTIONS from "../../assets/constant/actionsConstant";

const fetchReducer = (state = {}, action) => {
  const { type, name } = action;
  if (type === ACTIONS.FETCH_START) {
    return { ...state, [name]: true };
  }
  if (type === ACTIONS.FETCH_END) {
    return delete { ...state }[name];
  }
  return state;
};

export default fetchReducer;