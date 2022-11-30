import { INITIAL_STATE, EMPLOYEES_ACTIONS } from "../constants";

export default function employeesReducer(
    state = INITIAL_STATE.EMPLOYEE_STATE,
    action
) {
    const { employees, employee, message, error } = action.payload || {};

    switch (action.type) {
        case EMPLOYEES_ACTIONS.GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees,
            };
        case EMPLOYEES_ACTIONS.GET_EMPLOYEE_BY_ID_SUCCESS: {
            return {
                ...state,
                employee
            };
        }
        case EMPLOYEES_ACTIONS.ADD_EMPLOYEE_SUCCESS:
        case EMPLOYEES_ACTIONS.UPDATE_EMPLOYEE_SUCCESS: 
        case EMPLOYEES_ACTIONS.DELETE_EMPLOYEE_SUCCESS: {
            return {
                ...state,
                message
            }
        }
        case EMPLOYEES_ACTIONS.GET_EMPLOYEES_ERROR:
        case EMPLOYEES_ACTIONS.ADD_EMPLOYEE_ERROR:
        case EMPLOYEES_ACTIONS.GET_EMPLOYEE_BY_ID_ERROR:
        case EMPLOYEES_ACTIONS.UPDATE_EMPLOYEE_ERROR:
        case EMPLOYEES_ACTIONS.DELETE_EMPLOYEE_ERROR: {
            return {
                ...state,
                error
            }
        }
        default:
            return state;
    }
}