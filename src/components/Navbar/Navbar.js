import React from 'react';
import classes from './navbar.module.scss';
import { Link } from "gatsby";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FullNavigation from '../FullNavigation/FullNavigation';
import { gsap } from "gsap/all";
import { navigate } from "gatsby";

const Navbar = ({ component }) => {
    const matches = useMediaQuery('(min-width:768px)');
    

    
    const timeline = gsap.timeline();

    const clickHandler = (direction) => {
        let urlArray = window.location.href.split( '/' )
        let path = urlArray[urlArray.length - 1]

        if (direction != path) {
            timeline.to(component.current, {duration: 0.6, opacity: 0})
            setTimeout(() => {
                navigate(`/${direction}`)
            }, 600);
        }
    }

    const iconNav = (
        <FullNavigation />
    )

    const classicNav = (
        <ul className={classes.navLinksContainer}>
            <li className={classes.underlineContainer}>
                <div className={classes.underline} onClick={() => clickHandler('work')}>WORK</div>
            </li>
            <li className={classes.underlineContainer}>
                <div className={classes.underline} onClick={() => clickHandler('about')}>ABOUT</div>
            </li>
            <li className={classes.underlineContainer}>
                <div className={classes.underline} onClick={() => clickHandler('contact')}>CONTACT</div>
            </li>
        </ul>
    )

    return (
        <div className={classes.navbarContainer}>
            <div className={classes.navbar}>
                <div className={classes.name}>
                    <div className={classes.underline} onClick={() => clickHandler('')}>AURORE DEMIERRE</div>
                </div>
                <div>
                    {matches ? classicNav : iconNav}
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;