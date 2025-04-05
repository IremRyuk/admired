import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SlideShow() {
    const data = [
        {caption:"Caption 1",
            img:"https://www.tvinsider.com/wp-content/uploads/2020/09/the-boys-season-2-homelander-antony-starr-1014x570.jpg"
        },
        {caption:"Caption 2",
            img:"https://images.foxtv.com/static.fox35orlando.com/www.fox35orlando.com/content/uploads/2023/04/1280/720/Image-from-iOS-14.jpg?ve=1&tl=1"
        },
        {caption:"Caption 3",
            img:"https://images.bauerhosting.com/empire/2019/07/vader-best-villains.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
        },
        {caption:"Caption 4",
            img:"https://news.utexas.edu/wp-content/uploads/2019/11/Joker-600x400-c-default.jpg"
        },
        {caption:"Caption 5",
            img:"https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/05/x-men-the-last-stand-magneto-ian-mckellen.jpeg"
        },
    ]
  return (
    <div className='slideshow'>
         <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay, Pagination, Navigation]}
      className='slideshow'
      autoplay={{
        delay: 3000,
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
