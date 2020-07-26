import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editDevotionalAction, deleteDevotionalAction } from '../../data-store/actions/devotionalActions';

import Button from '../elements/Button';
import DeleteDevotional from './DeleteDevotional';

const mapDispatchToProps = (dispatch) => {
    return {
        editDevotional: (devotional) => dispatch(editDevotionalAction(devotional)),
        deleteDevotional: (devotional) => dispatch(deleteDevotionalAction(devotional)),
    }
}

/**
 * Component that edits a devotional
 * If the component is saved as empty, then we just delete it
 * @param {prop} createDevotional - maps to editDevotionalAction
 */
function EditDevotional({ 
    id, 
    devotional, 
    setIsEditing, 
    editDevotional,
    deleteDevotional,
    history
}) {
    //TODO: Add auth error if there is something fails when you try to save, like authentication
    const {
        title = "",
        content = "",
    } = devotional;

    const [state, setState] = useState({
        title,
        content,
        id
    });

    const [shouldDelete, setShouldDelete] = useState(false);

    const handleClick = (e, bool) => {
        e.preventDefault();
        setShouldDelete(bool);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteDevotional(state);
        setIsEditing(false);
        history.push('/');
    }

    const handleSubmit = (e) => {
        if(!shouldDelete) {
            e.preventDefault();
            editDevotional(state);
            setIsEditing(false);
        }
    }

    const onChange = input => e => {
        let value = e.target.value;
        setState(prevState => {
            return { ...prevState, [input]: value };
        });
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Edit Devotional</h5>
                <div className="input-field">
                    <label htmlFor="title"> {!state.title && 'Title'} </label>
                    <input type="text" id="title" onChange={onChange('title')} value={state.title} />
                </div>
                <div className="input-field">
                    <label htmlFor="content"> {!state.content && 'Add Text Here'} </label>
                    <textarea
                        name="content"
                        id="content"
                        cols="30"
                        rows="10"
                        className="materialize-textarea"
                        style={{
                            height: '200px'
                        }}
                        onChange={onChange('content')}
                        value={state.content}
                    ></textarea>
                </div>
                {shouldDelete
                    ? <DeleteDevotional handleClose={handleClick} handleDelete={handleDelete} />
                    : <div className="input-field">
                        <Button text="save" buttonClass="save"/>
                        <Button text="delete" buttonClass="delete" handleClick={(e) => handleClick(e, true)}/>
                    </div>
                }
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(EditDevotional)