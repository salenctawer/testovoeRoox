import React from "react";
import styles from './List.module.scss'
import { Link} from "react-router-dom";

const List = (props:any) =>{
    const handleClickLink = (id:number, name:string, userName:string, email:string, addressStreet:string, 
        addressCity:string, addressZipcode:string, phone:string, website:string) =>{
        props.editingElement(id, name, userName, email, addressStreet, 
            addressCity, addressZipcode, phone, website)
    }
    return(
        <div className={styles.list}>
            <h1 className={styles.list__title}>Список пользователей</h1>
            {props.elements.map((item:any)=>
                <div className={styles.block} key={item.id}>
                    <div className={styles.block__container}>
                        <span className={styles.block__description}>ФИО:</span>
                        <span>{item.name}</span>
                    </div>
                    <div className={styles.block__container}>
                        <span className={styles.block__description}>Город:</span>
                        <span>{item.address.city}</span>
                    </div>
                    <div className={styles.block__container}>
                        <span className={styles.block__description}>Компания:</span>
                        <span>{item.company.name}</span>
                        <Link to={'/profile'} className={styles.block__link} onClick={()=>handleClickLink(item.id, item.name, item.username, item.email, item.address.street,
                            item.address.city, item.address.zipcode, item.phone, item.website)}>Подробнее</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default List