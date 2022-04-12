import React from 'react'
import style from './divNewRoom.module.css'

function DivNewRoom({title}) {
    return (
      <>
        <div className={style.divRoom}>

{title}

        </div>
        <div className={style.btn}>
          <button></button>
        </div>
      </>
    
    )
}

export default DivNewRoom
