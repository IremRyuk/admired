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
            <p className='nav-cat' onClick={()=>navigate('/man')}>Man</p>
            <p className='nav-cat' onClick={()=>navigate('/lady')}>Woman</p>
            </div>
            {/* Socials */}
            <div className='nav-soc-box'>
            <img src={Facebook} alt="admired" className="nav-soc" />
            <img src={Tiktok} alt="admired" className="nav-soc" />
            <img src={Instagram} alt="admired" className="nav-soc" />
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
<p className='mini-nav-cat' onClick={()=>{navigate('/man'),setOpen(e=>!e)}}>Man</p>
<p className='mini-nav-cat' onClick={()=>{navigate('/lady'),setOpen(e=>!e)}}>Woman</p>
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