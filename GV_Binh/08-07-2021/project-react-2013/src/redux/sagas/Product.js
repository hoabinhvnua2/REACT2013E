

import { fork, put, takeLatest, call } from "redux-saga/effects";
import { productAction } from '../constants/Product';
import { productApi } from '../../services/Product';

export function* getProducts() {
    try {
        const resp = yield call(productApi.getProduct)
        yield put({type: productAction.GET_PRODUCT_SUCCESS, payload: resp})
    } catch (error) {
        yield put({type: productAction.GET_PRODUCT_FAILTE, payload: error})
    }
}


export function* watchProduct() {
    yield takeLatest(productAction.GET_PRODUCT, getProducts)
}

export default function* reward() {
    yield fork(watchProduct)
}
