import { combineReducers, createStore, applyMiddleware } from "redux";
import listReducer from "./listReduser";
import thunkMiddleware from 'redux-thunk'


let rootReducer = combineReducers({
    listPage: listReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store

export default store