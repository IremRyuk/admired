import React, { useEffect, useState } from 'react'
import '../SCSS/Admin/admin.css'
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import '../SCSS/Category/category.css'
import { GiftsActAdd } from '../Redux/Action/GiftsAct';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import SearchIcon from '@mui/icons-material/Search';
import { DataGiftsAct } from '../Redux/Action/DataGiftsAct';
import Badges from '../Home/Badges';

export default function Gifts() {
    // Get Language
const lang = useSelector(res=>{return  res.flag})
const dataBadge = useSelector(res=>{return  res.gifts })
const dataGifts = useSelector(res=>{return res.dataGifts})
const widthW = useSelector(res=>res.width)
// States
    const [search,setSearch] = useState('')
    const [arrowTitle,setArrowTitle] = useState(false)
    // Redux
    const dispatch = useDispatch()
    // Load Data

const [datas, setDatas] = useState(null)

const LoadData = async () => {
    const response = await fetch("https://admiredb-dn1c.onrender.com/usermenu/myjobs")
    const json = await response.json()
    dispatch(DataGiftsAct(json))
    setDatas(json)
}

useEffect(() => {
    LoadData()
}, [])
    
// Add Function 
const AddFunct = (res) => {
    if(!dataBadge.includes(res)){
        dispatch(GiftsActAdd(res))
        console.log('added',res)
    }else{
        console.log('exists',res)
    }
}
// Search Function
const SearchFunc = () => {
    if(lang==='namesGeo'){
        const newData = dataGifts.filter(res=>res.nameGeo.toLowerCase().includes(search.toLowerCase()))
        if(newData.length>0){
            setDatas(newData)    
        }else{
            setDatas('error')
        }
    }else if(lang==='namesEn'){
        const newData = dataGifts.filter(res=>res.nameEng.toLowerCase().includes(search.toLowerCase()))    
        if(newData.length>0){
            setDatas(newData)    
        }else{
            setDatas('error')
        }
    }else if(lang==='namesRus'){
        const newData = dataGifts.filter(res=>res.nameEng.toLowerCase().includes(search.toLowerCase()))    
        if(newData.length>0){
            setDatas(newData)    
        }else{
            setDatas('error')
        }
    }
}
const SearchArrows = () => {
    setArrowTitle(e=>!e)
    if(arrowTitle){
        const arrows = dataGifts.sort((a,b)=>{return parseFloat(a.price) - parseFloat(b.price)})
        setDatas([...arrows])
    }else{
        const arrows = dataGifts.sort((a,b)=>{return parseFloat(b.price) - parseFloat(a.price)})
        setDatas([...arrows])
    }   
}
const ShowAll = () => {
    if(lang==='namesGeo'){
        const newData = dataGifts.filter(res=>res)
        setDatas(newData)
        setSearch('')
    }else if(lang==='namesEn'){
        const newData = dataGifts.filter(res=>res)    
        setDatas(newData)
        setSearch('')
    }else if(lang==='namesRus'){
        const newData = dataGifts.filter(res=>res)    
        setDatas(newData)
        setSearch('')
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
        <>

                    {/* Filter */}

    <div className='gifts-filter'>
        <input 
        type='text' 
        placeholder={lang==='namesGeo'?"ძებნა...":lang==='namesRus'?"поиск...":"search..."}
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className='filter-text'
        />
        <div className='search-box' onClick={()=>SearchFunc()}>
            <SearchIcon fontSize='large'/>
        </div>
        <div className='filter-arrows' onClick={()=>SearchArrows()}>
            <ImportExportIcon fontSize='large'/>
            {widthW <= 550
            ?null
            :<>
            {!arrowTitle
            ?<>{lang==='namesGeo'?"ფასი კლებადი":lang==='namesRus'?"Цена снижается":"Price decreasing"}</>
            :<>{lang==='namesGeo'?"ფასი ზრდადი":lang==='namesRus'?"Цена растет":"Price increasing"}</>}
            </>
            }      
        </div>
    </div>
            {/* Data */}
        {datas === 'error'
        ?<div className='gift-error'>
            <p className='gift-error-text'>Nothing Found</p>
            <button className='show-all' onClick={()=>ShowAll()}>Show All</button>
        </div>
        :<>
        <div className='gifts'>
        {datas.map(res=>(
            <div className='gift-box' key={res._id}>
                <div className='gift-box-items'>
                <img src={res.image} className='gift-image' alt="admired" />
                <div className='gift-descr'>
                <p className='gift-name'>{lang==='namesGeo'?'სახელი: ':lang==='namesRus'?"Имя: ":'Name: '}{lang==='namesGeo'?res.nameGeo:lang==='namesRus'?res.nameRus:res.nameEng}</p>
                <p className='gift-name'>{lang==='namesGeo'?'აღწერა: ':lang==='namesRus'?"Описание: ":'Description: '}{lang==='namesGeo'?res.titleGeo:lang==='namesRus'?res.nameRus:res.titleEng}</p>
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
        </>}
    </>
        }
    <Badges />
    </center>
  )
}
