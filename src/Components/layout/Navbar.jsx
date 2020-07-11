import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.firebase.auth.uid,
    }
}

function Navbar({ isLoggedIn }) {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Your Devotionals</Link>
                {isLoggedIn
                    ? <SignedinLinks />
                    : <SignedoutLinks />
                }
            </div>
        </nav>
    )
}

export default connect(mapStateToProps)(Navbar);