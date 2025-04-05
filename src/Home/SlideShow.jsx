import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import First from '../Photoes/testslide/1.png'
import Second from '../Photoes/testslide/2.jpg'
import Third from '../Photoes/testslide/3.webp'
import Forth from '../Photoes/testslide/4.jpg'

export default function SlideShow() {
    const data = [
        {caption:"Caption 1",
            img:First
        },
        {caption:"Caption 2",
            img:Second
        },
        {caption:"Caption 3",
            img:Third
        },
        {caption:"Caption 4",
            img:Forth
        },
    ]
  return (
    <div className='slideshow'>
         <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay, Pagination, Navigation]}
      className='slideshow'
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
    >
        {data.map(res=>(
            <SwiperSlide className='slidePage' key={res.caption}>
                <img src={res.img} alt={res.caption} className='slideImg'/>
                <p className='slideCaption'>{res.caption}</p>
            </SwiperSlide>
        ))}
    </Swiper>
    </div>
  )
}
