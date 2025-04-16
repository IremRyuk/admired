import '../SCSS/Home/home.css'
import InfoIcon from '@mui/icons-material/Info';
import { IconButton,Modal } from '@mui/material';
import { useState } from 'react';

export default function Chat() {
  const [modal,setModal] = useState(false)
  return (
    <>
<div className='info'>
<IconButton onClick={()=>setModal(e=>!e)}>
  <InfoIcon sx={{color:'white',width:'60px',height:'60px'}}/>
  </IconButton>
</div>
<Modal
  open={modal}
  onClose={()=>setModal(e=>!e)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <div className='modal-box'>
    <p className='modal-title'>Admired</p>
    <p className='modal-title'>1) როგორ ხდება შეკვეთა - ლალალა </p>
    <p className='modal-title'>2) რა დრო ჭირდება - ლალალა </p>
  </div>
</Modal>
</>
  )
}
