import '../SCSS/Nav/nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import Lady from '../Photoes/lady.png'
import Man from '../Photoes/man.png'
import HelpIcon from '@mui/icons-material/Help';
import {useDispatch} from 'react-redux'
// import {SearchAction} from '../Redux/Action/SearchAction'
import {Modal,Box ,Typography} from '@mui/material'
import { useState } from 'react';
import Home from '../Photoes/home.png'
import { useNavigate } from 'react-router-dom';
export default function LeftNav(){
        // let dispatch = useDispatch()
        const [open,setOpen] = useState(false)
        // const Local = (word) => {
        //         dispatch(SearchAction(word))
        // }
        const navigate = useNavigate()
        const style = {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width:{xs:'200px',sm:'400px',lg:'700px'},
                height:{xs:'100px',sm:'400px',lg:'500px'},
                bgcolor: 'background.paper',
                border: 'none',
                outline:'none',
                borderRadius:'2.4mm',
                boxShadow: 24,
                p: 4,
              };
    return(
        <div className="leftNav">
        <div className="menu">
<MenuIcon className='menuBtn' fontSize="large" />
        </div>
        <div className="categories">
<img src={Home} alt="home" className='imgprofileHome' onClick={()=>navigate('/')} />
<img src={Lady} alt="lady" className='imgprofile' onClick={()=>navigate('/lady')}/>
<img src={Man} alt="man" className='imgprofile' onClick={()=>navigate('/man')} />
        </div>
        <div className='help'>
<HelpIcon className='menuBtn' fontSize="large" onClick={()=>setOpen(e=>!e)}/>
<Modal
        open={open}
        onClose={()=>setOpen(e=>!e)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <center><Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            თაითლი
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            აღწერა
          </Typography>
        </Box></center>
      </Modal>
        </div>
        </div>
    )
}