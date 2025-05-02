import '../SCSS/Nav/nav.css'
import Tiktok from '../Photoes/tik.svg'
import Facebook from '../Photoes/fb.svg'
import Instagram from '../Photoes/inst.svg'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {Drawer} from '@mui/material'
import { ScreenWidthAct } from '../Redux/Action/ScreenWidthAct'
import { useDispatch, useSelector } from 'react-redux'
import Menu from '../Photoes/menu.png'
import Geo from '../Photoes/flag/geo.webp'
import Eng from '../Photoes/flag/eng.webp'
import Rus from '../Photoes/flag/rus.webp'
import {FlagAct} from '../Redux/Action/FlagAct'

import { DataGiftsAct } from '../Redux/Action/DataGiftsAct'

export default function Nav(){
    const navigate = useNavigate()
    // Mini Screens
    const [isOpen,setOpen] = useState(false)
    const [width,setWidth] = useState(window.innerWidth)
    // Redux
    const dispatch = useDispatch()
    const widthW = useSelector(res=>res.width)
    // Screen Change
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWidth(window.innerWidth)
        })
    })
    useEffect(()=>{
        dispatch(ScreenWidthAct(width))
    },[width])

// Language
const lang = useSelector(res=>res.flag)


    return(
        <div className="nav">
            <center>
            <div className="nav-box">
            {/* Title */}
            <div className='nav-title-box'>
            <p className="title" onClick={()=>navigate('/')}>Admired</p>
            </div>

            {widthW>=1200 &&
            <>
            {/* Categories */}
            <div className='nav-cat-box'>
            <p className='nav-cat' onClick={()=>navigate('/man')}>{lang==='namesGeo'?'კაცი':lang==='namesRus'?"Мужчина":'Man'}</p>
            <p className='nav-cat' onClick={()=>navigate('/lady')}>{lang==='namesGeo'?'ქალი':lang==='namesRus'?"Женщина":'Woman'}</p>
            <p className='nav-cat' onClick={()=>navigate('/gifts')}>{lang==='namesGeo'?'საჩუქარი':lang==='namesRus'?"Подарок":'Gift'}</p>
            </div>
            {/* Socials */}
            <div className='nav-soc-box'>
            <img src={Facebook} alt="admired" className="nav-soc" />
            <img src={Tiktok} alt="admired" className="nav-soc" />
            <img src={Instagram} alt="admired" className="nav-soc" />
            </div>

            <div className='nav-flag'>
                <img src={lang==='namesGeo'?Geo:lang==='namesRus'?Rus:Eng} alt='admired' className='nav-flag-current'/>
                <div className='nav-flag-menu'>
                <img src={Geo} className='nav-flag-img' alt='admired' onClick={()=>{dispatch(FlagAct('namesGeo')),localStorage.setItem('names','namesGeo')}} />
                <img src={Eng} className='nav-flag-img' alt='admired' onClick={()=>{dispatch(FlagAct('namesEn')),localStorage.setItem('names','namesEn')}} />
                <img src={Rus} className='nav-flag-img' alt='admired' onClick={()=>{dispatch(FlagAct('namesRus')),localStorage.setItem('names','namesRus')}} />
                </div>
            </div>
            </>
            }
               {widthW<1200 &&
               <>
            <img src={Menu} className='menuIcon' alt='admired' onClick={()=>setOpen(e=>!e)}/>
            </>
            }


            </div>
            </center>

            {/* Mini Screens */}
            <Drawer
              anchor="right"
              open={isOpen}
              onClose={()=>setOpen(e=>!e)}
            >
<div className='miniScrBox'>
    {/* Mini Title */}
<div className='mini-nav-title-box'>
<p className="mini-title" onClick={()=>{navigate('/'),setOpen(e=>!e)}}>Admired</p>
</div>
   {/* Mini Categories */}
<div className='mini-nav-cat-box'>
<p className='mini-nav-cat' onClick={()=>{navigate('/man'),setOpen(e=>!e)}}>{lang==='namesGeo'?'კაცი':lang==='namesRus'?"Мужчина":'Man'}</p>
<p className='mini-nav-cat' onClick={()=>{navigate('/lady'),setOpen(e=>!e)}}>{lang==='namesGeo'?'ქალი':lang==='namesRus'?"Женщина":'Woman'}</p>
<p className='mini-nav-cat' onClick={()=>{navigate('/gifts'),setOpen(e=>!e)}}>{lang==='namesGeo'?'საჩუქარი':lang==='namesRus'?"Подарок":'Gift'}</p>
</div>
<div className='mini-flags'>
<img src={Geo} className='nav-flag-img-mini' alt='admired' onClick={()=>{dispatch(FlagAct('namesGeo')),localStorage.setItem('names','namesGeo')}}/>
<img src={Eng} className='nav-flag-img-mini' alt='admired' onClick={()=>{dispatch(FlagAct('namesEn')),localStorage.setItem('names','namesEn')}}/>
<img src={Rus} className='nav-flag-img-mini' alt='admired' onClick={()=>{dispatch(FlagAct('namesRus')),localStorage.setItem('names','namesRus')}}/>
</div>
  {/* Mini Socials */}
<div className='mini-nav-soc-box'>
<img src={Facebook} alt="admired" className="mini-nav-soc" />
<img src={Tiktok} alt="admired" className="mini-nav-soc" />
<img src={Instagram} alt="admired" className="mini-nav-soc" />
</div>
</div>
            </Drawer>
        </div>
    )
}