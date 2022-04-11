import {  useSelector } from 'react-redux'
import Friend from '../UI/FriendIcon/FriendIcon'

function FriendList() {
    const friends = useSelector(state=> state.myFriend)
  console.log(friends)


    return (
        <div>

{friends && friends.map(el => <Friend key={el.id} name={el.login}/>)}


        </div>
    )
}

export default FriendList
