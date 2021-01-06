import React, { useState, useRef, useEffect } from 'react';
import '../styles/index.scss';
import classes from "./index.module.scss";
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';
import { gsap } from "gsap/all";


const IndexPage = () => {

  let app = useRef(null);
  let picture = useRef(null);

  const timeline = gsap.timeline();

  useEffect(() => {
    timeline.to(app.current, {duration: 1, css: {visibility: 'visible'}})
    timeline.from(picture.current, {duration: 1, opacity: 0, ease: "power3.inOut", delay: 0.2 });
  }, [])

  return (
    <div ref={app} className={classes.app}>
      <Navbar />
      <Layout>
        <div className={classes.image} ref={picture} >
        </div>
      </Layout>
    </div> 
  )
}

export default IndexPage
