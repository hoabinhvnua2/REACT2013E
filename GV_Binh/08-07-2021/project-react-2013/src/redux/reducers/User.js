import { userAction } from '../constants/User';
import produce from "immer";

const inititalSate = {
    data: [],
    userList: [],
    error: '',
    loading: false
}


const user = (state = inititalSate, actions) => produce(state, (draft) => {
    const { type, payload } = actions;

    switch (type) {
        case userAction.REGISTER:
        case userAction.GET_USER:
            draft.loading = true;
            break;
        case userAction.REGISTER_SUCCESS:
        case userAction.GET_USER_SUCCESS:
            draft.loading = false;
            draft.userList = payload;
            break;
        case userAction.REGISTER_FAILTE:
        case userAction.GET_USER_FAILTE:
            draft.loading = false;
            draft.error = payload;
            break;
        default:
            break;
    }
}) 

export default user;