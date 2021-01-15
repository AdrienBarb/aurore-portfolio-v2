import React, { useState } from 'react';
import classes from './navbar.module.scss';
import { Link } from "gatsby";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FullNavigation from '../FullNavigation/FullNavigation';

const Navbar = () => {
    const matches = useMediaQuery('(min-width:768px)');

    const iconNav = (
        <FullNavigation />
    )

    const classicNav = (
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
    )

    return (
        <div className={classes.navbarContainer}>
            <div className={classes.navbar}>
                <div className={classes.name}>
                    <Link to="/">AURORE DEMIERRE</Link>
                </div>
                <div>
                    {matches ? classicNav : iconNav}
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;