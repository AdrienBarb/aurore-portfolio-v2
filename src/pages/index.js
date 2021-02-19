import React, { useRef } from 'react';
import '../styles/index.scss';
import classes from "./index.module.scss";
import Layout from '../components/Layout/Layout'
import { gsap } from "gsap/all"
import HomeMenu from '../components/HomeMenu/HomeMenu'
import { navigate } from "gatsby";
import Counter from '../components/Counter/Counter'


const IndexPage = () => {
  let app = useRef(null)
  let counter = useRef(null)

  const timeline = gsap.timeline();

  const showAnimation = () => {
    timeline.to(counter.current, {duration: 0.6, opacity: 0, ease: "power2.inOut" });
    timeline.to(counter.current, {duration: 0, css: {visibility: 'hidden'}})
  }

  const navigationHandler = (pageDirection) => {
    timeline.to(app.current, {duration: 0.6, opacity: 0})
    setTimeout(() => {
        navigate(`/${pageDirection}`)
    }, 600);
  }

  return (
    <>
      <div ref={counter} className={classes.counterWrapper}>
        <Counter  startAnimation={() => showAnimation()}/>
      </div>
      <div ref={app} className={classes.app}>
        <Layout>
          <HomeMenu animateOnNav={(pageDirection) => navigationHandler(pageDirection)}/>
          <div className={classes.picture}></div>
        </Layout>
      </div> 
    </>
   
  )
}

export default IndexPage
