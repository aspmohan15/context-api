import React from 'react';
import { useUserContext } from '../context/useContext';

function Home() {
    const { user } = useUserContext();
    return (

        <div>
            <h1>Form Home</h1>
            <h1>Hai {user.name} How Are U </h1>
        </div>
    );
}

export default Home;
