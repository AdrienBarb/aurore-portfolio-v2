import React from 'react';
import classes from './navbar.module.scss';
import { Link } from "gatsby";

const Navbar = () => {
    return (
        <div className={classes.navbarContainer}>
            <div className={classes.navbar}>
            <ul className={classes.navLinksContainer}>
                <li>
                    <Link className={classes.word} to="/work">WORKS</Link>
                </li>
                <li>
                    <Link className={classes.word} to="/project">PROJECT</Link>
                </li>
                <li>
                    <Link className={classes.word} to="/biography">BIOGRAPHY</Link>
                </li>
                <li>
                    <Link className={classes.word} to="/contact">CONTACT</Link>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar;