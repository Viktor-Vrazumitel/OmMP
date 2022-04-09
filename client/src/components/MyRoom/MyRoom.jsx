import AudioStream from '../AudioStream/AudioStream';
import style from './MyRoom.module.css'



function MyRoom() {
  return ( 
    <div className={style.main}>
      <div className={style.pic}>
        <AudioStream />
      </div>
      <div className={style.chat}>
        CHAT
      </div>
      <div className={style.input}>
        <input type="text" />
      </div>
    </div>
   );
}

export default MyRoom;
