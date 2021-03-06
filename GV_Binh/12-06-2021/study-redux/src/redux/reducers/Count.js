import { countAction } from "../constants/Count";
const initialState = {
  count: 0,
};

const count = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case countAction.INCREMENT:
      return {...state, count: state.count + 1}
    case countAction.DECREMENT:
      return {...state, count: state.count - 1}
    default:
     return state
  }
};

export default count;