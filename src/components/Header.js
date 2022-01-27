import React from 'react';
import { useUserContext } from '../context/useContext';

function Header() {
    // const user = "mohan"
    const { user, logOut } = useUserContext();

    console.log(user);
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            height: "10vh",
            backgroundColor: "gray",
            justifyContent: "space-around "
        }}>

            <div>
                <h1>Crazy mohan</h1>
            </div>
            <div>
                <h3>Welcome, Mr. {user.name} </h3>
            </div>
            {!user.isGuestUser && (<button onClick={logOut}> log out</button>)}
        </div>
    );
}

export default Header;
