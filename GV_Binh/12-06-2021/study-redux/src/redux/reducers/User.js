import { userAction } from "../constants/User";

const initialState = {
  data: [
    {
      user: "React",
    },
  ],
  err: "",
  loading: false,
};


if (localStorage.getItem("users")) {
  initialState.data = JSON.parse(localStorage.getItem("users"));
}

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userAction.ADD_USER:
      return { ...state, data: [...state.data, payload] };
    case userAction.UPDATE_USER:
      return { ...state, data: payload };
    case userAction.DELETE_USER:
      return { ...state, data: payload };
    // case userAction.GET_USER_SUCCESS:
    //     return {...state, loading: false, data: payload}
    // case userAction.GET_USER_FAI:
    //     return {...state, loading: false, err: payload}
    default:
      return state;
  }
};

export default user;
