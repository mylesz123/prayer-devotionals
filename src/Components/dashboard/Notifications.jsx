import React from 'react'

export default function Notifications({ notifications }) {
    const getDateString = (seconds) => {
        const days = new Date(seconds).getUTCDay();
        const timeString = (days === 1 ? `${days} day` : `${days} days`) + ' ago';
        return timeString;
    }
    const notificationListItem = notifications && notifications.map(item => (
        <li key={item.id}>
            <span className="pink-text">{item.user}</span>
            <span> {item.content} </span>
            <div className="grey-text note-date">
                {getDateString(item.time.seconds)}
            </div>
        </li>
    ));

    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title center-align">Notifications</span>
                    <ul className="notification">
                        {notificationListItem}
                    </ul>
                </div>
            </div>
        </div>
    )
}
