import * as employeesSagas from './employeesSagas';
import * as Effects from 'redux-saga/effects';
const fork: any = Effects.fork;

export default function* rootSaga(store: any) {
    yield fork(employeesSagas.watchEmployeesSagas, store);
}