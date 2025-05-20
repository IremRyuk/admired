import React from 'react'
import { useSelector } from 'react-redux'
import '../SCSS/Home/home.css'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const lang = useSelector(res=>res.flag)
    const navigate = useNavigate()
  return (
    <div className='create' onClick={()=>navigate('/creategift')}>
        <p className='create-title'>{lang==='namesGeo'?'შექმენით ინდივიდუალური საჩუქარი':lang==='namesRus'?'Создать индивидуальный подарок':'Create custom gift'}</p>
    </div>
  )
}
