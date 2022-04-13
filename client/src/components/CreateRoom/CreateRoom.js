import React from 'react'
import ModalTest from '../UI/ModalTest/ModalTest'
import style from './CreateRoom.module.css'

function CreateRoom({modal,createRoomHandler,userIn}) {
    return (
        <><div onClick={()=>modal('#modal2')}
        href="#modal2"
        className={'modal-trigger'}>

         <span
            className={`modal-trigger material-icons ${style.fontRoomLogo}`}
            
            
            >
            add_circle_outline
          </span>
          <ModalTest funcHandler={createRoomHandler} userIn={userIn?.id} />
            <span className={style.fontRoom}>

             Создать комнату
            </span>

            </div>
        </>
      
    )
}

export default CreateRoom
