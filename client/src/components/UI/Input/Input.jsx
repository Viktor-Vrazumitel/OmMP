
import style from './Input.module.css'


function MyInput({input,setInput}) {

const valueHandler=(e)=>{
  setInput(e.target.value)
  
}


  return (  
    <div className={style.input}>
      
      <input 
      onChange={valueHandler}
      type="text"
       placeholder='poisk' 
      value={input} />
    </div>
  );
}

export default MyInput;
