export interface EmployeesState {
    employees: any,
    employee: any,
    error: any,
    message: any
}

const initialState: EmployeesState = {
    employees: [],
    employee: null,
    error: null,
    message: null
}

export default initialState;