import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../data-store/actions/authenticationActions';

import { Link, Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        authError: state.authentication.authError,
        isLoggedIn: state.firebase.auth.uid,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (state) => dispatch(loginAction(state)) 
    }
}

function Login({ login, authError, isLoggedIn }) {
    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(state);
    }

    const onChange = input => e => {
        let value = e.target.value;
        setState(prevState => {
            return {...prevState, [input]: value};
        });
    }
    
    if (isLoggedIn) {
        return (<Redirect to={'/'} />)
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Welcome Back!</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={onChange('email')}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={onChange('password')}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    <Link className="right" to={'/signup'}>Don't have an account?</Link>
                </div>
                <div className="red-text center">{authError ? authError : null}</div>
            </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);