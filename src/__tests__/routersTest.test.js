import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { MemoryRouter, Router} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import App from '../app/App';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { Route, Link } from "react-router-dom";
import { act } from 'react-dom/test-utils';


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

// it('full app rendering', () => {
//     render(<App />, { wrapper: MemoryRouter })

//     expect(screen.getByText(/Topics/)).toBeInTheDocument()
// })

// it('should render full app', () => {

//   const { container, getByTestId } = renderWithRouter(<App />) 
//   const navbar = getByTestId('navbar')
//   const link = getByTestId('practice-link')

//   expect(container.innerHTML).toMatch('Create new vocabulary set')
//   expect(navbar).toContainElement(link)
// })
it('should render full app', () => {

    const initialState = {topics:{topics:0}}
    const mockStore = configureStore();
    let store = mockStore(initialState)
    const { container, getByTestId } = renderWithRouter(<Provider store={store}><App /></Provider>)   
    const navbar = getByTestId('navbar')
    const link = getByTestId('practice-link')

    expect(container.innerHTML).toMatch('Create new vocabulary set')
    expect(navbar).toContainElement(link)
})

it('should navigate to the topics page when you click Topics navLink', ()=> {
    const history = createMemoryHistory()
    const initialState = {topics:{topics:0}}
    const mockStore = configureStore();
    let store = mockStore(initialState)
    const { container, getByTestId } = renderWithRouter(<Provider store={store}><App history={history} /></Provider>) 
  
    fireEvent.click(getByTestId('newTopic-link'))
    
    expect(container.innerHTML).toMatch('Create new topic');
})

it('should navigate to the New Vocabulary Sets page when you click NVS navLink', ()=> {
    const initialState = {topics:{topics:0}}
    const mockStore = configureStore();
    let store = mockStore(initialState)
    const { container, getByTestId } = renderWithRouter(<Provider store={store}><App /></Provider>) 
  
    userEvent.click(getByTestId('newSet-link'))
    
    expect(container.innerHTML).toMatch('Create a new vocabulary set');
})

it("should start with certain page: Topics, checking history", () => {
    const initialState = {topics:{topics:0}}
    const mockStore = configureStore();
    let store = mockStore(initialState)
    let testHistory, testLocation;
    renderWithRouter(
        <Provider store={store}>
            <MemoryRouter initialEntries={["/topics"]}>
                <App />
                <Route
                render={({ history, location }) => {
                    testHistory = history;
                    testLocation = location;
                    return null;
                }}
                />
            </MemoryRouter>
        </Provider>
    );
  
    expect(testLocation.pathname).toBe("/topics");

    testHistory.push({ pathname: '/new' })
    
    expect(testLocation.pathname).toBe("/new");   

    expect(testHistory.length).toBe(2);
})
