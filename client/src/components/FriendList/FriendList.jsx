import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allBaseRoom } from '../../Redux/thunk/userThunkServer'
import Friend from '../UI/FriendIcon/FriendIcon'

function FriendList() {
    const friends = useSelector(state=> state.myFriend)



    return (
        <div>
{friends?.map(el => <Friend key={el.id} name={el.login}/>)}
        </div>
    )
}

export default FriendList
