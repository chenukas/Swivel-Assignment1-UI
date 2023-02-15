export interface EmployeesState {
    employees: any,
    employee: any,
    error: any,
    message: any
}

const initialState: EmployeesState = {
    employees: [{
        "_id": "636deb60d0fafa1da15e1221",
        "first_name": "Lindsay",
        "last_name": "Herman",
        "email": "Ewald.Kunde@gmail.com",
        "number": "+94771274218",
        "gender": "F",
        "id": 2,
        "photo": "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
        "_id": "636dec28d0fafa1da15e1225",
        "first_name": "Gerda",
        "last_name": "Trantow",
        "email": "Mauricio.Stehr@yahoo.com",
        "number": "+94771277681",
        "gender": "M",
        "id": 3,
        "photo": "https://randomuser.me/api/portraits/men/85.jpg"
    }],
    employee: null,
    error: null,
    message: null
}

export default initialState;