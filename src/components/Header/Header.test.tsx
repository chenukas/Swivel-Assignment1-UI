import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import Header from "./Header";

beforeEach(() => {
    render(
        <Router>
            <Provider store={store}><Header /></Provider>
        </Router>
    )
})

describe("renders Header", () => {
    test('renders Employee Manager label',()=>{
        expect(screen.getByText(/Employee Manager/)).toBeInTheDocument();
    });
});