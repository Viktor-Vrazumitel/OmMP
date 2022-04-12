import style from './FriendIcon.module.css'


function Friend({name}) {


  return ( 
<div className={style.icon}>
  <div className={style.name}>
    {name}
  </div>
  <div>
    <button className={style.btnDelFriend}>x</button>
  </div>
</div>
   );
}

export default Friend;
