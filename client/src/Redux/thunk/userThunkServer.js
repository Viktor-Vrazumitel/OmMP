import axios from 'axios'
import { URL_BASE } from '../../config'
import { addRoom} from '../actions/roomAction'
import { addFriendAction } from '../actions/userAction'
import { createRoomAction, inUserRoomAction } from '../actions/userRoomAction'


export const findBaseUser = (login) => (dispatch) =>{
axios.post(`${URL_BASE}/search`, {login})
.then(res=> dispatch(addFriendAction(res.data)))
}


export const createBaseRoom =(title,user_id) =>(dispatch)=>{
   
    axios.post(`${URL_BASE}/room`, {title,user_id})
    .then(res=> dispatch(createRoomAction(res.data)))
}


export const allBaseRoom = ()=>(dispatch)=>{
    axios.get(`${URL_BASE}/room`)
.then(res=> dispatch(addRoom(res.data)))
}

export const inUserBaseRoom = (user)=> (dispatch)=>{
    axios.post(`${URL_BASE}/userRoom`,{user})
    .then(res=>dispatch(inUserRoomAction(res.data) ))

}


