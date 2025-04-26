import {
    AppState,
    UserActionTypes,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
  } from './types';
  
  const initialState: AppState = {
    users: [],
    loading: false,
    error: null,
  };
  
  export const userReducer = (
    state = initialState,
    action: UserActionTypes
  ): AppState => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_USERS_SUCCESS:
        return { ...state, loading: false, users: action.payload };
      case FETCH_USERS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  