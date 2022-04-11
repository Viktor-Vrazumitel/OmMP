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

function modal() {
  const elems = document.querySelectorAll(".modal");
  // const instances = M.Modal.init(elems);
}

function Layout() {
  M.AutoInit();
  const dispatch = useDispatch();
  const userIn = useSelector((state) => state.user);
const myRoom = useSelector(state=> state.userRoom)

  function findUser(input) {
    dispatch(findBaseUser(input, userIn));
    console.log("layout");
  }

  const navigate = useNavigate();

  function inHomeHandler() {
    navigate("/");
  }

  return (
    <div className={style.bars}>
      <div className={style.left}>
        <div>
          <logo />
        </div>
        {/* <div className={style.logo}> */}
        {/* <span onClick={()=>navigate('/')}>OmMP</span>
         */}

        {/* </div> */}

        <div className={style.myRooms}>
          <span className={`material-icons ${style.fontRoom}`}>
            cast Моя комната
          </span>
          {myRoom && <div className={style.fakeRoom} key={myRoom.id}>{myRoom.title}</div> }
          <div className={style.fakeRoom}></div>
          <div className={style.fakeRoom}></div>
          <div className={style.fakeRoom}></div>
        </div>

        <div className={style.myFavorite}>
          <span className={`material-icons ${style.fontRoom}`}>
            star Избранное
          </span>
          <div className={style.fakeRoom}>1</div>
          <div className={style.fakeRoom}>2</div>
          <div className={style.fakeRoom}>3</div>
          <div className={style.fakeRoom}>4</div>
          <div className={style.fakeRoom}>5</div>
        </div>

        <div className={style.createRoom}>
          <span className={`material-icons ${style.fontRoom}`}>
            add_circle_outline Создать комнату
          </span>
        </div>

        <div>
          <div className={style.btnBlock}>
            <div className={`material-icons ${style.headset}`}>mic</div>
            <div className={`material-icons ${style.headset}`}>headphones</div>
            <div className={`material-icons ${style.headset}`}>settings</div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        {/* <Route path='/signin' element={<Signin />}/> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/room" element={<MyRoom />} />
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
          <span
            className={`modal-trigger ${style.addFriend}`}
            href="#modal1"
            onClick={modal}
          >
            <i className={`material-icons ${style.addIcon}`}>add</i>
          </span>

          <ModalWindow funcHandler={findUser} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
