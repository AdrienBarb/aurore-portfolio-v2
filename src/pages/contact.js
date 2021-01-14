import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import classes from './Contact.module.css'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';




const ContactPage = () => {

  return (
    <div>
      <Navbar />
      <Layout>
        <div className={classes.contactWrap}>
          <div className={classes.inTouch}>GET IN TOUCH !</div>
          <div className={classes.contactDetails}>
            <div className={classes.email}> <a href="mailto:aurore.demierre@gmail.com">aurore.demierre@gmail.com</a></div>
            <div className={classes.phone}><a href="tel:0618018634">06 18 01 86 34</a></div>
            <div className={classes.iconWrapper}>
              <a href="https://www.linkedin.com/in/aurore-demierre/"><FaLinkedinIn className={classes.icon}/></a>
              <a href="https://www.instagram.com/auroredemierre/"><FaInstagram className={classes.icon}/></a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage