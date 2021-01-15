import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import classes from './Biography.module.css'


export const PageQuery = graphql`
query {
  contentfulAurore(nom: {eq: "Aurore Demierre"}) {
    bio {
      bio
    }
  }
}
`;

const about = (props) => {

  return (
    <div>
      <Navbar />
      <Layout>
          {/* <div className={classes.biography}>
            {props.data.contentfulAurore.bio.bio}
          </div> */}
          <div className={classes.bioWrap}>
            <div className={classes.about}>ABOUT</div>
            <div className={classes.title}>Communication, PR & Social Media Freelancer</div>
            <div className={classes.bio}> I see myself like a creative partner that challenge the ordinary : communication multitasker, with experience in the fashion and luxury sector, I am passionate about the challenges of a rapidly changing profession and faced of image challenge, reputation and influence. At a time when a hashtag, a tweet or an Instagram post can upset and move the lines, my knowledge of classic media, new players and techniques of digital communication are assets to design a relevant communication strategy and deploy it.</div>
          </div>
      </Layout>
    </div>
  )
}

export default about