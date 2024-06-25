import React, { useEffect, useState } from "react";

import styles from "./Counter.module.css"

type props = {
    counter: number
}

const Counter = ({counter}:props) => {
    const [count, setCount] = useState(counter)

    useEffect(()=>{
     if(counter>10){
        setCount(0)
     }   
    },[count, counter])

    return <div className={styles.counter}>
        {count}
    </div>
}


export {Counter}