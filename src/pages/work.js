import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"


const WorkPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulWorks {
        edges {
          node {
            title
            image {
              fluid(maxWidth: 980) {
                 ...GatsbyContentfulFluid
              }
           }
          }
        }
      }
    }
  `)



  return (
    <div>
    <Navbar />
      <Layout>
          <ul>
            {data.allContentfulWorks.edges.map((edge) => {
              return (
                <li key={edge.node.title}>
                  {edge.node.title}
                <div>
                <Img 
                      fluid={edge.node.image.fluid} 
                      key={edge.node.image.fluid.src}
                      alt={edge.node.image.title}
                  />
                </div>
                </li>
              )
            })}
          </ul>
      </Layout>
    </div>
  )
}

export default WorkPage
