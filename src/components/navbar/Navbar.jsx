import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1>Housing Management</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
