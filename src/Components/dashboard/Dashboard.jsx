import React from 'react';
import Notifications from './Notifications';
import DevotionalsList from'../devotionals/DevotionalsList';
import { connect } from 'react-redux'; // connecting this component to our reducer

import { firestoreConnect } from 'react-redux-firebase'; // again connecting this component to our reducer
import { compose } from 'redux';

import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        devotionals: state.firestore.ordered.devotionals,
        notifications: state.firestore.ordered.notifications,
        isLoggedIn: state.firebase.auth.uid,
    }
}

function Dashboard({ devotionals, notifications, isLoggedIn }) {
    if (isLoggedIn) {
        return (
            <div className=" dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <DevotionalsList devotionals={devotionals} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<Redirect to={'/login'} />)
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "devotionals", limit: 5, orderBy: ["time", "desc"] },
        { collection: "notifications", limit: 4, orderBy: ["time", "desc"] }
    ]),
)(Dashboard)