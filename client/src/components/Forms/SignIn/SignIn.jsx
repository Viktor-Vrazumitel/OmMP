import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../../Redux/actions/userAction';
import Footer from '../../Footer/Footer';
import MyNavbar from '../../Navbar/Navbar';
import style from './SignIn.module.css'

function SignIn() {
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const from = { pathname: '/' };

  const changeHandler = (e) => {
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignIn).filter((el) => (el[1] ? el[1].trim() : el[1]));
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signIn(payload, navigate, from));
    }
  };

  return (
  <div className={style.back}>
    <MyNavbar />
    <div className={style.form}>
      <form
        onSubmit={submitHandler}
        className={style.inputBox}
      >
        <legend className={style.title}>Вход</legend>
        <div >
          <input
            className={style.input}
            onChange={changeHandler}
            value={userSignIn.email}

            type="email"
            name="email"
            placeholder=" Почта"
          />
        </div>

        <div >
          <input
            className={style.input}
            onChange={changeHandler}
            value={userSignIn.password}
            
            type="password"
            name="password"
            placeholder=" Пароль"
          />
        </div>

        <button type="submit" className={style.btnSubmit}>
          Войти
        </button>
      </form>
    </div>
    <Footer />
  </div>

  );
}

export default SignIn;
