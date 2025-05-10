import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import First from '../Photoes/pexels/11.jpg'
import Second from '../Photoes/pexels/2.jpg'
import Third from '../Photoes/pexels/5.jpg'
import Forth from '../Photoes/pexels/6.jpg'
import { useSelector } from 'react-redux';

export default function SlideShow() {
    const data = [
        {captionGeo:"ყოველი ნივთი იქმნება პერსონალურად",
         captionEng:"Every item is made personally",
         captionRus:"Каждый предмет изготавливается лично",
         img:First
        },
        {captionGeo:"ჩვენ საჩუქრებს ვაძლევთ იდეალურ და დახვეწილ სახეს",
          captionEng:"We give gifts an ideal and sophisticated look",
          captionRus:"Придаем подаркам идеальный и изысканный вид",
            img:Second
        },
        {captionGeo:"საჩუქრებს",
          captionEng:"Every item is made personally",
          captionRus:"lala",
            img:Third
        },
        {captionGeo:"რჩება",
          captionEng:"Every item is made personally",
          captionRus:"lala",
            img:Forth
        },
    ]
        // Language
        const lang = useSelector(res=>res.flag)
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
                <p className='slideCaption'>{lang==='namesGeo'?res.captionGeo:lang==='namesRus'?res.captionRus:res.captionEng}</p>
            </SwiperSlide>
        ))}
    </Swiper>
    </div>
  )
}
