import React, { useRef } from 'react';
import Popper from './Popper';
import HoverDiv from './Rating/HoverDiv';
import Stars from './Rating/Stars';

const allratings = [4, 2, 3, 4, 5, 5, 5, 5, 5, 4, 5, 5, 4, 3, 5, 5, 5, 5, 5, 5, 5, 4, 5, 4, 3, 5, 5, 5, 5, 5]

const Somediv = ({ ratingsArr = allratings }) => {
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
    const hoverRef = useRef();
    const popperParent = <p className='text-blue cursor-pointer'>{rating} out of 5</p>
    return (
        <div className='text-text_black'>
            <div className='flex gap-5 items-center'>
                <Stars stars={stars} />
                <div className='relative'>
                    <Popper
                        wrapperProps={{
                            onMouseOver: () => hoverRef?.current.classList.remove('hidden'),
                            onMouseOut: () => hoverRef?.current.classList.add('hidden')
                        }}
                        holder={popperParent}
                        popperRef={hoverRef}
                    >
                        <HoverDiv rating={rating} stars={stars} ratingsArr={ratingsArr} />
                    </Popper>
                </div>
            </div>
        </div >
    );
}

export default Somediv;
