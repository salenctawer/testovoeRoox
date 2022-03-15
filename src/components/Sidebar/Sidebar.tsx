import React from "react";
import BlueButton from "../BlueButton/BlueButton";
import styles from './Sidebar.module.scss'

const Sidebar = () =>{
    return(
        <div className={styles.sidebar}>
            <h1 className={styles.sidebar__title}>Сортировка</h1>
            <BlueButton title={'По городу'}/>
            <BlueButton title={'По компании'}/>
        </div>
    )
}

export default Sidebar