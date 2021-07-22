import { fork } from "redux-saga/effects";
import product from "./product";
export default function* rootSaga() {
  yield fork(product);
}
