import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import '../SCSS/Home/home.css'
import { Drawer } from '@mui/material';
import { GiftsActRemove } from '../Redux/Action/GiftsAct';

export default function Badges() {
    const datas = useSelector(res=>res.gifts)
    const dispatch = useDispatch()
    const [modal,setModal] = useState(false)
        // Language
        const lang = useSelector(res=>res.flag)
        useEffect(()=>{
if(datas.length <= 0){
  setModal(e=>e === false)
}
        },[datas])
  return (
<>
    {datas.length === 0
        ?
        <></>
        :
        <center>
        <div className='badge'>
        <Badge badgeContent={datas.length} color="primary" onClick={()=>setModal(e=>!e)}>
          <MailIcon fontSize='large' sx={{color:'#C74F80'}} />
        </Badge>
        </div>
        </center>
    }

    {/* Drawer */}
    {!modal
        ?
        <></>
        :
    <Drawer
              anchor="right"
              open={modal}
              onClose={()=>setModal(e=>!e)}
            >
<div className='badge-page'>
      {datas.map(res=>(
          <div key={res._id} className='badge-box'>
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
</div>
<div className="add" onClick={()=>dispatch(GiftsActRemove(res._id))}>
                {lang==='namesGeo'?"ამოშლა":lang==='namesRus'?"Добавлять ":"Remove"}
                </div>

          </div>
      ))}
  </div>
            </Drawer>
}
</>
  )
}
