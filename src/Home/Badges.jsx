import React from 'react'
import { useSelector } from 'react-redux'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import '../SCSS/Home/home.css'
import { useNavigate } from 'react-router-dom';

export default function Badges() {
const navigate = useNavigate()
    const data = useSelector(res=>res.gifts)
  return (
<>
    {data.length === 0
        ?
        <></>
        :
        <center>
        <div className='badge'>
        <Badge badgeContent={data.length} color="primary" onClick={()=>navigate('/chosen')}>
          <MailIcon fontSize='large' sx={{color:'#C74F80'}} />
        </Badge>
        </div>
        </center>
    }
</>
  )
}
