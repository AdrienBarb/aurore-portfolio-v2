import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


export const PageQuery = graphql`
query {
  contentfulAurore(nom: {eq: "Aurore Demierre"}) {
    bio {
      bio
    }
  }
}
`;

const BiographyPage = (props) => {

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

export default BiographyPage