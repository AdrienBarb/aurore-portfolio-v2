import React, { useState, useEffect, useRef } from 'react'
import classes from './FullNavigation.module.css'
import { Link } from "gatsby";
import { gsap } from "gsap/all";
import { Cross as Hamburger } from 'hamburger-react'



const FullNavigation = (props) => {
    const [isOpen, setOpen] = useState(false)
    let nav = useRef(null);

    const timeline = gsap.timeline();


    const handleClick = () => {
        if (isOpen) {
            timeline.to(nav.current, {duration: 0.4, opacity: 0, ease: "power2.inOut" });
            timeline.to(nav.current, {duration: 0, css: {visibility: 'hidden'}})
        } else {
            timeline.to(nav.current, {duration: 0, css: {visibility: 'visible'}})
            timeline.to(nav.current, {duration: 0.4, opacity: 1, ease: "power2.inOut" });
        }
    }

    return (
        <div>
            <div onClick={() => handleClick()} className={`${classes.iconNav} ${isOpen ? classes.iconWhite : null}`}>
                <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
            </div>
            <div ref={nav} className={classes.fullNavigation}>
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

        </div>
    )
}

export default FullNavigation
