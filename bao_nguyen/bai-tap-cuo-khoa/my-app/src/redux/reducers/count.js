import { countAction } from "../constants/count";

const initialState = {
  count: 0,
};

const Count = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case countAction.CONG:
      return { ...state, count: state.count + 1 };
    case countAction.TRU:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export default Count;
