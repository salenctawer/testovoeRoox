import { AppStateType } from "../../redux/store";
import { connect } from "react-redux";
import Profile from "./Profile";
import { EditingElementType } from "../../types/types";

export type mapStateToPropsType = {
    element: EditingElementType
}

let mapStateToProps = (state:AppStateType) =>{
    return{
        element: state.listPage.editing
    }
}

const ListContainer = connect(mapStateToProps, {})(Profile)

export default ListContainer