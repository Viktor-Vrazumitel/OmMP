
import style from './Input.module.css'


function MyInput({input,setInput}) {

const valueHandler=(e)=>{
  setInput(e.target.value)
  
}


  return (  
    <div className={style.input}>

      <div className={style.search}>
        <span className={`material-icons ${style.searchIcon}`}>search</span>
      </div>

      <input 
        id='searchRoom'
        className={style.inputText}
        onChange={valueHandler}
        type="text"
        placeholder='Найти комнату' 
        value={input} />
    </div>
  );
}

export default MyInput;
