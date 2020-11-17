import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <NavLink className="link" to="/Home">Home</NavLink>
                    <NavLink className="link" to="/signup">Sign Up</NavLink>
                    <NavLink className="link" to="/login">Login</NavLink>
                    <NavLink className="link" to="/mapchart">Map</NavLink>
                    <NavLink className="link" to="/tempchart">Your Chart</NavLink>

                </div>
            </div>
        )
    }
}