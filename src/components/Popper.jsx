/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

/**
 * This component renders popper at different parts of the website.
 * @param {JSX.Element} children This is the jsx which will be inside this component.
 * @returns It retuns the JSX comes from children wrapped by another div.
 */
export default function Popper({
    children, popperRef, holder, noPopper = false, wrapperProps, ...props
}) {
    const wrapperRef = useRef();

    useEffect(() => {
        const popperHandler = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                popperRef?.current.classList.add('hidden');
            }
        };
        document.addEventListener('mousedown', popperHandler);
        return () => document.removeEventListener('mousedown', popperHandler);
    });

    return (
        <div
            ref={wrapperRef}
            {...wrapperProps}
        >
            {holder}
            {
                !noPopper && (
                    <div ref={popperRef} {...props} className='hidden'>
                        {children}
                    </div>
                )
            }
        </div>
    );
}
