import React, {useRef, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import classes from './About.module.css'
import { gsap } from "gsap/all";


export const PageQuery = graphql`
query {
  contentfulAurore(nom: {eq: "Aurore Demierre"}) {
    bioTitle,
    bio {
      bio
    }
  }
}
`;

const About = (props) => {

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
          <div className={classes.bioWrap}>
            <div className={classes.about}>{props.data.contentfulAurore.bioTitle}</div>
            <div className={classes.bio}>{props.data.contentfulAurore.bio.bio}</div>
          </div>
      </Layout>
    </div>
  )
}

export default About