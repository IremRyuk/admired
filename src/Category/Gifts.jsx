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
const lang = useSelector(res=>{return  res.flag})
const dataBadge = useSelector(res=>{return  res.gifts })
// Add Function 
const AddFunct = (res) => {
    if(!dataBadge.includes(res)){
        dispatch(GiftsActAdd(res))
        console.log('daemata',res)
    }else{
        console.log('aris ukve',res)
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
            <div className='gift-box' key={res._id}>
                <div className='gift-box-items'>
                <img src={res.image} className='gift-image' alt="admired" />
                <div className='gift-descr'>
                <p className='gift-name'>{lang==='namesGeo'?'სახელი: ':lang==='namesRus'?"Имя: ":'Name: '}{lang==='namesGeo'?res.nameGeo:res.nameEng}</p>
                <p className='gift-name'>{lang==='namesGeo'?'აღწერა: ':lang==='namesRus'?"Описание: ":'Description: '}{lang==='namesGeo'?res.titleGeo:res.titleEng}</p>
                {
                    parseInt(res.sale) === 0
                    ?
                    <p className='gift-name'>{lang==='namesGeo'?'ფასი: ':lang==='namesRus'?"Цена: ":'Price: '}{res.price}</p>
                    :
                    <div className='gift-sale'>{lang==='namesGeo'?'ფასი: ':lang==='namesRus'?"Цена: ":'Price: '}
                    &nbsp;
                    <p style={{color:'red',textDecorationLine:'line-through'}}>{res.price}</p>
                    <p> &nbsp;{res.sale}</p>
                    </div>
                }
                </div>
                <div className="add" onClick={()=>AddFunct(res)}>
                {lang==='namesGeo'?"დამატება":lang==='namesRus'?"Добавлять ":"Add"}
                </div>
                </div>
            </div>
        ))}
        </div>
        }
    </center>
  )
}
