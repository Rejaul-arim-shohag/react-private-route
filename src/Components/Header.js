import React from 'react';
import './Header.css'
import {
    Link
  } from "react-router-dom";
const Header = () => {
    return (
        
        <div>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;