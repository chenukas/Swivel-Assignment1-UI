import { fork } from 'redux-saga/effects';
import * as employeesSagas from './employeesSagas';

export default function* rootSaga(store) {
    yield fork(employeesSagas.watchEmployeesSagas, store);
}