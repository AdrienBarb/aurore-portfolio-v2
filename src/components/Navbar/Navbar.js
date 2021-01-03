import React from 'react';
import classes from './navbar.module.scss';
import { Link } from "gatsby";

const Navbar = () => {
    return (
        <div className={classes.navbarContainer}>
            <div className={classes.navbar}>
                <div className={classes.name}>
                    <Link to="/">Aurore Demierre</Link>
                </div>
                <ul className={classes.navLinksContainer}>
                    <li>
                        <Link to="/work">WORKS</Link>
                    </li>
                    <li>
                        <Link to="/services">SERVICES</Link>
                    </li>
                    <li>
                        <Link to="/biography">BIOGRAPHY</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;