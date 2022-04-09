import AudioStream from '../AudioStream/AudioStream';
import ChatWindow from '../Chat/Chat';
import style from './MyRoom.module.css'



function MyRoom() {
  return ( 
    <div className={style.main}>
      <div className={style.pic}>
        {/* <AudioStream /> */}
      </div>
      <div className={style.chat}>
        <ChatWindow />
      </div>
      <div className={style.input}>
        <input type="text" />
      </div>
    </div>
   );
}

export default MyRoom;
