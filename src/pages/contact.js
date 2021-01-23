import React, {useRef, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import classes from './Contact.module.css'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { gsap } from "gsap/all";




const ContactPage = () => {
  let app = useRef(null)
  const timeline = gsap.timeline();

  useEffect(() => {
    timeline.to(app.current, {duration: 0.2, css: {visibility: 'visible'}})
    timeline.to(app.current, {duration: 0.8, opacity: 1, ease: "power2.inOut" });
  }, [])

  return (
    <div ref={app} className={classes.app}>
      <Navbar component={app}/>
      <Layout>
        <div className={classes.contactWrap}>
          <p className={classes.title}>I'm <span className={classes.italic}>looking</span> forward to hearing <span className={classes.italic}>from</span> you<span className={classes.dot}>.</span></p>
          <div className={classes.content}><a href="mailto:aurore.demierre@gmail.com">aurore.demierre@gmail.com</a></div>
          <div className={classes.content}><a href="tel:0618018634">+33 6 18 01 86 34</a></div>
          <div className={classes.iconWrapper}>
            <a href="https://www.linkedin.com/in/aurore-demierre/"><FaLinkedinIn className={classes.icon}/></a>
            <a href="https://www.instagram.com/goodthingshappn/"><FaInstagram className={classes.icon}/></a>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage