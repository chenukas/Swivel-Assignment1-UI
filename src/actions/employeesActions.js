import { EMPLOYEES_ACTIONS } from "../constants";

export function getEmployees() {
    return { 
        type: EMPLOYEES_ACTIONS.GET_EMPLOYEES,
        payload: {}
    }
}

export function getEmployeesSuccess(employees) {
    return { 
        type: EMPLOYEES_ACTIONS.GET_EMPLOYEES_SUCCESS,
        payload: { employees }
    }
}

export function getEmployeesError(error) {
    return { 
        type: EMPLOYEES_ACTIONS.GET_EMPLOYEES_ERROR,
        payload: { error }
    }
}

export function addEmployee(employee) {
    return {
        type: EMPLOYEES_ACTIONS.ADD_EMPLOYEE,
        payload: { employee }
    }
}

export function addEmployeeSuccess(message) {
    return {
        type: EMPLOYEES_ACTIONS.ADD_EMPLOYEE_SUCCESS,
        payload: { message }
    }
}

export function addEmployeeError(error) {
    return {
        type: EMPLOYEES_ACTIONS.ADD_EMPLOYEE_ERROR,
        payload: { error }
    }
}

export function getEmployeeById(id) {
    return {
        type: EMPLOYEES_ACTIONS.GET_EMPLOYEE_BY_ID,
        payload: { id }
    }
}

export function getEmployeeByIdSuccess(employee) {
    return {
        type: EMPLOYEES_ACTIONS.GET_EMPLOYEE_BY_ID_SUCCESS,
        payload: { employee }
    }
}

export function getEmployeeByIdError(error) {
    return {
        type: EMPLOYEES_ACTIONS.GET_EMPLOYEE_BY_ID_ERROR,
        payload: { error }
    }
}

export function updateEmployee(id, employee) {
    return {
        type: EMPLOYEES_ACTIONS.UPDATE_EMPLOYEE,
        payload: { id, employee }
    }
}

export function updateEmployeeSuccess(message) {
    return {
        type: EMPLOYEES_ACTIONS.UPDATE_EMPLOYEE_SUCCESS,
        payload: { message }
    }
}

export function updateEmployeeError(error) {
    return {
        type: EMPLOYEES_ACTIONS.UPDATE_EMPLOYEE_ERROR,
        payload: { error }
    }
}

export function deleteEmployee(id) {
    return {
        type: EMPLOYEES_ACTIONS.DELETE_EMPLOYEE,
        payload: { id }
    }
}

export function deleteEmployeeSuccess(message) {
    return {
        type: EMPLOYEES_ACTIONS.DELETE_EMPLOYEE_SUCCESS,
        payload: { message }
    }
}

export function deleteEmployeeError(error) {
    return {
        type: EMPLOYEES_ACTIONS.DELETE_EMPLOYEE_ERROR,
        payload: { error }
    }
}
