import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allBaseRoom } from '../../Redux/thunk/userThunkServer'
import Room from '../Room/Room'

function RoomList() {
    const rooms = useSelector(state=> state.rooms)
    const dispatch = useDispatch()

useEffect(()=>{
    dispatch(allBaseRoom())
},[dispatch])
    return (
        <>
        {rooms.map(room => <Room key={room.id} title={room.title} id={room.id}/>)}
        </>
    )
}

export default RoomList
