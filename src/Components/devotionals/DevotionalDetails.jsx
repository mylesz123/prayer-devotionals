import React from 'react'

export default function DevotionalDetails(props) {
    const id = props.match.params.id;

    return (
        <div className=" continer section devotional-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Title ID:{id}</span>
                    <p>Some Content to look at for now</p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By: ME</div>
                    <div>13, May, 10:00 PM</div>
                </div>

            </div>
        </div>
    )
}
