import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import EmployeeList from './EmployeeList/EmployeeList';
import AddEmployee from './AddEmployee/AddEmployee';
import EditEmployee from './EditEmployee/EditEmployee';

export default class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
        const { employeesActions } = this.props;
        employeesActions.getEmployees()
    }

    render() {
        const { employeesActions, employeesState: { employees, employee } } = this.props;
        return (
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<EmployeeList employees={employees} employeesActions={employeesActions} />} />
                    <Route path='/add' element={<AddEmployee employeesActions={employeesActions}/>} />
                    <Route path='/edit/:id' element={<EditEmployee employeesActions={employeesActions} employee={employee}/>} />
                </Routes>
            </Router>
        )
    }

}