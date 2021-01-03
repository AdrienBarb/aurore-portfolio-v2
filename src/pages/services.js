import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import classes from "./services.module.scss";
import Sentence from '../components/Sentence/Sentence';
import Backdrop from '../components/Backdrop/Backdrop';
import Skill from '../components/Skill/Skill';


const ProjectPage = () => {
  const [hoverFirst, setHoverFirst] = useState(false);
  const [hoverSecond, setHoverSecond] = useState(false);
  const [hoverThird, setHoverThird] = useState(false);
  const [hoverSkills, setHoverSkills] = useState(false);

  let skills = useRef(null);

  const sentence = (
    <div className={classes.sentenceContainer}>
      <div className={hoverFirst ? classes.sentenceVisible : classes.sentence}><Sentence >Loremmm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Sentence></div>
      <div className={hoverSecond ? classes.sentenceVisible : classes.sentence}><Sentence >Loremmm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Sentence></div>
      <div className={hoverThird ? classes.sentenceVisible : classes.sentence}><Sentence >Loremmm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Sentence></div>
    </div>
  )

  return (
    <div>
      <Navbar />
      <Layout>
        <div className={classes.skillsContainer}>
          <Skill title={'Communication'} description={"Loremmm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}/>
          <Skill title={'Marketing'} description={"Loremmm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}/>
          <Skill title={'Digital'} description={"Loremmm Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}/>
        </div>
      </Layout>
    </div>
  )
}

export default ProjectPage


{/* <Backdrop show={hoverSkills}/>
{sentence}
<ul className={classes.skillsList} ref={skills} onMouseEnter={() => setHoverSkills(true)} onMouseLeave={() => setHoverSkills(false)}>
  <li onMouseEnter={() => setHoverFirst(true)} onMouseLeave={() => setHoverFirst(false)}>
    Communication
  </li>
  <li onMouseEnter={() => setHoverSecond(true)} onMouseLeave={() => setHoverSecond(false)}>
    Marketing
  </li>
  <li onMouseEnter={() => setHoverThird(true)} onMouseLeave={() => setHoverThird(false)}>
    Digital
  </li>
</ul> */}