import React from "react";
import styles from './List.module.scss'

const List = (props:any) =>{
    return(
        <div className={styles.list}>
            <h1>Список пользователей</h1>
            {props.elements.map((item:any)=>
                <div className={styles.block}>
                    <p>{item.name}</p>
                    <p>{item.address.city}</p>
                    <p>{item.company.name}</p>
                </div>
            )}
        </div>
    )
}

export default List