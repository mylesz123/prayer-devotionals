import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.firebase.auth.uid,
        profile: state.firebase.profile,
    }
}

function Navbar({ isLoggedIn, profile }) {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Your Devotionals</Link>
                {isLoggedIn
                    ? <SignedinLinks profile={profile} />
                    : <SignedoutLinks />
                }
            </div>
        </nav>
    )
}

export default connect(mapStateToProps)(Navbar);