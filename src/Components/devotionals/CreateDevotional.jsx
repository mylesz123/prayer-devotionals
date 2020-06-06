import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createDevotionalAction } from '../../data-store/actions/devotionalActions';

/**
 * Sending the initial dispatch to be intercepted by middleware
 * mapDispatchToProps basically is just returning an object with properties 
 * to be read in the connected component props
 *
 * the createDevotional prop is a callback function that maps to the createDevotionalAction, 
 * and when this action is called in the connected component, 
 * we are able to pass information to our reducer
 * 
 * @param {function} dispatch 
 * 
 * @returns {prop / callback} createDevotional 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        createDevotional: (devotional) => dispatch(createDevotionalAction(devotional)),
    }
}

/**
 * Component that creates a new devotional to be displayed in /create-devotional
 * @param {prop} createDevotional - maps to createDevotionalAction
 */
function CreateDevotional ({ createDevotional }) {
    const [state, setState] = useState({
        title: "",
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // this maps to createDevotionalAction and passing in our state means we are passing in a devotional
        createDevotional(state);
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
                <h5 className="grey-text text-darken-3">Create New Devotional</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={onChange('title')} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Enter Text Here</label>
                    <textarea name="content" id="content" cols="30" rows="10" className="materialize-textarea" onChange={onChange('content')}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

export default connect(null , mapDispatchToProps)(CreateDevotional)