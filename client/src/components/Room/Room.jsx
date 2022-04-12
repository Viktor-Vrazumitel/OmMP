import { useNavigate } from "react-router-dom";
import style from "./Room.module.css";

function Room({ title, id }) {
  const navigate = useNavigate();
  
  function inRoomHandler() {
    navigate(`/room/${id}`);
  }

  return (
    <>
      <div className={`card ${style.card}`}>
        <div className="card-body">
          <h5 className="card-title" onClick={inRoomHandler}>
            {title}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted"></h6>
        </div>
      </div>
    </>
  );
}

export default Room;
