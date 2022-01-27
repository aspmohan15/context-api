import React from 'react';
import Loginform from './LoginForm'
import Home from "./Home"
import { useUserContext } from '../context/useContext';


function Auth() {
    const { user } = useUserContext()

    return <>{user.isGuestUser ? <Loginform /> : <Home />}</>;
}

export default Auth;
