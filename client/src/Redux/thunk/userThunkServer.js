import axios from 'axios'
import { addFriendAction } from '../actions/userAction'

export const findBaseUser = (login) => (dispatch) =>{
axios.post('http://localhost:3001/search', {login})
.then(res=> dispatch(addFriendAction(res.data)))
}


export const createBaseRoom =(title) =>(dispatch)=>{
    axios.post(`${URL_BASE}/room`, {title})
    .then(res=> dispatch(addFriendAction(res.data)))
}

