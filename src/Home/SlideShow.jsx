import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import First from '../Photoes/testslide/1.png'
import Second from '../Photoes/testslide/2.jpg'
import Third from '../Photoes/testslide/3.webp'
import Forth from '../Photoes/testslide/4.jpg'
import { useSelector } from 'react-redux';

export default function SlideShow() {
    const data = [
        {captionGeo:"ყოველი ნივთი იქმნება პერსონალურად",
         captionEng:"Every item is made personally",
         img:First
        },
        {captionGeo:"ჩვენ ვქნით საჩუქრებს, რომლებიც რჩება დაუვიწყარ მოგონებებად",
          captionEng:"Every item is made personally",
            img:Second
        },
        {captionGeo:"საჩუქრებს",
          captionEng:"Every item is made personally",
            img:Third
        },
        {captionGeo:"რჩება",
          captionEng:"Every item is made personally",
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
                <p className='slideCaption'>{lang==='namesGeo'?res.captionGeo:res.captionEng}</p>
            </SwiperSlide>
        ))}
    </Swiper>
    </div>
  )
}
