import { call, fork, put, takeLatest } from "redux-saga/effects";
import { productAciton } from "../constants/products";

import producApi from "../../services/produc";
export function* fetchProduc() {
  try {
    const resp = yield call(producApi.getProduct());
    yield put({ type: productAciton.GET_PRODUCT_TRUE, payload: resp });
  } catch (error) {
    yield put({ type: productAciton.GET_PRODUCT_FALSE, payload: error });
  }
}

export function* watchFetProduct() {
  yield takeLatest(productAciton.GET_PRODUCT, fetchProduc());
}

export default function* rewward() {
  yield fork(watchFetProduct());
}
