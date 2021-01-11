import React, { useEffect, useState } from 'react'
import Img from "gatsby-image"
import classes from './WorkSection.module.css'
import Description from './Description/Description'

const WorkSection = (props) => {
    const [showDescription, setShowDescription] = useState(false)

    const clickHandler = () => {
        setShowDescription(!showDescription)
    }

    console.log(showDescription)

    return (
            <div onClick={() => clickHandler()} className={`${classes.workSectionContainer} ${props.counter % 2 == 0 ? classes.onLeft : classes.onRight}`}>
                
                <div className={classes.image}>
                    <Description show={showDescription}  description={props.data.description.description}/>
                    <Img 
                        fluid={props.data.image.fluid} 
                        key={props.data.image.fluid.src}
                        alt={props.data.image.title}
                    />
                </div>
            </div>
    )
}

export default WorkSection
