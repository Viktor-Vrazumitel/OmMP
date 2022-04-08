import style from './Signin.module.css'


function Signin() {
  return ( 
    <div className={style.main}>


      <div className={style.titleBlock}>
        <h3>Registration</h3>
      </div>
      <div className={style.inputBlock}>
          <form className={style.form}>

                <h4>Login</h4>
                <input type="text" />
                <span>Email</span>
                <input type='email' />
                <h4>Password</h4>
                <input type="password" name="" id="" />
                <hr />
                <div>

                </div>
                <button type="submit">registaration</button>
                


          </form>

      </div>

    </div>
   );
}

export default Signin;
