import React from 'react'
import '../SCSS/Home/home.css'
import { useSelector } from 'react-redux'

export default function Error() {
  const lang = useSelector(res=>res.flag)
  return (
    <div className='errorPage'>
    <p>
      {lang==='namesGeo'
      ?'შეცდომა, დაბრუნდით მთავარ გვერდზე'
      :lang==='namesRus'?"Ошибка, вернуться на главную страницу"
      :'Error wrong page'
      }
    </p>
    <button className='mainPage' onClick={()=>window.location.href = 'http://localhost:5173'}>
    {lang==='namesGeo'
      ?'მთავარი გვერდი'
      :lang==='namesRus'?"Домашняя страница"
      :'Main Page'
      }
    </button>
      </div>
  )
}
