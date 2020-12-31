import React from 'react';
import classes from './navItems.module.scss'
import { Link } from "gatsby"
import { navigate } from "@reach/router" 

const NavItems = (props) => {

  const handle = (event, url) => {
    event.preventDefault();
    event.stopPropagation();
    const timelineDuration = props.effect.duration() * 1000;
    props.effect.reverse()
    setTimeout(() => {
      navigate(`/${url}`)
    }, timelineDuration);
  }

  return (
      <ul className={classes.navItemsList}>
        <li  className={classes.underlineContainer}>
          <div className={classes.underline}><Link onClick={event => handle(event, 'work')} className={classes.word} to="/work">WORKS</Link></div>
        </li>
        <li className={classes.underlineContainer}>
          <div onClick={props.fonction} className={classes.underline}><Link onClick={event => handle(event, 'project')} className={classes.word} to="/project">PROJECT</Link></div>
        </li>
        <li className={classes.underlineContainer}>
          <div className={classes.underline}><Link onClick={event => handle(event, 'biography')} className={classes.word} to="/biography">BIOGRAPHY</Link></div>
        </li>
        <li className={classes.underlineContainer}>
          <div className={classes.underline}><Link onClick={event => handle(event, 'contact')} className={classes.word} to="/contact">CONTACT</Link></div>
        </li>
      </ul>
  )
}

export default NavItems
