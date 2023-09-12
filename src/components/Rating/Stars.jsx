import { Star, StarHalf } from 'phosphor-react';
import React from 'react';

/**
 * 
 * @param {Array} stars
 * @param {String} gap - tailwind css class.
 * @returns {JSX.Element} - displays the stars
 */
const Stars = ({ stars, gap = 'gap-4' }) => {
    return (
        <div className={`flex ${gap} text-golden`}>
            {
                stars.map((m, index) => {
                    if (m === 'fill') return <Star key={index} size={18} weight='fill' />
                    if (m === 'empty') return <Star key={index} size={18} />
                    return <StarHalf key={index} size={18} weight='fill' />
                })
            }
        </div>
    );
}

export default Stars;
