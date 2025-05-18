import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import First from '../Photoes/pexels/1.jpg'
import Second from '../Photoes/pexels/2.jpg'
import Three from '../Photoes/pexels/3.jpg'
import FirstM from '../Photoes/pexels/1-m.jpg'
import SecondM from '../Photoes/pexels/2-m.jpg'
import ThreeM from '../Photoes/pexels/3-m.jpg'

export default function SlideShow() {
  const image = [
    {nameGeo:'გახადე ჰარმონია ხელშესახები',
     nameRus:'Сделайте гармонию ощутимой',
     nameEng:'Make harmony tangible',
     image:First,
     MiniImage:FirstM
    },
    {nameGeo:'ჩვენ საჩუქრებს ვაძლევთ იდეალურ და დახვეწილ სახეს',
      nameRus:'Придаем подаркам идеальный и изысканный вид',
      nameEng:'We give gifts an ideal and sophisticated look',
      image:Second,
      MiniImage:SecondM
     },
     {nameGeo:'ჩვენ ვქმით საჩუქრებს, რომლებიც რჩება დაუვიწყარ მოგონებებად',
      nameRus:'Мы создаем подарки, которые остаются незабываемыми воспоминаниями',
      nameEng:'We create gifts that remain unforgettable memories',
      image:Three,
      MiniImage:ThreeM
     }

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
      {image.map(res=>(
            <SwiperSlide className='slidePage' key={res.nameGeo} 
            style={{
              backgroundImage:`url(${res.MiniImage})`,
              backgroundSize:'cover',
              backgroundPosition:'center'
              }}>
                <img src={res.image} alt={res.caption} className='slideImg' loading='lazy'/>
                <p className='slideCaption'>{lang==='namesGeo'?res.nameGeo:lang==='namesRus'?res.nameRus:res.nameEng}</p>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
