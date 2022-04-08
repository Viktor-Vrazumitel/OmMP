import axios from 'axios'
import { URL_BASE } from '../../config'
import { addFriendAction } from '../actions/userAction'


export const findBaseUser = (login) => (dispatch) =>{
axios.post(`${URL_BASE}/search`, {login})
.then(res=> dispatch(addFriendAction(res.data)))
}