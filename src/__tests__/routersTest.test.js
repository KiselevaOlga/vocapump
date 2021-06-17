import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { MemoryRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import App from '../app/App';

test('full app rendering', () => {
    render(<App />, { wrapper: MemoryRouter })

    expect(screen.getByText(/To start click on Topics/)).toBeInTheDocument()
})
