import { AppStateType } from "../../redux/store";
import { connect } from "react-redux";
import Profile from "./Profile";


let mapStateToProps = (state:AppStateType) =>{
    return{
        element: state.listPage.editing
    }
}

const ListContainer = connect(mapStateToProps, {})(Profile)

export default ListContainer