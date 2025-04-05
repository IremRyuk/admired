import '../SCSS/Nav/nav.css'
import Tiktok from '../Photoes/tik.svg'
import Facebook from '../Photoes/fb.svg'
import Instagram from '../Photoes/inst.svg'
import {useNavigate} from 'react-router-dom'

export default function Nav(){
    const navigate = useNavigate()
    return(
        <div className="nav">
            <center>
            <div className="nav-box">
            {/* Title */}
            <div className='nav-title-box'>
            <p className="title" onClick={()=>navigate('/')}>Admired</p>
            </div>
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
            </div>
            </center>
        </div>
    )
}