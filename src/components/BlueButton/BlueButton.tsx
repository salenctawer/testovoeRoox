import React from "react";
import styles from './BlueButton.module.scss'

const BlueButton = (props:any) =>{
    return(
        <button className={styles.button}>{props.title}</button>
    )
}

export default BlueButton