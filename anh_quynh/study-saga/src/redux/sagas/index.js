import { fork} from 'redux-saga/effects';
import product from './Product';

export default function* rootSaga(){
    yield fork(product)
}