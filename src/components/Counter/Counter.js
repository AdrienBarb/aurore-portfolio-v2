import React, { useEffect, useState } from 'react'
import classes from './Counter.module.css'

const Counter = (props) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let ten = 10
        let inc = Math.floor(Math.random() * 2) + 1 
        let multiple = ten * inc
        let time = Math.floor(Math.random() * 600) + 1 
        if (count < 100) {
            setTimeout(() => {
                setCount(count + multiple)
              }, time);
        } else {
            props.go()
        }
    }, [count])

    return (
        <div className={classes.counter}>
            {count}%
        </div>
    )
}

export default Counter
