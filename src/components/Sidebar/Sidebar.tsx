import React from "react";
import BlueButton from "../BlueButton/BlueButton";
import styles from './Sidebar.module.scss'
import { MapDispatchToPropsType, mapStateToPropsType } from "./SidebarContainer";

type PropsType = mapStateToPropsType & MapDispatchToPropsType

const Sidebar:React.FC<PropsType> = (props) =>{
    const sortCity = () =>{
        props.sortCity(props.elements.sort((a,b) => a.address.city.toLowerCase() > b.address.city.toLowerCase() ? 1 : -1))
    }
    const sortCompany = () =>{
        props.sortCompany(props.elements.sort((a,b) => a.company.name.toLowerCase() > b.company.name.toLowerCase() ? 1 : -1))
    }
    return(
        <div className={styles.sidebar}>
            <h1 className={styles.sidebar__title}>Сортировка</h1>
            <BlueButton onClick={()=>sortCity()} title={'По городу'}/>
            <BlueButton onClick={()=>sortCompany()} title={'По компании'}/>
        </div>
    )
}

export default Sidebar