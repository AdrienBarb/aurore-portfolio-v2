import React, { useState, useEffect } from 'react'
import classes from './FullNavigation.module.css'
import { Link } from "gatsby";

const FullNavigation = (props) => {
    const [ show, setshow ] = useState(false);

    const fullNav = (
        <div className={classes.fullNavigation}>
            <ul className={classes.navLinksContainer}>
                <li className={classes.underlineContainer}>
                    <Link className={classes.underline} to="/work">WORK</Link>
                </li>
                <li className={classes.underlineContainer}>
                    <Link className={classes.underline} to="/about">ABOUT</Link>
                </li>
                <li className={classes.underlineContainer}>
                    <Link className={classes.underline} to="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    )

    return (
        <div>
            {props.show ? fullNav : ''}
        </div>
    )
}

export default FullNavigation
