import React from 'react'
import ModalTest from '../UI/ModalTest/ModalTest'
import style from './CreateRoom.module.css'
function CreateRoom({modal,createRoomHandler,userIn}) {
    return (
        <>
         <span
            className={`modal-trigger material-icons ${style.fontRoomLogo}`}
            href="#modal2"
            onClick={()=>modal('#modal2')}
          >
            add_circle_outline
          </span>
            <span className={style.fontRoom}>

             Создать комнату
            </span>

          <ModalTest funcHandler={createRoomHandler} userIn={userIn?.id} />
        </>
      
    )
}

export default CreateRoom
