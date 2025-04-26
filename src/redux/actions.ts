import { Dispatch } from 'redux';
import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UserActionTypes,
  User,
} from './types';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_USERS_FAILURE, payload: (error as Error).message });
    }
  };
};
