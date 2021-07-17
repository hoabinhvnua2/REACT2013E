import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/reducers';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/sagas';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddle =  createSagaMiddleware()
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddle)))

sagaMiddle.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
