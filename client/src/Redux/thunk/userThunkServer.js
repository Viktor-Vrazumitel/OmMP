import axios from 'axios'
import { addFriendAction } from '../actions/userAction'
import { URL_BASE } from '../../config'

export const findBaseUser = (login) => (dispatch) =>{
axios.post(`${URL_BASE}/search`, {login})
.then(res=> dispatch(addFriendAction(res.data)))
}


export const createBaseRoom =(title) =>(dispatch)=>{
    axios.post(`${URL_BASE}/room`, {title})
    .then(res=> dispatch(addFriendAction(res.data)))
}


