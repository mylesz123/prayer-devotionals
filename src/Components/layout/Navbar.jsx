import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';

export default function Navbar() {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Devotional Plan</Link>
                <SignedinLinks />
                <SignedoutLinks />
            </div>
        </nav>
    )
}
