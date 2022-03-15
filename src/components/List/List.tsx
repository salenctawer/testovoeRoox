import React, { useEffect, useState } from "react";
import styles from './List.module.scss'
import { Link} from "react-router-dom";
import { MapDispatchToPropsType, mapStateToPropsType } from "./ListContainer";
import CircularProgress from '@mui/material/CircularProgress';

type PropsType = mapStateToPropsType & MapDispatchToPropsType

const List: React.FC<PropsType> = (props) =>{
    useEffect(()=>{
        props.getUsersThunk()
    }, [])
    const handleClickLink = (id:number, name:string, userName:string, email:string, addressStreet:string, 
        addressCity:string, addressZipcode:string, phone:string, website:string) =>{
        props.editingElement(id, name, userName, email, addressStreet, 
            addressCity, addressZipcode, phone, website)
    }
    if(!props.loading){
        return <CircularProgress sx={{position:'absolute', top:'50%', left:'50%'}}/>
    }
    return(
        <div className={styles.list}>
            <h1 className={styles.list__title}>Список пользователей</h1>
            {props.elements.map((item)=>
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
            <p className={styles.list__paragraph}>Найдено {props.elements.length} пользователей</p>
        </div>
    )
}

export default List