import React from 'react';
import DevotionalSummary from './DevotionalSummary';
import { Link } from 'react-router-dom';

export default function DevotionalsList({ devotionals }) {
    return (
        <div className=" devotional-list section">
            {devotionals && devotionals.map(devotional => (
                <Link key={devotional.id} to={`/devotional/:${devotional.id}`} >
                    <DevotionalSummary  
                        {...devotional}
                    />
                </Link>
            ))}
        </div>
    )
}
