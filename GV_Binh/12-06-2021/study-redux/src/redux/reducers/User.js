import { userAction } from '../constants/User';

const initialState = {
    data: [],
    err: '',
    loading: false
}

const user = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case userAction.GET_USER:
            return {...state, loading: true}
        case userAction.GET_USER_SUCCESS:
            return {...state, loading: false, data: payload}
        case userAction.GET_USER_FAI:
            return {...state, loading: false, err: payload}
        default:
            return state
    }
}

export default user;