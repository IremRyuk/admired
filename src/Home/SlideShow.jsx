import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import First from '../Photoes/pexels/1.jpg'
import Second from '../Photoes/pexels/2.jpg'
import Three from '../Photoes/pexels/3.jpg'
import Four from '../Photoes/pexels/3.jpg'

export default function SlideShow() {
  const image = [
    {nameGeo:'გახადე ჰარმონია ხელშესახები',
     nameRus:'Сделайте гармонию ощутимой',
     nameEng:'Make harmony tangible',
     image:First
    },
    {nameGeo:'ჩვენ საჩუქრებს ვაძლევთ იდეალურ და დახვეწილ სახეს',
      nameRus:'Придаем подаркам идеальный и изысканный вид',
      nameEng:'We give gifts an ideal and sophisticated look',
      image:Second
     },
     {nameGeo:'1',
      nameRus:'1',
      nameEng:'1',
      image:Three
     },
     {nameGeo:'2',
      nameRus:'2',
      nameEng:'2',
      image:Four
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
      {image.map(res=>(
            <SwiperSlide className='slidePage' key={res.nameGeo}>
                <img src={res.image} alt={res.caption} className='slideImg'/>
                <p className='slideCaption'>{lang==='namesGeo'?res.nameGeo:lang==='namesRus'?res.nameRus:res.nameEng}</p>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
