import { actionsProduct } from '../actions/Product'

const initialState = {
    data: [],
    err: '',
    loading: false
};

const products = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case actionsProduct.GET_PRODUCT:
            return {...state, loading: true}
        case actionsProduct.GET_PRODUCT_SUCCESS:
            return {...state, loading: false, data: payload}
        case actionsProduct.GET_PRODUCT_FAIL:
            return {...state, loading: false, err: payload}
    
        default:
            return state
    }
}

export default products;