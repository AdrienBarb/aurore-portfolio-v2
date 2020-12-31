import React from 'react';
import classes from './backdrop.module.scss';

const Backdrop = (props) => {
    return (
        <div className={`${classes.backdrop} ${props.show ? classes.visible : classes.hidden}`}></div>
    )
}

export default Backdrop;