import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { MemoryRouter, Router} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import App from '../app/App';

const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return { 
    ...render (
    <Router history={history}>
        {component}
    </Router>
    )
  }
}

// test('full app rendering', () => {
//     render(<App />, { wrapper: MemoryRouter })

//     expect(screen.getByText(/To start click on Topics/)).toBeInTheDocument()
// })

it('should render full app', () => {

  const { container, getByTestId } = renderWithRouter(<App />) 
  const navbar = getByTestId('navbar')
  const link = getByTestId('practice-link')

  expect(container.innerHTML).toMatch('Create new vocabulary set')
  expect(navbar).toContainElement(link)
})

