import axios from 'axios'
import { ElementsType } from '../types/types'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const API = {
    getUsers(){
        return instance.get('users')
    }
}