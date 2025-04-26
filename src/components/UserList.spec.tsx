import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import UserList from './UserList';
import { fetchUsers } from '../redux/actions';
import { AppState } from '../redux/types';
import '@testing-library/jest-dom';

jest.mock('../redux/actions', () => ({
  fetchUsers: jest.fn(() => ({ type: 'FETCH_USERS_REQUEST' }))
}));

const middlewares = [thunk];
const mockStore = configureMockStore<AppState, any>(middlewares);

describe('UserList Component', () => {
  it('should render with initial state and trigger fetchUsers on button click', () => {
    const initialState: AppState = {
      users: [],
      loading: false,
      error: null
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );

    expect(screen.getByText('User List')).toBeDefined();
    expect(screen.getByText('Fetch Users')).toBeDefined();

    fireEvent.click(screen.getByText('Fetch Users'));

    expect(fetchUsers).toHaveBeenCalled();
  });

  it('should show loading text when loading is true', () => {
    const loadingState: AppState = {
      users: [],
      loading: true,
      error: null
    };

    const store = mockStore(loadingState);

    render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeDefined();
  });

  it('should show error message when error exists', () => {
    const errorState: AppState = {
      users: [],
      loading: false,
      error: 'Failed to fetch'
    };

    const store = mockStore(errorState);

    render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );

    expect(screen.getByText(/Error: Failed to fetch/i)).toBeDefined();
  });

  it('should render list of users when available', () => {
    const userState: AppState = {
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
      ],
      loading: false,
      error: null
    };

    const store = mockStore(userState);

    render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );

    expect(screen.getByText('John Doe')).toBeDefined();
    expect(screen.getByText('jane@example.com')).toBeDefined();
  });
});
