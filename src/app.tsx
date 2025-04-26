import React from 'react';
import UserList from './components/UserList';
import Home from './components/HomePage/HomePage';

const App: React.FC = () => {
  return (
    <div>
      <h1>Sample React Redux App with jest testing</h1>
      <Home/>
    </div>
  );
};

export default App;
