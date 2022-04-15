import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AudioStream from "../AudioStream/AudioStream";
import ChatWindow from "../Chat/Chat";
import Footer from "../Footer/Footer";

import MyNavbar from "../Navbar/Navbar";
import style from "./MyRoom.module.css";

function MyRoom() {
  const [status, setStatus] = useState(false);
  const { id } = useParams();
  const userIn = useSelector((state) => state.user);
  const rooms = useSelector((state) => state.rooms);
  const inRoom = rooms.filter((el) => el.id === +id);
  const allUser = useSelector((state) => state.allUser);
  const userRoomName = allUser.filter((el) => el.id === inRoom[0].user_id);
  console.log(userRoomName)
  useEffect(() => {
    if (userIn?.id === inRoom[0]?.user_id) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }, [inRoom, userIn?.id]);

  return (
    <div className={style.main}>
      <div className={style.logoBox}>
          <div className={style.userRoom}>{userRoomName[0]?.login}</div>
          <span class={`material-icons ${style.logoRec}`}>
    record_voice_over
    </span>

      </div>
      <MyNavbar />
      <div className={style.pic}>{status ? <></> : <AudioStream />}</div>
      <div className={style.chat}>
        <ChatWindow />
      </div>
      
      <Footer />
    </div>
  );
}

export default MyRoom;
