import React, { useRef, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import WorkSection from '../components/WorkSection/WorkSection';
import { graphql, useStaticQuery } from 'gatsby';
import classes from './Work.module.css';
import { gsap } from "gsap/all";


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

  let app = useRef(null)
  const timeline = gsap.timeline();

  useEffect(() => {
    timeline.to(app.current, {duration: 0.2, css: {visibility: 'visible'}})
    timeline.to(app.current, {duration: 0.8, opacity: 1, ease: "power2.inOut" });
  }, [])

  return (
    <div ref={app} className={classes.app}>
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
