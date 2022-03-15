import { AppStateType } from "../../redux/store";
import { connect } from "react-redux";
import List from "./List";



let mapStateToProps = (state:AppStateType) =>{
    return{
        elements: state.listPage.elements
    }
}

const ListContainer = connect(mapStateToProps, {})(List)

export default ListContainer