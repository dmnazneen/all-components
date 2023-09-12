import React, { useRef } from 'react';
import HoverDiv from './HoverDiv';
import Stars from './Stars';
import Popper from '../Popper';
const allratings = [4, 2, 3, 4, 5, 5, 5, 5, 5, 4, 5, 5, 4, 3, 5, 5, 5, 5, 5, 5, 5, 4, 5, 4, 3, 5, 5, 5, 5, 5]
/**
 * Rating Component
 * 
 * This component is used to display the previous rating and submit rating.
 * 
 * @component
 * @param {Array} ratingsArr - The array of all the ratings submitted by the users.
 * @returns {JSX.Element} - The rating component and the div to submit rating.
 */

const Rating = ({ ratingsArr = allratings }) => {
    const modalRef = useRef();
    const sum = ratingsArr.reduce((a, b) => a + b, 0);
    const rating = (sum / ratingsArr.length).toFixed(1);

    // calculates the rating stars to be shown.
    const getstars = (num) => {
        let rate = num;
        const arr = [];
        for (let i = 0; i < 5; i++) {
            if (rate >= 1) arr.push('fill')
            if (rate > 0 && rate < 1) {
                arr.push('half')
            }
            if (rate < 0) arr.push('empty')
            rate = rate - 1
        }
        return arr
    }

    const stars = getstars(rating);
    const popperParent = <p className='text-primary_blue cursor-pointer'>{rating} out of 5</p>
    return (
        <div className='text-text_black'>
            <div className='flex gap-5 items-center'>
                <Stars stars={stars} />
                <div className='relative'>
                    <Popper
                        wrapperProps={{
                            onMouseOver: () => modalRef?.current.classList.remove('hidden'),
                            onMouseOut: () => modalRef?.current.classList.add('hidden')
                        }}
                        children={<HoverDiv rating={rating} stars={stars} ratingsArr={ratingsArr} />}
                        holder={popperParent}
                        popperRef={modalRef}
                    />
                </div>
            </div>
        </div >
    );
}

export default Rating;