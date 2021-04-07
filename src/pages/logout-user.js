import React from 'react'
import { Redirect } from 'react-router';
import logo from '../assets/logo.png'

const LogoutUser = () => {
    
    const Logout = () => { //erase user data
        sessionStorage.removeItem('user');
        window.location.reload();
    };
    return (
        <div>
            <img src={logo} alt="logo" className="logo" />
            <h2>Logged in as <span className="user">John</span></h2> 
            <button onClick={Logout}>Logout</button>
            {sessionStorage.getItem('user') === null ? <Redirect to="/login" /> : ""}
        </div>
    )
}

export default LogoutUser
