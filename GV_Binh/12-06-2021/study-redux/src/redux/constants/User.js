export const userAction = {
  GET_USER: "GET_USER",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_FAI: "GET_USER_FAI",

  ADD_USER: "ADD_USER",
  UPDATE_USER: "UPDATE_USER",
  DELETE_USER: "DELETE_USER"
};

export const addNewUser = (param) => ({
  type: userAction.ADD_USER,
  payload: { user: param },
});

export const updateUser = (param) => ({
  type: userAction.UPDATE_USER,
  payload: param,
});

export const deleteUser = (param) => ({
  type: userAction.DELETE_USER,
  payload: param,
});
