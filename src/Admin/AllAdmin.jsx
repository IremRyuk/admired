import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom'
import '../SCSS/Admin/admin.css'

export default function AllAdmin() {
    const [datas,setDatas] = useState(null)
    const play = async ()=>{
        const response = await fetch("https://admiredb-dn1c.onrender.com/usermenu/myjobs")
        const json = await response.json()
        setDatas(json)
    }
useEffect(()=>{
    play()
},[])
console.log(datas)
// Language
const lang = useSelector(res=>res.flag)
// Navigate
const navigate = useNavigate()
  return (
    <center>
        {datas === null
        ?
        <div className='circleProgress'>
         <CircularProgress sx={{color:'white'}}/>
        </div>
        :
        <div className='items'>
        {datas.map(res=>(
            <div className='item-box' key={res._id} onClick={()=>{navigate(`/change/${res._id}`)}}>
                <img src={res.image} className='item-box-img'/>
                <p>{lang==='namesGeo'?res.nameGeo:res.nameEng}</p>
            </div>
        ))}
        </div>}
    </center>
  )
}
