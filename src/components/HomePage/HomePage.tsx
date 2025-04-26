import React, { useState } from 'react';

const Home: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Home Page</h1>
            <p>Current Count: {count}</p>
            <button onClick={increment} style={{ marginRight: '10px' }}>
                Increment
            </button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Home;