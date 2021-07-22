import { fork } from 'redux-saga/effects';
import userSaga from './User';
import product from './Product'

export default function* rootSaga() {
    yield fork(userSaga)
    yield fork(product)
}

// 1. Hook nó dispatch 1 action - trọc vào root saga
// 2. User main start
// 3. register start
// 4. register success start || register error start
// 5. register end
// 6. succes || error end
// 7. Uer main end