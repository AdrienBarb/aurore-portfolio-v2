import React, { useState, useRef, useEffect } from 'react';
import '../styles/index.scss';
import classes from "./index.module.scss";
import NavItems from '../components/navItems/navItems';

import Layout from '../components/Layout/Layout';
import { gsap } from "gsap/all";


const IndexPage = () => {

  let app = useRef(null);
  let picture = useRef(null);
  let navItems = useRef(null);
  let sentence = useRef(null);

  const timeline = gsap.timeline();

  useEffect(() => {
    timeline.to(app.current, {duration: 1, css: {visibility: 'visible'}})
    timeline.from(picture.current, {duration: 1, opacity: 0, y: -40, ease: "power3.inOut", delay: 0.2 })
            .from(sentence.current, {duration: 1, opacity: 0, x: -40, ease: "power3.inOut" }, '-=0.7')
            .from(navItems.current, {duration: 1, opacity: 0, x: 40, ease: "power3.inOut" }, '-=0.7');
  }, [])

  return (
    <div ref={app} className={classes.app}>
        <div className={classes.sentence} ref={sentence}>We grow brands by making them easy to understand and impossible to ignore.</div>
        <div className={classes.image} ref={picture} >
          <div ref={navItems}>
            <NavItems effect={timeline}/>
          </div>
        </div>
    </div> 
  )
}

export default IndexPage
