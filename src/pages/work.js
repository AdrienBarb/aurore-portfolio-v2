import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import { graphql, useStaticQuery } from 'gatsby';


const WorkPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulWorks {
        edges {
          node {
            title
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
                <li>
                  {edge.node.title}
                </li>
              )
            })}
          </ul>
      </Layout>
    </div>
  )
}

export default WorkPage
