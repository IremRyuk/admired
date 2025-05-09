import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Skeleton} from '@mui/material'

export default function Latest() {
    const [limitedData,setLimitedData] = useState(null)
    const GetLimitedData = async () => {
        const response = await fetch("https://admiredb-dn1c.onrender.com/usermenu/limitedData")
        const json = await response.json()
        setLimitedData(json)
    }
    useEffect(()=>{
        GetLimitedData()
    },[])
    const navigate = useNavigate()
    // Language
    const lang = useSelector(res=>res.flag)
  return (
    <div className='latest-box-main'>
    <p className="latestText">{lang==='namesGeo'?'ახალი დამატებულები':lang==='namesRus'?"Недавно загружено":'Resently Uploaded'}</p>
    <div className='limitedBox'>
        {limitedData === null
        ?
        <>
        <Skeleton variant="rectangular" sx={{width:{xs:'60vw',sm:'30vw',md:'25vw'},height:{xs:'300px',sm:'200px',md:'250px'}}}/>
        <Skeleton variant="rectangular" sx={{width:{xs:'60vw',sm:'30vw',md:'25vw'},height:{xs:'300px',sm:'200px',md:'250px'}}}/>
        <Skeleton variant="rectangular" sx={{width:{xs:'60vw',sm:'30vw',md:'25vw'},height:{xs:'300px',sm:'200px',md:'250px'}}}/>
        </>
        :
        limitedData.map(res=>(
            <div className='latest' key={res._id} onClick={()=>navigate('/gifts')}>
            <img src={res.image} className='limitedImage' alt="admired" />
            </div>
        ))}
    </div>
    </div>
  )
}
