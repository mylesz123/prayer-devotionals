import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        authStatus: state.firebase.auth,
    }
}

function Navbar({ authStatus }) {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Your Devotionals</Link>
                {authStatus.uid
                    ? <SignedinLinks />
                    : <SignedoutLinks />
                }
            </div>
        </nav>
    )
}

export default connect(mapStateToProps)(Navbar);