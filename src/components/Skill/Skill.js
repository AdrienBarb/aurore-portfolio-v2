import React from 'react'
import classes from './Skill.module.css'

const Skill = (props) => {
    return (
        <div className={classes.skillContainer}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.description}>{props.description}</div>
        </div>
    )
}

export default Skill
