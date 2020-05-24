import React from 'react';
import DevotionalSummary from './DevotionalSummary';

export default function DevotionalsList({ devotionals }) {
    return (
        <div className=" devotional-list section">
            {devotionals && devotionals.map(devotional => (
                <DevotionalSummary 
                    key={devotional.id} 
                    {...devotional}
                />
            ))}
        </div>
    )
}
