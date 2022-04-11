import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createRoomAction } from '../../Redux/actions/userRoomAction';
import DivNewRoom from '../divNewRoom/divNewRoom'

function DivNewRoomList() {
    const usRooms = useSelector(state=> state.userRoom)
    const rooms = useSelector(state=> state.rooms)
    const user = useSelector(state=> state.user)
   const dispatch = useDispatch()
    const navigate = useNavigate();
    function inHomeHandler() {
        navigate("/room");
      }

      useEffect(()=>{
          if(user){
            dispatch(createRoomAction(rooms,user))    
          }

      },[rooms,dispatch])
    return (
        <>
        {usRooms&&usRooms.map(el=> <DivNewRoom key={el.id} title={el.title} onClick={inHomeHandler} />)}
        </>
    )
}

export default DivNewRoomList
