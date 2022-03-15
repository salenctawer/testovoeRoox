import { AppStateType } from "../../redux/store";
import { connect } from "react-redux";
import List from "./List";
import {editingElement} from '../../redux/listReduser'
import { ElementsType } from "../../types/types";

export type mapStateToPropsType ={
    elements: Array<ElementsType>
}

export type MapDispatchToPropsType = {
    editingElement: (id:number, name:string, userName:string, email:string, addressStreet:string, 
        addressCity:string, addressZipcode:string, phone:string, website:string) =>void
}

let mapStateToProps = (state:AppStateType) =>{
    return{
        elements: state.listPage.elements
    }
}

const ListContainer = connect(mapStateToProps, {editingElement})(List)

export default ListContainer