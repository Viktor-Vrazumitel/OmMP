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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Введите ваше имя"
          />
          <button onClick={connect}>Войти</button>
        </div>
        <AudioStream />
      </div>
    );
  }

  return (
    <div className={style.center}>
      <div>
       
        <div className={style.messages}>
          {messages.map((mess) => (
            <div key={mess.id}>
              {mess.event === "connection" ? (
                <div className={style.connection_message}>
                  Пользователь {mess.username} подключился
                </div>
              ) : (
                <div className={style.messages}>
                  {mess.username}. {mess.message}
                </div>
              )}
            </div>
          )).reverse()}
        </div>
        <div className={style.form}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
          <button className={style.sendBtn} onClick={sendMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;

