/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

/**
 * This component renders popper at different parts of the website.
 * @param {JSX.Element} children This is the jsx which will be inside this component.
 * @returns It retuns the JSX comes from children wrapped by another div.
 */
export default function Popper({
    children, popperRef, holder, divStyle = 'bottom', noPopper = false, wrapperProps, ...props
}) {
    if (divStyle === 'bottom') divStyle = "top-[160%] translate-x-1/2 right-1/2 before:border-l-transparent before:border-r-white before:rotate-90 before:left-[50%] before:-translate-x-1/2 before:-top-10";

    if (divStyle === 'top') divStyle = "bottom-[160%] translate-x-1/2 right-1/2 before:content-[''] before:absolute before:border-[20px] before:border-y-transparent before:border-l-transparent before:border-r-white before:-rotate-90 before:left-[50%] before:-translate-x-1/2 before:-bottom-10"

    if (divStyle === 'right') divStyle = "-translate-y-1/2 top-1/2 left-[105%] before:content-[''] before:absolute before:border-[20px] before:border-y-transparent before:border-l-transparent before:border-r-white before:-left-5 before:-translate-x-1/2 before:bottom-[50%] before:translate-y-1/2"

    if (divStyle === 'left') divStyle = "-translate-y-1/2 top-1/2 right-[105%] before:content-[''] before:absolute before:border-[20px] before:border-y-transparent before:border-r-transparent before:border-l-white before:-right-5 before:translate-x-1/2 before:bottom-[50%] before:translate-y-1/2"

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
            className='relative'
        >
            {holder}
            {
                !noPopper && (
                    <div ref={popperRef} {...props} className={`absolute inline-block bg-white drop-shadow before:content-[''] before:absolute before:border-[20px] before:border-y-transparent ${divStyle}`}>
                        {children}
                    </div>
                )
            }
        </div>
    );
}
