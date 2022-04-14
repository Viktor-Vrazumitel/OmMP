import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allBaseRoom } from '../../Redux/thunk/userThunkServer';
import Room from '../Room/Room';
import style from './Carousel.module.css'

export function Car() {
  const rooms = useSelector(state=> state.rooms)
    const search = useSelector(state => state.search)
    const dispatch = useDispatch()
    const [status,setStatus] = useState(false)
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
    <Splide className={style.carousel} options={ {rewind:true, clones: -1,  width:1100, height: 150,  pagination:false, perPage: 6} } aria-label="React Splide Example">

{status ? search.map(room=> <SplideSlide key={room.id}><Room  title={room.title} id={room.id}/></SplideSlide>) : rooms && rooms.map(room => <SplideSlide key={room.id}><Room key={room.id} title={room.title} id={room.id}/></SplideSlide>)}
      {/* <SplideSlide>
        <Room />
      </SplideSlide>
      <SplideSlide>
        <Room />
      </SplideSlide>
      <SplideSlide>
        <Room />
      </SplideSlide>
      <SplideSlide>
        <Room />
      </SplideSlide>
      <SplideSlide>
        <Room />
      </SplideSlide>
      <SplideSlide>
        <Room />
      </SplideSlide>
      <SplideSlide>
        <Room />
      </SplideSlide>
      <SplideSlide>
        <Room />
      </SplideSlide>
      <SplideSlide>
        <Room />
      </SplideSlide>
      <SplideSlide>
        <Room />
      </SplideSlide>
      <SplideSlide>
        <Room />
      </SplideSlide>
      <SplideSlide>
        <Room />
      </SplideSlide> */}
 

    </Splide>
    
  );
}
