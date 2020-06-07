import React from 'react'

export default function DevotionalSummary({ 
    title, time, authorFirstName, authorLastName,
}) {
    return (
        <div className="card z-depth-0 devotional-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                    {title}
                </span>
                <p>Posted By: {authorFirstName} {authorLastName} </p>
                <p className="grey-text">{time}</p>
            </div>
        </div>
    )
}
