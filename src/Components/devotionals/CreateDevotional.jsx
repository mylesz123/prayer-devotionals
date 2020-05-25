import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createDevotional } from '../../data-store/actions/devotionalActions';

function CreateDevotional ({ createDevotional }) {
    const [state, setState] = useState({
        title: "",
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
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

const mapDispatchToProps = (dispatch) => {
    return {
        // map dispatch action so it can be intercepted by createDevotional action,
        // then assign to callback which takes the devotional needed for the createDevotional action,
        // and dispatches that
        createDevotional: (devotional) => dispatch(createDevotional(devotional)),
    }
}

export default connect(null , mapDispatchToProps)(CreateDevotional)