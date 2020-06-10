import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const mapStateToProps = (state, componentProps) => {
    const id = componentProps.match.params.id;
    const slicedId = id.slice(1);
    const devotionals = state.firestore.data.devotionals;
    const devotional = devotionals && devotionals[slicedId];

    return {
        devotional,
    }
}

function DevotionalDetails({ devotional }) {
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
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "devotionals" }
    ])
)(DevotionalDetails);
