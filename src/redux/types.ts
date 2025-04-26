export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export interface AppState {
    users: User[];
    loading: boolean;
    error: string | null;
  }
  
  export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
  export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
  export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
  
  interface FetchUsersRequestAction {
    type: typeof FETCH_USERS_REQUEST;
  }
  
  interface FetchUsersSuccessAction {
    type: typeof FETCH_USERS_SUCCESS;
    payload: User[];
  }
  
  interface FetchUsersFailureAction {
    type: typeof FETCH_USERS_FAILURE;
    payload: string;
  }
  
  export type UserActionTypes =
    | FetchUsersRequestAction
    | FetchUsersSuccessAction
    | FetchUsersFailureAction;
  