import React from 'react';
import classes from './Sentence.module.scss'

const Sentence = (props) => {
  return (
    <div className={classes.sentenceContainer}>
      
      <div className={classes.sentence}>
        {props.children}
      </div>
      
    </div>
  )
}

export default Sentence;
