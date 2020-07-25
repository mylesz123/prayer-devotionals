import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editDevotionalAction } from '../../data-store/actions/devotionalActions';

const mapDispatchToProps = (dispatch) => {
    return {
        editDevotional: (devotional) => dispatch(editDevotionalAction(devotional)),
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
    editDevotional 
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

    const handleSubmit = (e) => {
        e.preventDefault();
        editDevotional(state);
        setIsEditing(false);
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
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Save</button>
                </div>
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(EditDevotional)