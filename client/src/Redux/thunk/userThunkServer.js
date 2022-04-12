import axios from 'axios'
import { URL_BASE } from '../../config'
import { addRoom, upDateRoom} from '../actions/roomAction'
import { createRoomAction, deleteUserRoom, inUserRoomAction } from '../actions/userRoomAction'





export const createBaseRoom =(title,user_id) =>(dispatch)=>{
    axios.post(`${URL_BASE}/room`, {title,user_id})
    .then(res=> dispatch(upDateRoom(res.data)))
}


export const allBaseRoom = ()=>(dispatch)=>{
    axios.get(`${URL_BASE}/room`)
.then(res=> dispatch(addRoom(res.data)))
}

export const upDateBaseUserRoom=(user_id)=>(dispatch)=>{
    axios.get(`${URL_BASE}/room`)
    .then(res=> dispatch(createRoomAction(res.data,user_id)))
}


export const inUserBaseRoom = (user)=> (dispatch)=>{
    axios.post(`${URL_BASE}/userRoom`,{user})
    .then(res=>dispatch(inUserRoomAction(res.data) ))

}

export const deleteBaseRoomUser = (id) => (dispatch)=>{
    axios.delete(`${URL_BASE}/room/${id}`)
    .then(res=> dispatch(deleteUserRoom(res.data)) )
    
}




