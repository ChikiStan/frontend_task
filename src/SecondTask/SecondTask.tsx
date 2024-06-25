import React, { useState } from "react"
import styles from './SecondTask.module.css'
import { Counter } from "../Counter/Counter"


const SecondTask = () => {
    const [counter, setCounter] = useState(0)
    
    return <div className={styles.container}>
        <button className={styles.button}
        onClick={()=>setCounter((prev)=> prev+=1)}
        >Увеличить значение</button>
        <p className={styles.descriprion}>
            Необходимо исправить ошибку счетчика, который не увеличивается при нажатии
        </p>
        <Counter counter={counter} />
    </div>
} 

export {SecondTask}
