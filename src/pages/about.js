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
            <div className={classes.bio}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <div className={classes.bio}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
          </div>
      </Layout>
    </div>
  )
}

export default about