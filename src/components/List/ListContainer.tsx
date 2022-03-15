import { AppStateType } from "../../redux/store";
import { connect } from "react-redux";
import List from "./List";
import {editingElement, getUsersThunk} from '../../redux/listReduser'
import { ElementsType } from "../../types/types";

export type mapStateToPropsType ={
    elements: Array<ElementsType>
    loading: boolean
}

export type MapDispatchToPropsType = {
    editingElement: (id:number, name:string, userName:string, email:string, addressStreet:string, 
        addressCity:string, addressZipcode:string, phone:string, website:string) =>void
    getUsersThunk: () =>void
}

let mapStateToProps = (state:AppStateType) =>{
    return{
        elements: state.listPage.elements,
        loading: state.listPage.loading
    }
}

const ListContainer = connect(mapStateToProps, {editingElement, getUsersThunk})(List)

export default ListContainer