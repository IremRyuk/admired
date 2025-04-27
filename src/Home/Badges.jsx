import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Modal, Box } from '@mui/material';
import '../SCSS/Home/home.css'
import { GiftsActRemove } from '../Redux/Action/GiftsAct';

export default function Badges() {
    const [modal,modalOpen] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector(res=>res.gifts)
    // Language
    const lang = useSelector(res=>res.flag)
    // Styles
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
  return (
<>
    {data.length === 0
        ?
        <></>
        :
        <div className='badge'>
        <Badge badgeContent={data.length} color="primary" onClick={()=>modalOpen(true)}>
          <MailIcon fontSize='large' sx={{color:'#C74F80'}} />
        </Badge>
        </div>
    }
    {modal === false
    ?
    <></>
    :
    <Modal
    open={modal}
    onClose={()=>modalOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
{data.map(res=>(
  <div key={res._id}>
    <p style={{padding:'10px'}} onClick={()=>dispatch(GiftsActRemove(res._id))}>{lang==='namesGeo'?res.nameGeo:res.nameEng}</p>
  </div>
))}
</Box>
  </Modal>
  }
  
</>
  )
}
