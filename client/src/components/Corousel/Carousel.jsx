import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Room from '../Room/Room';
import style from './Carousel.module.css'

export function Car() {
  return (
    <Splide className={style.carousel} options={ { type: 'loop',  width:950, height: 150,  pagination:false, perPage: 6} } aria-label="React Splide Example">

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
      </SplideSlide>
      <SplideSlide>
        <Room />
      </SplideSlide>
 

    </Splide>
    
  );
}
