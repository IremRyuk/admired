import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import '../SCSS/Category/category.css'
import { FormGroup,FormControlLabel,Checkbox,Switch } from '@mui/material'
import Datas from '../Res/man.json'
import { useDispatch,useSelector } from 'react-redux'
import {DataFilterAct,DataFilterRemoveAct,DataMax} from '../Redux/Action/DataFilterAct'
import Gmail from '../Photoes/gmail.webp'
import Whatsapp from '../Photoes/wts.webp'
import Remove from '../Photoes/remove.webp'


export default function Man(){
    const dispatch = useDispatch()
    // Choose Gifts
    const data = useSelector(res=>{return res.dataFilter})
    // Budget
    const maxBud = useSelector(res=>{return res.maxBud})
    // Date
    const [date, setDate] = useState(null);
    // Restoraunt
    const [rest,setRest] = useState(false)
    const [hotel,setHotel] = useState(false)
    // add / remove
    const addName = (names) => {
        if(!data.includes(names)){
            dispatch(DataFilterAct(names))
            console.log(data)
        }else{
            dispatch(DataFilterRemoveAct(names))
            console.log('gaiwminda',data)
        }
    }

    // Language
    const lang = useSelector(res=>res.flag)


    // Data
    const datas = Datas

    // Test WhatsApp Send
    const WhatsAppSend = () => {
const number = +995592007017
const datas = data
const budget = `- ${maxBud}`
const dates = `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`
const reserve = `რესტორანი - ${rest} || სასტუმრო - ${hotel}`

const wtUrl = 'https://wa.me/' + number + '?text='
+ "არჩეული - " + datas +' ; ' + "%0a"
+ "ბიუჯეტი - " + budget +' ; ' + "%0a"
+ "თარიღი - " + dates +' ; '+ "%0a"
+ "დაჯავშნა - " + reserve +' ; ' + "%0a"
        

window.open(wtUrl,'_blank').focus()

    }
    return(
        <center><div className="cat-page">
            {/* Gifts */}

            <center><div className='cat-col'>
<p className='cat-f-text'>{lang==='namesGeo'?'აირჩიეთ კაცის საჩუქრები':'Choose gifts for man'}</p>
<FormGroup sx={{
    display:'grid',
    gridTemplateColumns:{xs:'40% 40%',sm:'30% 30% 30%'},
    width:'100%',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    textAlign:'start',
    fontSize:{xs:'17px',sm:'24px'}
    }}>
    {datas.map(res=>(
        <div key={res.id}>
        <FormControlLabel sx={{paddingLeft:{xs:'20px',sm:'35px'}}} control={<Checkbox />} label={lang==='namesGeo'?res.namesGeo:res.namesEn} onChange={()=>addName(lang==='namesGeo'?res.namesGeo:res.namesEn)}/>
        </div>
    ))}
</FormGroup>
        </div></center>


           {/* Restourant */}

           <center><div className='cat-col'>
           <p className='cat-f-text'>{lang==='namesGeo'?'აირჩიეთ ქალის საჩუქრები':'If you would like to organize a hotel or restaurant, please select'}</p>
              <FormControlLabel control={<Switch onClick={()=>setRest(e=>!e)} />} label={lang==='namesGeo'?'რესტორნის ორგანიზება':'Restaurant organization'} />
                {rest == true
                ?<div className="cat-org-box">
                <p className='cat-org-text'>{lang==='namesGeo'?'ჩვენს მიერ არჩეულ რესტორანში':'At the restaurant of our choice'}</p>
                <p className='cat-org-text'>{lang==='namesGeo'?' ან თუ გსურთ რესტორნის ორგანიზება თქვენს მიერ არჩეული რესტორანში , შეავსეთ ველი':'Or if you want to organize a restaurant at a restaurant of your choice, fill in the field'}</p>
                <textarea 
                placeholder={lang==='namesGeo'?'შეავსეთ ველი ...':'Fill input ...'}
                className='cat-org-textarea'
                ></textarea>
                </div>
                :null
                }
                {/* Xazi */}
                {rest == true || hotel == true 
                ?<div className='cat-line'></div>
                :null
                }
                {/* Xazi */}
              <FormControlLabel control={<Switch onClick={()=>setHotel(e=>!e)} />} label={lang==='namesGeo'?'სასტუმროს ორგანიზება':'Hotel organization'} />
              {hotel == true
                ?<div className="cat-org-box">
                <p className='cat-org-text'>{lang==='namesGeo'?'ჩვენს მიერ არჩეულ სასტუმროში':'At the hotel we chose'}</p>
                <p className='cat-org-text'> {lang==='namesGeo'?'ჩვენს მიერ არჩეულ სასტუმროში':'Or if you want to organize a hotel stay at a hotel of your choice, fill in the field'}</p>
                <textarea 
                placeholder={lang==='namesGeo'?'შეავსეთ ველი ...':'Fill input ...'}
                className='cat-org-textarea'
                ></textarea>
                </div>
                :null
                }

           </div></center>


           {/* Date */}

<center><div className='cat-col'>
<p className='cat-f-text'>{lang==='namesGeo'?'აირჩიეთ თარიღი და ბიუჯეტი':'Choose a date and budget'}</p>
    <div className='cat-col-date date-box'>
        {/* Date */}
<div className='date-box-cur'>
<DatePicker  dateFormat="dd/MM/yyyy"  placeholderText='აირჩიეთ თარიღი' selected={date} onChange={(date) => setDate(date)} />
{date==null?<p className='cat-f-text'>****/**/**</p>:<p className='cat-f-text'>{date.getDate()} / {date.getMonth()+1} / {date.getFullYear()}</p>}
</div>
{/* Budget */}
<div className='budg-box-cur'>
<input type='number' max={9999999} placeholder='123...' className='cat-bud'onChange={(e)=>dispatch(DataMax(e.target.value))} value={maxBud} />
{maxBud==''?<p className='cat-f-text'> {lang==='namesGeo'?'ბიუჯეტი':'Budget'} </p>:<p className='cat-f-text'> {lang==='namesGeo'?'ბიუჯეტი':'Budget'} {maxBud}</p>}
</div>
</div>
</div></center>

            {/* BTN Send */}
            <center><div className='cat-col'>
            <p className='cat-f-text'>{lang==='namesGeo'?'გაგზავნა':'Send'}</p>
<div className='cat-btn-send'>
<img src={Remove} alt='remove' onClick={()=>window.location.reload()}className='sendImage remove' title='გვერდის გასუფთავება'/> |
<img src={Gmail} alt='gmail' className='sendImage gmail' title='გაგზავნა Gmail-ზე'/> |
<img src={Whatsapp} onClick={()=>WhatsAppSend()} alt='whatsapp' className='sendImage whatsapp' title='გაგზავნა WhatsApp-ზე'/>
</div>
           </div></center>
        </div></center>
    )
}