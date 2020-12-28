import createSagaMiddleware from 'redux-saga';
import { globalSaga } from "../saga/globalSaga";
import counterReducer from './actionCounter';
import { createStore, applyMiddleware } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const sagaMibbleWare = createSagaMiddleware();

export const store = createStore(counterReducer, applyMiddleware(sagaMibbleWare));

sagaMibbleWare.run(globalSaga);

