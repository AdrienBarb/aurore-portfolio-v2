import React, { useState, useRef, useEffect } from 'react';
import '../styles/index.scss';
import classes from "./index.module.scss";
import NavItems from '../components/navItems/navItems';
import Sentence from '../components/Sentence/Sentence';
import Backdrop from '../components/Backdrop/Backdrop';
import Layout from '../components/Layout/Layout';
import { Power3, TimelineMax } from "gsap/all";


const IndexPage = () => {
  const [hoverFirst, setHoverFirst] = useState(false);
  const [hoverSecond, setHoverSecond] = useState(false);
  const [hoverThird, setHoverThird] = useState(false);
  const [hoverSkills, setHoverSkills] = useState(false);

  let app = useRef(null);
  let picture = useRef(null);
  let skills = useRef(null);
  let navItems = useRef(null);

  const timeline = new TimelineMax();

  useEffect(() => {
    timeline.to(app.current, {duration: 1, css: {visibility: 'visible'}})
    timeline.from(picture.current, {duration: 1, opacity: 0, y: -40, ease: Power3.easeOut, delay: 0.2 })
            .from(skills.current, {duration: 1, opacity: 0, x: -40, ease: Power3.easeOut }, '-=0.7')
            .from(navItems.current, {duration: 1, opacity: 0, x: 40, ease: Power3.easeOut }, '-=0.7');
  }, [])

  const sentence = (
    <div className={classes.sentenceContainer}>
      <div className={hoverFirst ? classes.sentenceVisible : classes.sentence}><Sentence >Loremmm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Sentence></div>
      <div className={hoverSecond ? classes.sentenceVisible : classes.sentence}><Sentence >Loremmm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Sentence></div>
      <div className={hoverThird ? classes.sentenceVisible : classes.sentence}><Sentence >Loremmm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Sentence></div>
    </div>
  )

  return (
    <div ref={app} className={classes.app}>
      <Layout>
        {sentence}
        <Backdrop show={hoverSkills}/>
        <ul className={classes.skillsList} ref={skills} onMouseEnter={() => setHoverSkills(true)} onMouseLeave={() => setHoverSkills(false)}>
          <li onMouseEnter={() => setHoverFirst(true)} onMouseLeave={() => setHoverFirst(false)}>
            COMMUNICATION
          </li>
          <li onMouseEnter={() => setHoverSecond(true)} onMouseLeave={() => setHoverSecond(false)}>
            MARKETING
          </li>
          <li onMouseEnter={() => setHoverThird(true)} onMouseLeave={() => setHoverThird(false)}>
            DIGITAL
          </li>
        </ul>
        <div className={classes.image} ref={picture} >
          <div ref={navItems}>
            <NavItems effect={timeline}/>
          </div>
        </div>
      </Layout>
    </div> 
  )
}

export default IndexPage
