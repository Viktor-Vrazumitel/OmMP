import axios from 'axios'
import { URL_BASE } from '../../config'
import { addFriendAction, getFriendsInUser } from '../actions/freindAction'


export const findBaseUser = (login) => (dispatch) =>{
    axios.post(`${URL_BASE}/search`, {login})
    .then(res=> dispatch(addFriendAction(res.data)))
    }

    export const findBaseFriendUser = (user)=>(dispatch)=>{
        axios.post(`${URL_BASE}/friend`,{user})
        .then(res=>dispatch(getFriendsInUser(res.data)))
        }

    //     export const findFriendAction = (user)=>{
    //         return{
    //             type: FIND_FRIEND,
    //             payload: user
    //       }
    //    }