import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import { Redirect } from 'react-router-dom';

const mapStateToProps = (state, componentProps) => {
    const id = componentProps.match.params.id;
    const devotionals = state.firestore.data.devotionals;
    const devotional = devotionals && devotionals[id];

    return {
        devotional,
        isLoggedIn: state.firebase.auth.uid,
    }
}

function DevotionalDetails({ devotional, isLoggedIn }) {
    if (isLoggedIn) {
        return (
            <>
                {devotional
                    ? <div className=" container section devotional-details">
                        <div className="card z-depth-0">
                            <div className="card-content">
                                <span className="card-title">Title: {devotional.title}</span>
                                <p>{devotional.content}</p>
                            </div>

                            <div className="card-action grey lighten-4 grey-text">
                                <div>Posted By: {devotional.authorFirstName}</div>
                                <div>{devotional.time}</div>
                            </div>

                        </div>
                    </div>
                    : <div className="container center">Loading ... </div>
                }
            </>
        )
    } else {
        return (<Redirect to={'/login'}/>)
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "devotionals" }
    ])
)(DevotionalDetails);
