import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutAction } from '../../data-store/actions/authenticationActions';

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutAction())
    }
}

function SignedinLinks({ signOut, user }) {
    const { initials = '' } = user;
    return (
        <ul className="right">
            <li>
                <NavLink to="/create-devotional">New Devotional</NavLink>
            </li>
            <li>
                <a onClick={signOut} href="/">Sign Out</a>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">{ initials ? initials : "🥶" }</NavLink>
            </li>
        </ul>
    )
}

export default connect(null, mapDispatchToProps)(SignedinLinks)