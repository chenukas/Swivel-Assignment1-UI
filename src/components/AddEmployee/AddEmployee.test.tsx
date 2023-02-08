import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import AddEmployee from "./AddEmployee";

beforeEach(() => {
    render(
        <Router>
            <Provider store={store}><AddEmployee employeesActions={store.dispatch} /></Provider>
        </Router>
    )
})

describe("renders Add Employee", () => {
    test('renders First Name label',()=>{
        expect(screen.getByText(/First Name/)).toBeInTheDocument();
    });

    test('renders Last Name label',()=>{
        expect(screen.getByText(/Last Name/)).toBeInTheDocument();
    });

    test('renders Email label',()=>{
        expect(screen.getByText(/Email/)).toBeInTheDocument();
    });
    
    test('renders Phone label',()=>{
        expect(screen.getByText(/Phone/)).toBeInTheDocument();
    });

    test('renders Gender label',()=>{
        expect(screen.getByText(/Gender/)).toBeInTheDocument();
    });

    test('renders Add button', () => {
        expect(screen.getByText(/Add/)).toBeInTheDocument();
    });
});