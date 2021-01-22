import React, { useEffect, useState } from 'react'
import classes from './Counter.module.css'

const Counter = (props) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let base_number = 10
        let multiple_number = Math.floor(Math.random() * 2) + 1 
        let increment_number = base_number * multiple_number
        let time = Math.floor(Math.random() * 1000) + 200
        if (count < 100) {
            setTimeout(() => {
                setCount(count + increment_number)
              }, time);
        } else {
            props.startAnimation()
        }
    }, [count, props])

    return (
        <div className={classes.counterWrapper}>
            <div className={classes.counter}>
                {count}%
            </div>
        </div>
    )
}

export default Counter
