import style from './Input.module.css'


function MyInput() {
  return (  
    <div className={style.input}>
      
      <input type="text" placeholder='poisk'  />
    </div>
  );
}

export default MyInput;
