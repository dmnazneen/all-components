import React, { useRef } from 'react';
import Popper from './Popper';

const Somediv = () => {
    const hoverRef = useRef();
    const popperParent = <p>Hover here</p>
    return (
        <Popper
            wrapperProps={{
                onMouseOver: () => hoverRef?.current.classList.remove('hidden'),
                onMouseOut: () => hoverRef?.current.classList.add('hidden')
            }}
            holder={popperParent}
            popperRef={hoverRef}
        >
            <p>
                Lorem ipsum
            </p>
        </Popper>
    );
}

export default Somediv;
