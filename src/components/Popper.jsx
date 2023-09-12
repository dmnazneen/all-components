import React, { useEffect } from 'react';

/**
 * This component renders popper at different parts of the website.
 * @param {JSX.Element} children This is the jsx which will be inside this component.
 * @returns It retuns the JSX comes from children wrapped by another div.
 */
export default function Popper({ children, modalRef }) {
    useEffect(() => {
        const usermodalhandler = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                modalRef.current.classList.add('hidden');
            }
        }
        document.addEventListener('mousedown', usermodalhandler);
        return () => document.removeEventListener('mousedown', usermodalhandler);
    });

    return (
        <div ref={modalRef} className='hidden'>
            {children}
        </div>
    )
}