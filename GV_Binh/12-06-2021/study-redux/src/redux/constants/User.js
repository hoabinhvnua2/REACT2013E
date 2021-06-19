export const userAction = {
  GET_USER: "GET_USER",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_FAI: "GET_USER_FAI",

  ADD_USER: "ADD_USER",
};

export const addNewUser = (param) => ({
  type: userAction.ADD_USER,
  payload: { user: param },
});
