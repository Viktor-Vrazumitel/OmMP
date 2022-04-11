import axios from 'axios'
import { URL_BASE } from '../../config'
import { addRoom} from '../actions/roomAction'
import { createRoomAction, inUserRoomAction } from '../actions/userRoomAction'





export const createBaseRoom =(title,user_id) =>(dispatch)=>{
   console.log(title,user_id);
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




