import { EMPLOYEES_ACTIONS } from "../constants";

type Employee = {
    _id?: string,
    first_name: string,
    last_name: string,
    email: string,
    number: string,
    gender: string
}

type ActionResponse = {
    type: string,
    payload: any
}

export function getEmployees(): ActionResponse {
    return { 
        type: EMPLOYEES_ACTIONS.GET_EMPLOYEES,
        payload: {}
    }
}

export function getEmployeesSuccess(employees: any): ActionResponse {
    return { 
        type: EMPLOYEES_ACTIONS.GET_EMPLOYEES_SUCCESS,
        payload: { employees }
    }
}

export function getEmployeesError(error: string): ActionResponse {
    return { 
        type: EMPLOYEES_ACTIONS.GET_EMPLOYEES_ERROR,
        payload: { error }
    }
}

export function addEmployee(employee: Employee): ActionResponse {
    return {
        type: EMPLOYEES_ACTIONS.ADD_EMPLOYEE,
        payload: { employee }
    }
}

export function addEmployeeSuccess(message: string): ActionResponse {
    return {
        type: EMPLOYEES_ACTIONS.ADD_EMPLOYEE_SUCCESS,
        payload: { message }
    }
}

export function addEmployeeError(error: string): ActionResponse {
    return {
        type: EMPLOYEES_ACTIONS.ADD_EMPLOYEE_ERROR,
        payload: { error }
    }
}

export function getEmployeeById(id: string): ActionResponse {
    return {
        type: EMPLOYEES_ACTIONS.GET_EMPLOYEE_BY_ID,
        payload: { id }
    }
}

export function getEmployeeByIdSuccess(employee: Employee): ActionResponse {
    return {
        type: EMPLOYEES_ACTIONS.GET_EMPLOYEE_BY_ID_SUCCESS,
        payload: { employee }
    }
}

export function getEmployeeByIdError(error: string): ActionResponse {
    return {
        type: EMPLOYEES_ACTIONS.GET_EMPLOYEE_BY_ID_ERROR,
        payload: { error }
    }
}

export function updateEmployee(id: string, employee: Employee): ActionResponse {
    return {
        type: EMPLOYEES_ACTIONS.UPDATE_EMPLOYEE,
        payload: { id, employee }
    }
}

export function updateEmployeeSuccess(message: string): ActionResponse {
    return {
        type: EMPLOYEES_ACTIONS.UPDATE_EMPLOYEE_SUCCESS,
        payload: { message }
    }
}

export function updateEmployeeError(error: string): ActionResponse {
    return {
        type: EMPLOYEES_ACTIONS.UPDATE_EMPLOYEE_ERROR,
        payload: { error }
    }
}

export function deleteEmployee(id: string): ActionResponse {
    return {
        type: EMPLOYEES_ACTIONS.DELETE_EMPLOYEE,
        payload: { id }
    }
}

export function deleteEmployeeSuccess(message: string): ActionResponse {
    return {
        type: EMPLOYEES_ACTIONS.DELETE_EMPLOYEE_SUCCESS,
        payload: { message }
    }
}

export function deleteEmployeeError(error: string): ActionResponse {
    return {
        type: EMPLOYEES_ACTIONS.DELETE_EMPLOYEE_ERROR,
        payload: { error }
    }
}
