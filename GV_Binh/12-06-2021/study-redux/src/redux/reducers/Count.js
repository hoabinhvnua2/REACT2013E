import { countAction } from "../constants/Count";
const initialState = {
  count: 0,
};

const count = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case countAction.CONG:
      return {...state, count: state.count + 1}
    default:
     return state
  }
};

export default count;