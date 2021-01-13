import React, { useState, useRef, useEffect } from 'react'
import classes from './HomeMenu.module.css'
import { Link } from "gatsby";
import { gsap } from "gsap/all";

const HomeMenu = (props) => {
    let name = useRef(null)
    let menu = useRef(null)
    let close = useRef(null)
    let all = useRef(null)

    const timeline = gsap.timeline();

    useEffect(() => {
        timeline.to(all.current, {duration: 0.2, css: {visibility: 'visible'}})
        timeline.to(all.current, {duration: 3, opacity: 1, ease: "power2.inOut" });
      }, [])

    const clickHandler = () => {
        timeline.to(name.current, {duration: 0.4, opacity: 0, ease: "power2.inOut" });
        timeline.to(name.current, {duration: 0, css: {visibility: 'hidden'}})
        timeline.to(menu.current, {duration: 0, css: {visibility: 'visible'}})
        timeline.to(menu.current, {duration: 0.4, opacity: 1, ease: "power2.inOut" });
        timeline.to(close.current, {duration: 0, css: {visibility: 'visible'}, delay: -0.4})
        timeline.to(close.current, {duration: 0.4, opacity: 1, ease: "power2.inOut", delay: -0.4 });
    }

    const closeHandler = () => {
        timeline.to(close.current, {duration: 0.4, opacity: 0, ease: "power2.inOut", delay: -0.2 });
        timeline.to(close.current, {duration: 0, css: {visibility: 'hidden'}, delay: -0.2})
        timeline.to(menu.current, {duration: 0.4, opacity: 0, ease: "power2.inOut" });
        timeline.to(menu.current, {duration: 0, css: {visibility: 'hidden'}})
        timeline.to(name.current, {duration: 0, css: {visibility: 'visible'}})
        timeline.to(name.current, {duration: 0.4, opacity: 1, ease: "power2.inOut" });
    }

    return (
        <div ref={all} className={classes.homeMenuWrapper}>
            <div ref={name} onClick={() => clickHandler()} className={`${classes.name}`}>
                AURORE DEMIERRE
            </div>
            <div ref={menu} className={classes.homeMenuContainer}>
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
            <div ref={close} onClick={() => closeHandler()} className={classes.close}>Close</div>
        </div>
    )
}

export default HomeMenu
