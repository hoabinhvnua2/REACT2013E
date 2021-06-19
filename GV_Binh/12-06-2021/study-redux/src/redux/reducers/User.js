import { userAction } from '../constants/User';

const initialState = {
    data: [{
        user: 'React'
    }],
    err: '',
    loading: false
}

const user = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case userAction.ADD_USER:
            return {...state, data: [...state.data, payload]}
        // case userAction.GET_USER_SUCCESS:
        //     return {...state, loading: false, data: payload}
        // case userAction.GET_USER_FAI:
        //     return {...state, loading: false, err: payload}
        default:
            return state
    }
}

export default user;