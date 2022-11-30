import { takeEvery, put, call, select } from 'redux-saga/effects';
import { EMPLOYEES_ACTIONS } from '../constants';
import { employeesActions } from '../actions';
import { processRequest } from '../services/Api';
import { GET_EMPLOYEES, ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from '../constants/api';
import { search } from '../helpers/arrayHelper';

function* handleGetEmployees(action) {
    try {
        const { data } = yield call(processRequest, GET_EMPLOYEES);
        if (data) {
            yield put(employeesActions.getEmployeesSuccess(data.data));
        }
    } catch (e) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(employeesActions.getEmployeesError(error || e));
    }
}

function* handleAddEmployee(action) {
    try {
        const { employee } = action.payload;
        const header = { 'Accept': 'application/json' }
        const requestPayload = employee
        const { data } = yield call(processRequest, ADD_EMPLOYEE, 'POST', requestPayload, header)
        if (data) {
            yield put(employeesActions.addEmployeeSuccess('Employee is added successfully'));
            yield put(employeesActions.getEmployees());
        }
    } catch (e) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(employeesActions.addEmployeeError(error || e));
    }
}

function* handleGetEmployeeById(action) {
    try {
        const { id } = action.payload;
        const state = yield select();
        const { employeesState : { employees }} = state;
        const res = search(id, employees);
        yield put(employeesActions.getEmployeeByIdSuccess(res)); 
    } catch (e) {
        yield put(employeesActions.getEmployeeByIdError(e));
    }
}

function* handleUpdateEmployee(action) {
    try {
        const { id, employee } = action.payload;
        const header = { 'Accept': 'application/json' }
        const requestPayload = employee
        const { data } = yield call(processRequest, UPDATE_EMPLOYEE(id), 'PUT', requestPayload, header)
        if (data) {
            yield put(employeesActions.updateEmployeeSuccess('Employee is updated successfully'));
            yield put(employeesActions.getEmployees());
        }
    } catch (e) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(employeesActions.updateEmployeeError(error || e));
    }
}

function* handleDeleteEmployee(action) {
    try {
        const { id } = action.payload;
        const header = { 'Accept': 'application/json' };
        const { data } = yield call(processRequest, DELETE_EMPLOYEE(id), 'DELETE', {}, header);
        if (data) {
            yield put(employeesActions.deleteEmployeeSuccess('Employee is deleted successfully'));
            yield put(employeesActions.getEmployees());
        }
    } catch (e) {
        const { response } = e || {};
        const { data } = response || {};
        const { error } = data;
        yield put(employeesActions.deleteEmployeeError(error || e));
    }
}

export function* watchEmployeesSagas() {
    yield takeEvery(EMPLOYEES_ACTIONS.GET_EMPLOYEES, handleGetEmployees);
    yield takeEvery(EMPLOYEES_ACTIONS.ADD_EMPLOYEE, handleAddEmployee);
    yield takeEvery(EMPLOYEES_ACTIONS.GET_EMPLOYEE_BY_ID, handleGetEmployeeById);
    yield takeEvery(EMPLOYEES_ACTIONS.UPDATE_EMPLOYEE, handleUpdateEmployee);
    yield takeEvery(EMPLOYEES_ACTIONS.DELETE_EMPLOYEE, handleDeleteEmployee);
}