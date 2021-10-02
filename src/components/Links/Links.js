import React from 'react';
import { NavLink } from 'react-router-dom';
import './Links.css';

const Links = () => {
    const activeStyle = {
        fontWeight: "bold",
        backgroundColor: "red",
        color: "white"
    }
    return (
        <nav className="links-container">
            <NavLink activeStyle={activeStyle} className="link" to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle} className="link" to="/about">About</NavLink>
            <NavLink activeStyle={activeStyle} className="link" to="/friends">Friends</NavLink>
        </nav>
    );
};

export default Links;