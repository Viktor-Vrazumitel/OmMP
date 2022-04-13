import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createRoomAction } from '../../Redux/actions/userRoomAction';
import { upDateBaseUserRoom } from '../../Redux/thunk/userThunkServer';
import DivNewRoom from '../divNewRoom/divNewRoom'

function DivNewRoomList() {
    const usRooms = useSelector(state=> state.userRoom)
    const rooms = useSelector(state=> state.rooms)
    const user = useSelector(state=> state.user)
   const dispatch = useDispatch()
 
    

      useEffect(()=>{
          if(user){
            dispatch(upDateBaseUserRoom(user.id))    
          }

      },[rooms,dispatch,user])
    return (
        <>
        {usRooms&&usRooms.map(el=> <DivNewRoom key={el.id} title={el.title} id={el.id} />)}
        </>
    )
}

export default DivNewRoomList
