import React, { useState } from 'react'

export default function CreateDevotional() {
    const [state, setState] = useState({
        title: "",
        content: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
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
                    <textarea name="content" id="content" cols="30" rows="10" className="materialize-textarea" onChange={onChange('email')}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}
