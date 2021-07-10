import { actionChannel } from "@redux-saga/core/effects";
import {actionsProduct} from "../actions/Product"

const initialState = {
    data: [],
    err: "",
    loading: false
};

const products = (state = initialState, actions)=> {
    const {type, payload} = actions;

    switch (type){
        case actionsProduct.GET_PRODUCT:
            return {...state, loading: true}
        case actionsProduct.GET_PRODUCT_SUCCESS:
            return {...state, loading: false, data: payload}
        case actionsProduct.GET_PRODUCT_FAIL:
            return {...state, loading: false, err: payload}
        case actionsProduct.ADD_PRODUCT:
            state.data.push(payload);
            return {...state};
       case actionsProduct.EDIT_PRODUCT:
            state.data[payload.index] = payload.product;
            return {...state};
        case actionsProduct.DELETE_PRODUCT:
            state.data.splice(payload,1)
            return {...state}

        default:
            return state;
    }
}

export default products;