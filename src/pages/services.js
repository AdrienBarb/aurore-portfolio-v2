import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import classes from "./services.module.scss";
import Sentence from '../components/Sentence/Sentence';
import Backdrop from '../components/Backdrop/Backdrop';
import Skill from '../components/Skill/Skill';
import { HiX } from "react-icons/hi";


const ProjectPage = () => {
  const [showBackdrop, setshowBackdrop] = useState(false);
  const [skillName, setskillName] = useState('');

  const onSkillClickHandler = (skill) => {
    setshowBackdrop(true)
    setskillName(skill)
  }

  console.log(skillName)

  let skill = null;

  switch(skillName) {
    case 'Communication':
      skill = <Skill title={'Communication'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      break;
    case 'Marketing':
      skill = <Skill title={'Marketing'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      break;
    case 'Digital':
      skill = <Skill title={'Digital'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      break;
    case 'Media':
      skill = <Skill title={'Media'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      break;
    case 'Public relation':
      skill = <Skill title={'Public relation'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      break;
    case 'Creative Thinking':
      skill = <Skill title={'Creative Thinking'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      break;
    case 'Crisis strategies':
      skill = <Skill title={'Crisis strategies'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      break;
    case 'Social media':
      skill = <Skill title={'Social media'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      break;
    case 'Reach more client':
      skill = <Skill title={'Reach more client'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      break;
    case 'Instagram':
      skill = <Skill title={'Instagram'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
      break;
    default:
      break;
  }
  

  return (
    <div>
      <Navbar />
      <Layout>
        <HiX className={`${classes.close} ${showBackdrop ? classes.show : ''}`} onClick={() => setshowBackdrop(false)}/>
        <Backdrop show={showBackdrop}/>
        <div className={`${classes.skillWrapper} ${showBackdrop ? classes.show : ''}`}>
          {skill}
        </div>
        <div className={classes.serviceWrapper}>
          <div className={classes.title}>What I do? <span className={classes.note}>(Click on the skills)</span></div>
          <div className={classes.skillsContainer}>
            <span className={classes.skill1} onClick={() => onSkillClickHandler('Communication')}>Communication </span>
            <span className={classes.skill2} onClick={() => onSkillClickHandler('Marketing')}>Marketing </span>
            <span className={classes.skill3} onClick={() => onSkillClickHandler('Digital')}>Digital </span>
            <span className={classes.skill4} onClick={() => onSkillClickHandler('Media')}>Media </span>
            <span className={classes.skill5} onClick={() => onSkillClickHandler('Public relation')}>Public relation </span>
            <span className={classes.skill6} onClick={() => onSkillClickHandler('Creative Thinking')}>Creative Thinking </span>
            <span className={classes.skill7} onClick={() => onSkillClickHandler('Crisis strategies')}>Crisis strategies </span>
            <span className={classes.skill8} onClick={() => onSkillClickHandler('Social media')}>Social media </span>
            <span className={classes.skill9} onClick={() => onSkillClickHandler('Reach more client')}>Reach more client </span>
            <span className={classes.skill10} onClick={() => onSkillClickHandler('Instagram')}>Instagram</span>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ProjectPage