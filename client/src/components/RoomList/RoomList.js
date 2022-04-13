import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allBaseRoom } from '../../Redux/thunk/userThunkServer'
import Room from '../Room/Room'

function RoomList() {
    const rooms = useSelector(state=> state.rooms)
    const search = useSelector(state => state.search)
    const dispatch = useDispatch()
    const [status,setStatus] = useState(false)
console.log(status);
useEffect(()=>{
    dispatch(allBaseRoom())
},[dispatch])

useEffect(()=>{
if(search.length){
    setStatus(true)
}else{

    setStatus(false)
}
},[search])
    return (
        <>
        {status ? search.map(room=> <Room key={room.id} title={room.title} id={room.id}/>) : rooms && rooms.map(room => <Room key={room.id} title={room.title} id={room.id}/>)}
        </>
    )
}

export default RoomList
