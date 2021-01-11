import React, { useState, useRef, useEffect } from 'react';
import '../styles/index.scss';
import classes from "./index.module.scss";
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';
import { gsap } from "gsap/all";
import video from '../styles/images/video.mp4';


const IndexPage = () => {
  let app = useRef(null);
  let picture = useRef(null);

  const timeline = gsap.timeline();

  useEffect(() => {
    timeline.to(app.current, {duration: 0.6, css: {visibility: 'visible'}})
    timeline.from(picture.current, {duration: 0.6, opacity: 0, ease: "power2.inOut" });
  }, [])

  return (
    <div ref={app} className={classes.app}>
      <Navbar />
      <Layout>
        {/* <div className={classes.image} ref={picture} >

        </div> */}

        <video autoPlay muted loop className={classes.video}>
            <source src={video} type='video/mp4' />
        </video>
      </Layout>
    </div> 
  )
}

export default IndexPage
