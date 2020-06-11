import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    // see if you are logged in or not
    console.log(state)
}

function Navbar() {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Your Devotionals</Link>
                <SignedinLinks />
                <SignedoutLinks />
            </div>
        </nav>
    )
}

export default connect(mapStateToProps)(Navbar);