import React from 'react'
import classes from './Description.module.css'

const Description = (props) => {
    return (
        <div className={`${classes.descriptionContainer} ${props.show ? classes.showDescription : ''}`}>
            <div className={classes.description}>
                {props.description}
            </div>
        </div>
    )
}

export default Description
