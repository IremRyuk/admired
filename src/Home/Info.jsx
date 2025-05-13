import '../SCSS/Home/home.css'
import InfoIcon from '@mui/icons-material/Info';
import { IconButton,Modal } from '@mui/material';
import { useState } from 'react';
import Tiktok from '../Photoes/tik.svg'
import Facebook from '../Photoes/fb.svg'
import Instagram from '../Photoes/inst.svg'


export default function Info() {
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
    <p className='modal-title-main'>Admired</p>
    <p className='modal-title'>1) ავირჩიოთ კატეგორია,  თუ ვისთვის გვსურს საჩუქრის შერჩევა, მოვნიშნოთ კონკრეტული საჩუქარი ან საჩუქრები და ავირჩიოთ თარიღი, რა ვადაში გვსურს, რომ მოხდეს ამ ყველაფრის ორგანიზება. </p>
    <p className='modal-title'>2) თუ გსურთ რესტორნის ან სასტუმროს ორგანიზება, აღნიშნეთ საჭირო ველი მითითებულ კატეგორიაში, შემდეგ დააჭირეთ გაგზავნას სასურველი აპლიკაციით. </p>
    <p className='modal-title'>3) შეკვეთა შეგიძლიათ როგორც Gmail - ით,  ასევე WhatsApp  - ის საშუალებით.</p>
    <p className='modal-title'>4) შეტყობინების სახით მიიღებთ დასტურს შეკვეთის შესახებ </p>
    <p className='modal-title'></p>
    <div className='modal-soc-box'>
      <img src={Facebook} alt="admired" className="modal-soc" />
      <img src={Tiktok} alt="admired" className="modal-soc" onClick={()=>window.open("https://www.tiktok.com/@admired_official",'_blank')} />
      <img src={Instagram} alt="admired" className="modal-soc" onClick={()=>window.open("https://www.instagram.com/admired_official/",'_blank')} />
    </div>
  </div>
</Modal>
</>
  )
}
