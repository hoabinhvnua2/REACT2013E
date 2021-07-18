import { nameAction } from "../constants/name";

const idState = {
  name: "bao",
  tuoi: 18,
  nguoiYeu: "ko",
};

const Name = (state = idState, action) => {
  const { type } = action;

  switch (type) {
    case nameAction.tang:
      return { ...state, tuoi: state.tuoi + 1 };
    case nameAction.giam:
      return { ...state, tuoi: state.tuoi - 1 };

    default:
      return state;
  }
};

export default Name;
