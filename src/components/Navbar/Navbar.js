import React, { useState } from 'react';
import classes from './navbar.module.scss';
import { Link } from "gatsby";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import FullNavigation from '../FullNavigation/FullNavigation';
import { Cross as Hamburger } from 'hamburger-react'


const Navbar = () => {
    const matches = useMediaQuery('(min-width:768px)');
    const [ shouldShow, setshouldShow ] = useState(false);
    const [isOpen, setOpen] = useState(false)


        const iconNav = (
            <div className={`${classes.iconNav} ${isOpen ? classes.iconWhite : null}`}>
                <Hamburger  onClick={() => setshouldShow(!shouldShow)} toggled={isOpen} toggle={setOpen} />
            </div>
        )

        console.log(isOpen)
   
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
            <FullNavigation show={isOpen}/>
        </div>
    )
}

export default Navbar;