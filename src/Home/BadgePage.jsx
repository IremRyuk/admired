import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../SCSS/Home/home.css'
import { GiftsActRemove } from '../Redux/Action/GiftsAct';
import { useNavigate } from 'react-router-dom';

export default function BadgePage() {
  const navigate = useNavigate()
    const datas = useSelector(res=>res.gifts)
    const dispatch = useDispatch()
    // Language
    const lang = useSelector(res=>res.flag)
    console.log(datas)
  return (
    <center>
      {datas.length == 0
      ?<div className='badge-empty'>
        <p className='empty-text'>{lang==='namesGeo'?'გთხოვთ, აირჩიოთ საჩუქრები':lang==='namesRus'?"Пожалуйста, выберите подарки":'Please, Select Gifts'}</p>
        <p className='empty-link' onClick={()=>{navigate('/gifts')}}>{lang==='namesGeo'?'საჩუქრები':lang==='namesRus'?"Подарки":'Gifts'}</p>
        </div>
      :<div className='badge-page'>
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
      }
    </center>
  )
}

// 