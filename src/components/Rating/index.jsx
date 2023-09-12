import React, { useRef } from 'react';
import HoverDiv from './HoverDiv';
import Stars from './Stars';
import Popper from '../Popper';

const Rating = () => {
    //provided from outside
    const allratings = [4, 2, 3, 4, 5, 5, 5, 5, 5, 4, 5, 5, 4, 3, 5, 5, 5, 5, 5, 5, 5, 4, 5, 4, 3, 5, 5, 5, 5, 5]

    const modalRef = useRef();
    const sum = allratings.reduce((a, b) => a + b, 0);
    const rating = (sum / allratings.length).toFixed(1);

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

    return (
        <div className='text-text_black'>
            <div className='flex gap-5 items-center'>
                <Stars stars={stars} />
                <div className='relative'>
                    <p className='text-primary_blue cursor-pointer' onMouseEnter={() => modalRef.current.classList.remove('hidden')}>{rating} out of 5</p>
                    <Popper modalRef={modalRef}>
                        <HoverDiv rating={rating} stars={stars} allratings={allratings} />
                    </Popper>
                </div>
            </div>
        </div >
    );
}

export default Rating;