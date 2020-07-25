import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
import { connect } from 'react-redux';

import { getUserAction } from './../../data-store/actions/userActions';

const mapStateToProps = (state) => {
    const user = state.user && !!state.user.userInfo ? state.user.userInfo : null
    return {
        uid: state.firebase.auth.uid,
        user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (uid) => dispatch(getUserAction(uid))
    }
}

function Navbar({ uid, getUser, user }) {
    useEffect(() => {
        if (uid) {
            getUser(uid)
        }
    }, [getUser, uid]);

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Your Devotionals</Link>
                {user
                    ? <SignedinLinks user={user}/>
                    : <SignedoutLinks />
                }
            </div>
        </nav>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);