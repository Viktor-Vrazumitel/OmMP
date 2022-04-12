import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFriendAction } from '../../../Redux/actions/freindAction';
import { deleteFrienBase } from '../../../Redux/thunk/friendThunk';
import style from './FriendIcon.module.css'


function Friend({name,id}) {
  const dispatch = useDispatch()

  function delFriHandler(id){
  dispatch(deleteFrienBase(id))
  }


  return ( 
<div className={style.icon}>
  <div className={style.name}>
    {name}
  </div>
  <div>

    <button className={style.btnDelFriend} onClick={()=>delFriHandler(id)}>x</button>

  </div>
</div>
   );
}

export default Friend;
