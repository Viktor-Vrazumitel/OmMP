import axios from 'axios'
import { URL_BASE } from '../../config'
import { addFriendAction, deleteFriendAction, getFriendsInUser } from '../actions/freindAction'


export const findBaseUser = (login,userIn) => (dispatch) =>{
    axios.post(`${URL_BASE}/search`, {login,userIn})
    .then(res=> dispatch(addFriendAction(res.data)))
    }

    export const findBaseFriendUser = (user)=>(dispatch)=>{
        axios.post(`${URL_BASE}/friend`,{user})
        .then(res=>dispatch(getFriendsInUser(res.data)))
        }

        export const deleteFrienBase = (id) => (dispatch)=>{
            axios.delete(`${URL_BASE}/friend/${id}`)
            .then(res => dispatch(deleteFriendAction(res.data)))
        }
