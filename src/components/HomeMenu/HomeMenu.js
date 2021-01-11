import React from 'react'
import classes from './HomeMenu.module.css'
import { Link } from "gatsby";

const HomeMenu = (props) => {
    return (
        <div className={`${classes.homeMenuWrapper} ${props.show ? classes.displayMenu : ''}`}>
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
}

export default HomeMenu
