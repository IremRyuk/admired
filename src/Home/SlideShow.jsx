import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { CircularProgress, Skeleton } from '@mui/material';

export default function SlideShow() {
  const [images,setDataImages] = useState(null)
  const getImages = async () => {
    const res = await fetch("https://admiredb-dn1c.onrender.com/images/allImages")
    const json = await res.json()
    setDataImages(json)
    console.log(json)
  }
  useEffect(()=>{
getImages()
  },[])

        // Language
        const lang = useSelector(res=>res.flag)
  return (
    <div className='slideshow'>
      {images===null

      // Loader
      ?<Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination, Navigation]}
      className='slideshow'
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      <SwiperSlide className='slidePage'>
      <div className='slideshow-loading'>
      <Skeleton variant="rectangular" sx={{width:'100%',height:'100%'}}/>
      <CircularProgress className='circ' sx={{color:'white'}}/>
      </div>
      </SwiperSlide>
    </Swiper>

      //  Data Images
      :<Swiper
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
      {images.map(res=>(
            <SwiperSlide className='slidePage' key={res._id}>
                <img src={res.image} alt={res.caption} className='slideImg'/>
                <p className='slideCaption'>{lang==='namesGeo'?res.nameGeo:lang==='namesRus'?res.nameRus:res.nameEng}</p>
            </SwiperSlide>
        ))}
      </Swiper>
      }
    </div>
  )
}
