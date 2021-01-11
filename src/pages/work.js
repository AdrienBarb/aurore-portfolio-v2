import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import WorkSection from '../components/WorkSection/WorkSection';
import { graphql, useStaticQuery } from 'gatsby';
import classes from './Work.module.css';

const WorkPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulWorks {
        edges {
          node {
            title
            description {
              description
            }
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
          <ul className={classes.workSectionList}>
            {data.allContentfulWorks.edges.map((edge, index) => {
              return (
                <li key={edge.node.title} className={classes.workSectionWrapper}>
                  <WorkSection counter={index} data={edge.node} />
                </li>
              )
            })}
          </ul>
      </Layout>
    </div>
  )
}

export default WorkPage
