import React from 'react';
import Button from '../elements/Button';

export default function DeleteDevotional({ handleClose, handleDelete }) {
    return (
        <div className="row">
            <div className="center">
                <h4>Are you sure?</h4>
                <p>This action cannot be undone</p>
            </div>
            <div>
                <Button text="No" handleClick={(e) => handleClose(e, false)} />
                <Button text="Yes" handleClick={handleDelete} buttonClass="editRight" />
            </div>
        </div>
    )
}
