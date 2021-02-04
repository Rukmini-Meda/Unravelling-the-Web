import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedinLinks';
import SignedOutLinks from './SignedoutLinks';

const NavBar = () => {
    return (
        <nav className = "nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">ProjectPlan</Link>
                <SignedInLinks></SignedInLinks>
                <SignedOutLinks></SignedOutLinks>
            </div>
        </nav>
    )
};

export default NavBar;