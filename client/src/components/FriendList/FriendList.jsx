import {  useSelector } from 'react-redux'
import Friend from '../UI/FriendIcon/FriendIcon'

function FriendList() {
    const friends = useSelector(state=> state.myFriend)
 


    return (
        <div>

{friends && friends.map(el => <Friend key={el.id} name={el.name || el.login} id={el.id}/>)}


        </div>
    )
}

export default FriendList
