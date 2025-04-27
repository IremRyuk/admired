import React, { useEffect, useState } from 'react'
import '../SCSS/Admin/admin.css'
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import '../SCSS/Category/category.css'
import { GiftsActAdd } from '../Redux/Action/GiftsAct';

export default function Gifts() {
    // Redux
    const dispatch = useDispatch()
    // Load Data

const [datas, setDatas] = useState(null)

const LoadData = async () => {
    const response = await fetch("https://admiredb-dn1c.onrender.com/usermenu/myjobs")
    const json = await response.json()
    setDatas(json)
}

useEffect(() => {
    LoadData()
}, [])
    
// Get Language
const lang = useSelector(res=>res.flag)
const dataBadge = useSelector(res=>res.gifts)
// Add Function 
const AddFunct = (res) => {
    if(dataBadge.includes(res)){
        console.log('aris ukve',res)
        
    }else{
        dispatch(GiftsActAdd(res))
        console.log(res)
    }
}
  return (
    <center>
        {datas==null
        ?
        <div className='circleProgress'>
        <CircularProgress sx={{color:'white'}}/>
       </div>
        :
        <div className='gifts'>
        {datas.map(res=>(
            <div className='gift-box' key={res._id} onClick={()=>AddFunct(res)}>
                <img src={res.image} className='gift-image' alt="admired" />
                <p className='gift-name'>{lang==='namesGeo'?res.nameGeo:res.nameEng}</p>
            </div>
        ))}
        </div>
        }
    </center>
  )
}
