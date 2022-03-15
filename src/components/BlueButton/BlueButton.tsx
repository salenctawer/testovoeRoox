import React from "react";
import styles from './BlueButton.module.scss'

const BlueButton = (props:any) =>{
    return(
        <button className={styles.button} onClick={props.onClick}>{props.title}</button>
    )
}

export default BlueButton