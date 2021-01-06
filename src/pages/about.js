import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';


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
          <p>
            {props.data.contentfulAurore.bio.bio}
          </p>
      </Layout>
    </div>
  )
}

export default about