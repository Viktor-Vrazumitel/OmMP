import style from './Chat.module.css'
import { useState, useRef } from "react";
import AudioStream from '../AudioStream/AudioStream';

function ChatWindow() {
  const [messages, setMessage] = useState([]);
  const [value, setValue] = useState("");
  const socket = useRef();
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState("");

  function connect() {
    socket.current = new WebSocket("ws://localhost:5000");
    socket.current.onopen = () => {
      setConnected(true);
      const message = {
        event: "connection",
        username,
        id: Date.now(),
      };
      socket.current.send(JSON.stringify(message));
    };
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessage((prev) => [message, ...prev]);
    };
    socket.current.onclose = () => {
      console.log("socketClose");
    };
    socket.current.onerror = () => {
      console.log("socketError");
    };
  }

  const sendMessage = async () => {
    const message = {
      username,
      message: value,
      id: Date.now(),
      event: "message",
    };
    socket.current.send(JSON.stringify(message));
    setValue("");
  };

  if (!connected) {
    return (
      <div className={style.center}>
        <div className={style.form}>
          <input
            className={style.inputText}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder=" Введите ваше имя"
          />
          <button className={style.logBtn} onClick={connect}>Войти</button>
        </div>
      </div>
    );
  }

  return (
    <div className={style.center}>
      <div >
        <div className={style.messages}>
          {messages.map((mess) => (
            <div key={mess.id}>
              {mess.event == "connection" ? (
                <div className={style.messages}>
                  Пользователь {mess.username} входит в чат
                </div>
              ) : (
                <div className={style.messages}>
                  <div className={style.chat}>
                    <div className={style.userStyle}>
                    {mess.username}: 
                    </div>
                    <div className={style.messageStyle}>
                    {mess.message}
                    
                    </div>
                  </div>
                </div>
              )}
            </div>
          )).reverse()}
        </div>
        <div className={style.form}>
          <input
            
            className={style.inputText}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            
          />
          <button className={`grey darken-4 ${style.sendBtn} `} onClick={sendMessage}><span className='material-icons'>send</span></button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;

