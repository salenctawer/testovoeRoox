import React from "react";
import styles from './Sidebar.module.scss'

const Sidebar = () =>{
    return(
        <div className={styles.sidebar}>
            <h1 className={styles.sidebar__title}>Сортировка</h1>
            <button className={styles.sidebar__button}>По городу</button>
            <button className={styles.sidebar__button}>По компании</button>
        </div>
    )
}

export default Sidebar