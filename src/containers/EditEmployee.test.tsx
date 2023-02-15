import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditEmployee from './EditEmployee';
import store from '../store';

const employee = {
    "_id": "636decfed0fafa1da15e1227",
    "first_name": "Simeon",
    "last_name": "Russel",
    "email": "Fabiola_Heidenreich@yahoo.com",
    "number": "+94771277682",
    "gender": "M",
    "id": 5,
    "photo": "https://randomuser.me/api/portraits/men/81.jpg"
}

afterEach(cleanup)

function renderWithRedux(component: any, store: any) {
    return {
        ...render(<Provider store={store}><Router>{component}</Router></Provider>)
    }
}

it('renders edit employee with redux', async () => {
    const { getByText } = renderWithRedux(<EditEmployee employee={employee}/>, store)
    expect(screen.getByText(/List View/)).toBeInTheDocument()
})

it('renders edit with employee name from store', async () => {
    const { getByText } = renderWithRedux(<EditEmployee employee={employee}/>, store)
    expect(screen.getByText(/Simeon/)).toBeInTheDocument()
})

it('renders edit with employee email from store', async () => {
    const { getByText } = renderWithRedux(<EditEmployee employee={employee}/>, store)
    expect(screen.getByText(/Fabiola_Heidenreich@yahoo.com/)).toBeInTheDocument()
})

it('renders edit with employee number from store', async () => {
    const { getByText } = renderWithRedux(<EditEmployee employee={employee}/>, store)
    expect(screen.getByText(/94771277682/)).toBeInTheDocument()
})

it('renders with employees genders from store', async () => {
    const { getByText } = renderWithRedux(<EditEmployee employee={employee}/>, store)
    expect(screen.getByText(/Male/)).toBeInTheDocument()
})