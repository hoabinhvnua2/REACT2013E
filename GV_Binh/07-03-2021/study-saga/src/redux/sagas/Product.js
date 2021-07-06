import axios from "axios";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import productApi from '../../services/Product';
import {actionsProduct} from '../actions/Product';

export function* fetchProduct() {
    try {
        const resp = yield call(productApi.getProduct)
        yield put({type: actionsProduct.GET_PRODUCT_SUCCESS, payload: resp})
    } catch (error) {
        yield put({type: actionsProduct.GET_PRODUCT_FAIL, payload: error})
    }
} 

export function* watchFetchProduct() {
    yield takeLatest(actionsProduct.GET_PRODUCT, fetchProduct)
}

export default function* reward() {
    yield fork(watchFetchProduct)
}