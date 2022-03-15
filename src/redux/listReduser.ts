import { AppStateType } from './store';

import { ElementsType } from "../types/types"
import { API } from '../api/api'
import { ThunkAction } from "redux-thunk"


const EDITING_ELEMENT = 'EDITING_ELEMENT'
const SORT_CITY = 'SORT_CITY'
const SORT_COMPANY = 'SORT_COMPANY'
const ADD_ELEMENTS = 'ADD_ELEMENTS'
const LOADING_USERS = 'LOADING_USERS'

let initialState = {
    elements:[
       
    ] as Array<ElementsType>,
    editing:{
        id: 0 as number,
        name: '' as string,
        userName:'' as string,
        email:'' as string,
        addressStreet: '' as string,
        addressCity:'' as string,
        addressZipcode:'' as string,
        phone:'' as string,
        website:'' as string
    },
    loading: false as boolean
}

const listReducer = (state=initialState, action:ActionsTypes) =>{
    switch(action.type){
        case ADD_ELEMENTS:{
          return{
            ...state,
            elements: action.array,
            loading: true
          }
        }
        case EDITING_ELEMENT:{
            let element =  state.editing
            element = {id: action.id, name: action.name, userName: action.userName, email: action.email, addressStreet: action.addressStreet, addressCity: action.addressCity,
                addressZipcode: action.addressZipcode, phone: action.phone, website: action.website}
            return{
                ...state,
                editing:element
            }
        }
        case SORT_CITY:{
          let object = action.array
          return{
            ...state,
            elements: [...object]
          }
        }
        case SORT_COMPANY:{
          let object = action.array
          return{
            ...state,
            elements: [...object]
          }
        }
        default:
            return state
    }
}

type ActionsTypes = editingElementType | sortCityType | sortCompanyType | addElementsType

export type editingElementType = {
    type: typeof EDITING_ELEMENT
    name: string,
    userName: string,
    email: string,
    addressCity: string,
    addressStreet: string,
    addressZipcode: string,
    phone: string,
    website: string,
    id: number
}

export type sortCityType = {
  type: typeof SORT_CITY,
  array: Array<ElementsType>
}

export type sortCompanyType = {
  type: typeof SORT_COMPANY,
  array: Array<ElementsType>
}
export type addElementsType = {
  type: typeof ADD_ELEMENTS,
  array: Array<ElementsType>
}
export type loadingUsersType = {
  type: typeof LOADING_USERS
}

export const editingElement = (id:number, name:string, userName:string, email:string, addressStreet:string, 
    addressCity:string, addressZipcode:string, phone:string, website:string): editingElementType =>{
    return{
        type: EDITING_ELEMENT,
        name: name,
        userName: userName,
        email: email,
        addressCity: addressCity,
        addressStreet: addressStreet,
        addressZipcode: addressZipcode,
        phone: phone,
        website: website,
        id: id
    }
}

export const sortCity = (array:Array<ElementsType>):sortCityType =>{
  return{
    type: SORT_CITY,
    array:array
  }
}

export const sortCompany = (array:Array<ElementsType>):sortCompanyType =>{
  return{
    type: SORT_COMPANY,
    array:array
  }
}

export const addElements = (array:Array<ElementsType>):addElementsType =>{
  return{
    type: ADD_ELEMENTS,
    array:array
  }
}

export const getUsersThunk = ():ThunkAction<void, AppStateType, unknown, ActionsTypes> =>{
  return(dispatch) =>{
    API.getUsers()
      .then(response=>{
        dispatch(addElements(response.data))
      })
  }
}

export default listReducer