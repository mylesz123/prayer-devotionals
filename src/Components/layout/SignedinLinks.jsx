import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignedinLinks() {
    return (
        <ul className="right">
            <li>
                <NavLink to="/">New Devotional</NavLink>
            </li>
            <li>
                <NavLink to="/">Log Out</NavLink>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">MY</NavLink>
            </li>
        </ul>
    )
}
