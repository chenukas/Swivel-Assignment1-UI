import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import ListView from "./ListView";

beforeEach(() => {
    render(
        <Router>
            <Provider store={store}><ListView employeesActions={store.dispatch} first_name="Andrew" last_name="Simons" email="andrews@gmail.com" number="+94760001111" gender="M" photo="https://randomuser.me/api/portraits/men/30.jpg" id="636deb60d0fafa1da15e1221"/></Provider>
        </Router>
    )
})

describe("renders Paper View", () => {
    test('renders Employee First name',()=>{
        expect(screen.getByText(/Andrew/)).toBeInTheDocument();
    });
    test('renders Employee Last name',()=>{
        expect(screen.getByText(/Simons/)).toBeInTheDocument();
    });
    test('renders Employee Email',()=>{
        expect(screen.getByText(/andrews@gmail.com/)).toBeInTheDocument();
    });
});