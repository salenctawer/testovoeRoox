import { AppStateType } from "../../redux/store";
import { connect } from "react-redux";
import List from "./List";
import {editingElement} from '../../redux/listReduser'


let mapStateToProps = (state:AppStateType) =>{
    return{
        elements: state.listPage.elements
    }
}

const ListContainer = connect(mapStateToProps, {editingElement})(List)

export default ListContainer