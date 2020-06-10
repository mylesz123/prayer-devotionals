import React from 'react';
import Notifications from './Notifications';
import DevotionalsList from'../devotionals/DevotionalsList';
import { connect } from 'react-redux'; // connecting this component to our reducer

import { firestoreConnect } from 'react-redux-firebase'; // again connecting this component to our reducer
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        devotionals: state.firestore.ordered.devotionals,
    }
}

function Dashboard({ devotionals }) {
    return (
        <div className=" dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <DevotionalsList devotionals={devotionals}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "devotionals" }
    ]),
)(Dashboard)