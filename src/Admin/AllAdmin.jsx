import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
    <>
        {datas === null
        ?
        <p>araferi</p>
        :
        <div className='items'>
        {datas.map(res=>(
            <div className='item-box' key={res._id} onClick={()=>{navigate(`/change/${res._id}`)}} style={{border:'2px solid black'}}>
                <img src={res.image} />
                <p>{lang==='namesGeo'?res.nameGeo:res.nameEng}</p>
            </div>
        ))}
        </div>}
    </>
  )
}
