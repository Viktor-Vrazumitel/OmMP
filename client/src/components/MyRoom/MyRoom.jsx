import AudioStream from '../AudioStream/AudioStream';
import ChatWindow from '../Chat/Chat';
import Footer from '../Footer/Footer';
import MyNavbar from '../Navbar/Navbar';
import style from './MyRoom.module.css'



function MyRoom() {
  return ( 
    <div className={style.main}>
      <MyNavbar />
      <div className={style.pic}>
        <AudioStream />
      </div>
      <div className={style.chat}>
        <ChatWindow />
      </div>
      <Footer />
    </div>
   );
}

export default MyRoom;
