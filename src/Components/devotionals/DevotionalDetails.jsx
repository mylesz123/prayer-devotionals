import React, { useState } from 'react';
import EditDevotional from './EditDevotional';
import Button from '../elements/Button';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import { Redirect } from 'react-router-dom';

const mapStateToProps = (state, componentProps) => {
    const id = componentProps.match.params.id;
    const devotionals = state.firestore.data.devotionals;
    const devotional = devotionals && devotionals[id];

    return {
        devotionalID: id,
        devotional,
        uid: state.firebase.auth.uid,
        editError: state.devotionals.errorMessage,
    }
}

function DevotionalDetails({ devotionalID, devotional, uid, editError, history }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (bool) => {
        setIsEditing(bool);
    }

    if (!uid) {
        return (<Redirect to={'/login'} />)
    }

    if (isEditing) {
        return (
            <EditDevotional
                id={devotionalID}
                devotional={devotional} 
                setIsEditing={setIsEditing}
                history={history}
            />
        )
    }

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

                        {editError &&
                            <div className="red-text center">{editError}</div>
                        }
                    </div>

                    <Button
                        text="Edit" 
                        handleClick={() => handleEdit(true)}
                        shouldDisplay={uid === devotional.authorId}
                        buttonClass="editRight"
                    />
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
