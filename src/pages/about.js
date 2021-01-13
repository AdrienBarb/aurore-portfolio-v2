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
          <div className={classes.biography}>
            {props.data.contentfulAurore.bio.bio}
          </div>
      </Layout>
    </div>
  )
}

export default about