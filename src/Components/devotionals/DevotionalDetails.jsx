import React, { useState } from 'react';
import EditDevotional from './EditDevotional';

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
        isLoggedIn: state.firebase.auth.uid,
    }
}

function Button({ 
    text, 
    handleClick = null
}) {
    const onClick = (e) =>  {
        e.preventDefault();
    }

    const styles = {
        edit: "waves-effect waves-light btn purple accent-3 right",
    }
    return (
        <button 
            className={styles.edit}
            onClick={handleClick || onClick}
        > 
            {text}
        </button>
    )
}

function DevotionalDetails({ devotionalID, devotional, isLoggedIn }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (bool) => {
        setIsEditing(bool);
    }

    if (!isLoggedIn) {
        return (<Redirect to={'/login'} />)
    }

    //should also check if the id of the current user matches the authorId in the devotional
    if (isEditing) {
        return (
            <EditDevotional
                id={devotionalID}
                devotional={devotional} 
                setIsEditing={setIsEditing} 
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
                    </div>

                    <Button text="Edit" handleClick={() => handleEdit(true)}/>
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
