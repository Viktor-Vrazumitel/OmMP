import style from './FriendIcon.module.css'


function Friend({name}) {


  return ( 
<div className={style.icon}>
 {name}
</div>
   );
}

export default Friend;
