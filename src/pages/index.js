import React, { useState, useRef, useEffect } from 'react';
import '../styles/index.scss';
import classes from "./index.module.scss";
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';
import { gsap } from "gsap/all";
import video from '../styles/images/video.mp4';
import HomeMenu from '../components/HomeMenu/HomeMenu'


const IndexPage = () => {
  const [showMenu, setShowMenu] = useState(false)

  let menu = useRef(null);
  let app = useRef(null)

  const timeline = gsap.timeline();

  useEffect(() => {
    timeline.to(app.current, {duration: 0.2, css: {visibility: 'visible'}})
  }, [])

  const clickHandler = () => {
    setShowMenu(!showMenu)
  }

  console.log(showMenu)

  return (
    <div ref={app} className={classes.app}>
      <Layout>

        <HomeMenu show={showMenu}/>
        <video autoPlay muted loop className={classes.video}>
            <source src={video} type='video/mp4' />
        </video>
      </Layout>
    </div> 
  )
}

export default IndexPage
