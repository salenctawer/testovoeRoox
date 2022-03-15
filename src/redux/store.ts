import { combineReducers, createStore } from "redux";
import listReducer from "./listReduser";


let rootReducer = combineReducers({
    listPage: listReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


let store = createStore(rootReducer)

//@ts-ignore
window.store = store

export default store