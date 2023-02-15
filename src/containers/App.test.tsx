import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import store from '../store';

afterEach(cleanup)

function renderWithRedux(component: any, store: any) {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

it('renders app with redux', async () => {
    const { getByText } = renderWithRedux(<App />, store)
    expect(screen.getByText(/Add Employee/)).toBeInTheDocument()
})

it('renders with employees names from store', async () => {
    const { getByText } = renderWithRedux(<App />, store)
    expect(screen.getByText(/Lindsay Herman/)).toBeInTheDocument()
})

it('renders with employees emails from store', async () => {
    const { getByText } = renderWithRedux(<App />, store)
    expect(screen.getByText(/Mauricio.Stehr@yahoo.com/)).toBeInTheDocument()
})

it('renders with employees numbers from store', async () => {
    const { getByText } = renderWithRedux(<App />, store)
    expect(screen.getByText(/94771277681/)).toBeInTheDocument()
})

it('renders with employees genders from store', async () => {
    const { getByText } = renderWithRedux(<App />, store)
    expect(screen.getByText(/Female/)).toBeInTheDocument()
})