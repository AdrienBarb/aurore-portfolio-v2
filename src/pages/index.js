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

  let app = useRef(null);
  let picture = useRef(null);

  const timeline = gsap.timeline();

  useEffect(() => {
    timeline.to(app.current, {duration: 0.6, css: {visibility: 'visible'}})
    timeline.from(picture.current, {duration: 0.6, opacity: 0, ease: "power2.inOut" });
  }, [])

  const clickHandler = () => {
    setShowMenu(!showMenu)
  }

  console.log(showMenu)

  return (
    <div ref={app} className={classes.app}>
      <Layout>
        <div onClick={() => clickHandler()} className={`${classes.name} ${showMenu ? classes.hide : ''}`}>
          Aurore Demierre
        </div>
        <HomeMenu show={showMenu}/>
        <div onClick={() => setShowMenu(!showMenu)} className={`${classes.close} ${showMenu ? classes.display : ''}`}>Close</div>
        <video autoPlay muted loop className={classes.video}>
            <source src={video} type='video/mp4' />
        </video>
      </Layout>
    </div> 
  )
}

export default IndexPage
