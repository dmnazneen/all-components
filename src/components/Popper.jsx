/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

/**
 * This component renders popper at different parts of the website.
 * @param {JSX.Element} children This is the jsx which will be inside this component.
 * @returns It retuns the JSX comes from children wrapped by another div.
 */
export default function Popper({
    children, popperRef, holder, divStyle = 'right', noPopper = false, wrapperProps, ...props
}) {
    if (divStyle === 'bottom') divStyle = "top-[140%] -left-[60%] before:content-[''] before:absolute before:border-[20px] before:border-y-transparent before:border-l-transparent before:border-r-red-500 before:rotate-90 before:left-[50%] before:-translate-x-1/2 before:-top-10";

    if (divStyle === 'top') divStyle = "bottom-[140%] -left-[60%] before:content-[''] before:absolute before:border-[20px] before:border-y-transparent before:border-l-transparent before:border-r-red-500 before:-rotate-90 before:left-[50%] before:-translate-x-1/2 before:-bottom-10"

    if (divStyle === 'right') divStyle = "-top-[100%] left-[120%] before:content-[''] before:absolute before:border-[20px] before:border-y-transparent before:border-l-transparent before:border-r-red-500 before:-left-5 before:-translate-x-1/2 before:bottom-[50%] before:translate-y-1/2"

    if (divStyle === 'left') divStyle = "-top-[100%] right-[110%] before:content-[''] before:absolute before:border-[20px] before:border-y-transparent before:border-r-transparent before:border-l-red-500 before:-right-5 before:translate-x-1/2 before:bottom-[50%] before:translate-y-1/2"

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
            className='relative bg-red-100 px-6 py-2'
        >
            {holder}
            {
                !noPopper && (
                    <div ref={popperRef} {...props} className={`absolute h-32 w-72 bg-red-500 px-6 py-2 ${divStyle}`}>
                        {children}
                    </div>
                )
            }
        </div>
    );
}
