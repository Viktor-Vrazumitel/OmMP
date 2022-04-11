import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../../Redux/actions/userAction';
import Footer from '../../Footer/Footer';
import MyNavbar from '../../Navbar/Navbar';
import style from './SignUp.module.css'

function SignUp() {
  const [userSignUp, setUserSignUp] = useState({
    email: '',
    password: '',
    login: '',
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUserSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignUp).filter((el) => (el[1] ? el[1].trim() : el[1]));
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signUp(payload, navigate));
    }
  };

  return (
    <div className={style.back}>
      <MyNavbar />
       <div className={style.form}>
      <form onSubmit={submitHandler} className={style.inputBox}>
        <legend className={style.title}>Регистрация</legend>
        <div className="mb-3">
          <input onChange={changeHandler} className={style.input} value={userSignUp.email} type="email" name="email" placeholder=" Почта" />
        </div>

        <div className="mb-3">
          <input onChange={changeHandler} className={style.input} value={userSignUp.login} type="text" name="login" placeholder=" Имя" />
        </div>

        <div className="mb-3">
          <input onChange={changeHandler} className={style.input} value={userSignUp.password} type="password" name="password" placeholder=" Пароль" />
        </div>

        <button type="submit" className={style.btnSubmit}>Отправить</button>
      </form>
    </div>   
    <Footer />
    </div>

  );
}

export default SignUp;
