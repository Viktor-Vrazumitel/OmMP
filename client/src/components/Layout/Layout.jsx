import MainPage from "../Page/Page";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import style from "./Layout.module.css";
import M from "materialize-css";
import FriendList from "../FriendList/FriendList";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MyRoom from "../MyRoom/MyRoom";
import SignIn from "../Forms/SignIn/SignIn";
import SignUp from "../Forms/SignUp/SignUp";
import SignOut from "../Forms/SignOut/SignOut";
import PrivateRoute from "../PrivateRouter/PrivateRouter";
import { findBaseUser } from "../../Redux/thunk/friendThunk";
import {
  allBaseRoom,
  createBaseRoom,
  upDateBaseRoom,
} from "../../Redux/thunk/userThunkServer";
import DivNewRoom from "../divNewRoom/divNewRoom";
import CreateRoom from "../CreateRoom/CreateRoom";
import { upDateRoom } from "../../Redux/actions/roomAction";
import { useEffect } from "react";
import { createRoomAction } from "../../Redux/actions/userRoomAction";
import DivNewRoomList from "../divNewRoomList/divNewRoomList";
import logo from "../../img/logo/logo1.svg";

function modal(clazz) {
  const elems = document.querySelector(clazz);

  const instances = M.Modal.init(elems);
}

function Layout() {
  M.AutoInit();
  const dispatch = useDispatch();
  const userIn = useSelector((state) => state.user);
  const myRoom = useSelector((state) => state.rooms);
  const usRoom = useSelector((state) => state.userRoom);
  function findUser(input) {
    dispatch(findBaseUser(input, userIn));
  }

  const navigate = useNavigate();

  function createRoomHandler(input, userIn) {
    dispatch(createBaseRoom(input, userIn));
    // dispatch(createRoomAction(myRoom,userIn))
  }

  return (
    <div className={style.bars}>
      <div className={style.left}>
        <div className={style.logo}>
          <div onClick={() => navigate("/")}>
            <img src={logo} alt="" />
          </div>
        </div>

        <div className={style.myRooms}>
          <span className={`material-icons ${style.fontRoomLogo}`}>cast</span>
          <span className={style.fontRoom}>Моя комната</span>
          <div className={style.roomlist}>
            <DivNewRoomList />
          </div>
        </div>

        {/* {!usRoom.length ? (
            <DivNewRoom
              key={myRoom[0]?.id}
              onClick={inHomeHandler}
              title={myRoom[0]?.title}
            />
          ) : (
            <></>
          )} */}

        <div className={style.myFavorite}>
          <span className={`material-icons ${style.fontRoomLogo}`}>star</span>
          <span className={style.fontRoom}>Избранное</span>
        </div>

        <div className={style.createRoom}>
          {userIn ? (
            <CreateRoom
              modal={modal}
              createRoomHandler={createRoomHandler}
              userIn={userIn}
            />
          ) : (
            <></>
          )}
        </div>

        <div>
          <div className={style.btnBlock}>
            <div className={`material-icons ${style.mic}`}>mic</div>
            <div className={`material-icons ${style.headset}`}>headphones</div>
            <div className={`material-icons ${style.settings}`}>settings</div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        {/* <Route path='/signin' element={<Signin />}/> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/room/:id" element={<MyRoom />} />
        <Route
          path="/auth/signout"
          element={
            <PrivateRoute>
              <SignOut />
            </PrivateRoute>
          }
        />
      </Routes>

      <div className={style.right}>
        <FriendList />

        <div className={style.btnAdd}>
          {userIn ? (
            <>
              <span
                className={`modal-trigger ${style.addFriend}`}
                href="#modal1"
                onClick={() => modal("#modal1")}
              >
                <i className={`material-icons ${style.addIcon}`}>add</i>
              </span>
              <ModalWindow funcHandler={findUser} />{" "}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
