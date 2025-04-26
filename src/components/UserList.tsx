import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import { AppState, User } from '../redux/types';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: AppState) => state);

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div>
      <h2>User List</h2>
      <button onClick={handleFetchUsers}>Fetch Users</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
