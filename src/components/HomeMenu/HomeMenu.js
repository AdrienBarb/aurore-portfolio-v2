import React, { useRef, useEffect } from 'react'
import classes from './HomeMenu.module.css'
import { gsap } from "gsap/all";

const HomeMenu = (props) => {
    let name = useRef(null)
    let menu = useRef(null)
    let close = useRef(null)
    let all = useRef(null)

    const timeline = gsap.timeline();

    useEffect(() => {
        gsap.to(all.current, {duration: 0.6, css: {visibility: 'visible'}})
        gsap.to(name.current, {duration: 3, opacity: 1, ease: "power2.inOut" })
      }, [])

    const openMenuHandler = () => {
        timeline.to(name.current, {duration: 0.4, opacity: 0, ease: "power2.inOut" });
        timeline.to(name.current, {duration: 0, css: {visibility: 'hidden'}})
        timeline.to(menu.current, {duration: 0, css: {visibility: 'visible'}})
        timeline.to(menu.current, {duration: 0.4, opacity: 1, ease: "power2.inOut" });
        timeline.to(close.current, {duration: 0, css: {visibility: 'visible'}, delay: -0.4})
        timeline.to(close.current, {duration: 0.4, opacity: 1, ease: "power2.inOut", delay: -0.4 });
    }

    const closeMenuHandler = () => {
        timeline.to(close.current, {duration: 0.4, opacity: 0, ease: "power2.inOut", delay: -0.2 });
        timeline.to(close.current, {duration: 0, css: {visibility: 'hidden'}, delay: -0.2})
        timeline.to(menu.current, {duration: 0.4, opacity: 0, ease: "power2.inOut" });
        timeline.to(menu.current, {duration: 0, css: {visibility: 'hidden'}})
        timeline.to(name.current, {duration: 0, css: {visibility: 'visible'}})
        timeline.to(name.current, {duration: 0.4, opacity: 1, ease: "power2.inOut" });
    }

    return (
        <div ref={all} className={classes.homeMenuWrapper}>
            <div ref={name} onClick={() => openMenuHandler()} onKeyDown={() => openMenuHandler()} className={classes.name}>
                AURORE DEMIERRE
            </div>
            <div ref={menu} className={classes.homeMenuContainer}>
                <ul className={classes.navLinksContainer}>
                    <li className={classes.underlineContainer}>
                        <div onClick={() => props.animateOnNav('work')} onKeyDown={() => props.animateOnNav('work')}  className={classes.underline}>WORK</div>
                    </li>
                    <li className={classes.underlineContainer}>
                        <div onClick={() => props.animateOnNav('about')} onKeyDown={() => props.animateOnNav('work')}  className={classes.underline}>ABOUT</div>
                    </li>
                    <li className={classes.underlineContainer}>
                        <div onClick={() => props.animateOnNav('contact')} onKeyDown={() => props.animateOnNav('work')}  className={classes.underline}>CONTACT</div>
                    </li>
                </ul>
            </div>
            <div ref={close} onClick={() => closeMenuHandler()} className={classes.close}>Close</div>
        </div>
    )
}

export default HomeMenu
