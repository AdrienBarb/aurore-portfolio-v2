import React, { useState, useRef, useEffect } from 'react';
import '../styles/index.scss';
import classes from "./index.module.scss";
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';
import { gsap } from "gsap/all";
import video from '../styles/images/video.mp4';
import HomeMenu from '../components/HomeMenu/HomeMenu'
import { navigate } from "gatsby";


const IndexPage = () => {
  let menu = useRef(null)
  let app = useRef(null)

  const timeline = gsap.timeline();

  console.log(menu)

  useEffect(() => {
    timeline.to(app.current, {duration: 0.2, css: {visibility: 'visible'}})
    timeline.to(app.current, {duration: 0.6, opacity: 1, ease: "power2.inOut" });
  }, [])

  const navigationHandler = (dir) => {
    console.log(dir)
    timeline.to(app.current, {duration: 0.4, opacity: 0})
    setTimeout(() => {
        navigate(`/${dir}`)
    }, 600);
  }

  return (
    <div ref={app} className={classes.app}>
      <Layout>
        <HomeMenu function={(dir) => navigationHandler(dir)}/>
        <video autoPlay muted loop className={classes.video}>
            <source src={video} type='video/mp4' />
        </video>
      </Layout>
    </div> 
  )
}

export default IndexPage
