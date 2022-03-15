import { AppStateType } from "../../redux/store";
import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { ElementsType } from "../../types/types";
import { sortCity, sortCompany } from "../../redux/listReduser";

export type mapStateToPropsType ={
    elements: Array<ElementsType>
}

export type MapDispatchToPropsType = {
    sortCity: (array:Array<ElementsType>) =>void
    sortCompany: (array:Array<ElementsType>) =>void
}

let mapStateToProps = (state:AppStateType) =>{
    return{
        elements: state.listPage.elements
    }
}

const SidebarContainer = connect(mapStateToProps, {sortCity, sortCompany})(Sidebar)

export default SidebarContainer