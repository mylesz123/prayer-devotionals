import React, { useState } from 'react'
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { signUpAction } from './../../data-store/actions/authenticationActions';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.firebase.auth.uid,
        signUpError: state.authentication.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (state) => dispatch(signUpAction(state)),
    }
}

function SignUp({ isLoggedIn, signUpError, signUp }) {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(state);
        signUp(state);
    }
    const onChange = input => e => {
        let value = e.target.value;
        setState(prevState => {
            return { ...prevState, [input]: value };
        });
    }

    if (isLoggedIn) {
        return (<Redirect to={'/'} />)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={onChange('firstName')} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={onChange('lastName')} />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={onChange('email')} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={onChange('password')} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>

                {signUpError &&
                    <div className="red-text center">
                        <p>{signUpError}</p>
                    </div>
                }
            </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);