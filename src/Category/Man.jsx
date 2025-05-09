import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import '../SCSS/Category/category.css'
import { FormGroup,FormControlLabel,Checkbox,Switch } from '@mui/material'
import Datas from '../Res/lady.json'
import { useDispatch,useSelector } from 'react-redux'
import {DataFilterAct,DataFilterRemoveAct,DataMax} from '../Redux/Action/DataFilterAct'
import Gmail from '../Photoes/gmail.webp'
import Whatsapp from '../Photoes/wts.webp'
import Remove from '../Photoes/remove.webp'


export default function Lady(){
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
<p className='cat-f-text'>{lang==='namesGeo'?'აირჩიეთ კაცის საჩუქრები':lang==='namesRus'?'Выбрать подарки для мужчин':'Choose gifts for men'}</p>
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
        <FormControlLabel sx={{paddingLeft:{xs:'20px',sm:'35px'}}} control={<Checkbox />} label={lang==='namesGeo'?res.namesGeo:lang==='namesRus'?res.namesRus:res.namesEn} onChange={()=>addName(lang==='namesGeo'?res.namesGeo:lang==='namesRus'?res.namesRus:res.namesEn)}/>
        </div>
    ))}
</FormGroup>
        </div></center>


           {/* Restourant */}

           <center><div className='cat-col'>
           <p className='cat-f-text'>{lang==='namesGeo'?'თუ გსურთ სასტუმროს ან რესტორნის ორგანიზება, გთხოვთ, აირჩიოთ':lang==='namesRus'?'Если вы хотите организовать гостиницу или ресторан, выберите':'If you would like to organize a hotel or restaurant, please select'}</p>
              <FormControlLabel control={<Switch onClick={()=>setRest(e=>!e)} />} label={lang==='namesGeo'?'რესტორნის ორგანიზება':lang==='namesRus'?'Организация ресторана':'Restaurant organization'} />
                {rest == true
                ?<div className="cat-org-box">
                <p className='cat-org-text'>{lang==='namesGeo'?'ჩვენს მიერ არჩეულ რესტორანში':lang==='namesRus'?'В ресторане по нашему выбору':'At the restaurant of our choice'}</p>
                <p className='cat-org-text'>{lang==='namesGeo'?' ან თუ გსურთ რესტორნის ორგანიზება თქვენს მიერ არჩეული რესტორანში , შეავსეთ ველი':lang==='namesRus'?'Или если вы хотите организовать ресторан в ресторане по вашему выбору, заполните поле':'Or if you want to organize a restaurant at a restaurant of your choice, fill in the field'}</p>
                <textarea 
                placeholder={lang==='namesGeo'?'შეავსეთ ველი ...':lang==='namesRus'?'Заполните поле ...':'Fill input ...'}
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
              <FormControlLabel control={<Switch onClick={()=>setHotel(e=>!e)} />} label={lang==='namesGeo'?'სასტუმროს ორგანიზება':lang==='namesRus'?'Организация гостиничного':'Hotel organization'} />
              {hotel == true
                ?<div className="cat-org-box">
                <p className='cat-org-text'>{lang==='namesGeo'?'ჩვენს მიერ არჩეულ სასტუმროში':lang==='namesRus'?'В отеле, который мы выбрали':'At the hotel we chose'}</p>
                <p className='cat-org-text'> {lang==='namesGeo'?'ან თუ გსურთ თქვენთვის სასურველ სასტუმროში სასტუმროს განთავსება, შეავსეთ ველი':lang==='namesRus'?'Или если вы хотите организовать проживание в отеле по вашему выбору, заполните поле':'Or if you want to organize a hotel stay at a hotel of your choice, fill in the field'}</p>
                <textarea 
                placeholder={lang==='namesGeo'?'შეავსეთ ველი ...':lang==='namesRus'?'Заполните поле ...':'Fill input ...'}
                className='cat-org-textarea'
                ></textarea>
                </div>
                :null
                }

           </div></center>


           {/* Date */}

<center><div className='cat-col'>
<p className='cat-f-text'>{lang==='namesGeo'?'აირჩიეთ თარიღი და ბიუჯეტი':lang==='namesRus'?'Выберите дату и бюджет':'Choose a date and budget'}</p>
    <div className='cat-col-date date-box'>
        {/* Date */}
<div className='date-box-cur'>
<DatePicker  dateFormat="dd/MM/yyyy"  placeholderText={lang==='namesGeo'?'აირჩიეთ თარიღი':lang==='namesRus'?'Выберите дату':'Select Date'} selected={date} onChange={(date) => setDate(date)} />
{date==null?<p className='cat-f-text'>**/**/****</p>:<p className='cat-f-text'>{date.getDate()} / {date.getMonth()+1} / {date.getFullYear()}</p>}
</div>
{/* Budget */}
<div className='budg-box-cur'>
<input type='number' max={9999999} placeholder='123...' className='cat-bud'onChange={(e)=>dispatch(DataMax(e.target.value))} value={maxBud} />
{maxBud==''?<p className='cat-f-text'> {lang==='namesGeo'?'ბიუჯეტი':lang==='nameRus'?'Бюджет':'Budget'} </p>:<p className='cat-f-text'> {lang==='namesGeo'?'ბიუჯეტი':lang==='nameRus'?'Бюджет':'Budget'} {maxBud}</p>}
</div>
</div>
</div></center>

            {/* BTN Send */}
            <center><div className='cat-col'>
            <p className='cat-f-text'>{lang==='namesGeo'?'გაგზავნა':lang==='namesRus'?'Отправлять':'Send'}</p>
<div className='cat-btn-send'>
<img src={Remove} alt='remove' onClick={()=>window.location.reload()}className='sendImage remove' title={lang==='namesGeo'?'გვერდის გასუფთავება':lang==='namesRus'?'Очистить страницу':'Send'} /> |
<img src={Gmail} alt='gmail' className='sendImage gmail' title={lang==='namesGeo'?'გაგზავნა Gmail-ზე':lang==='namesRus'?'Отправить на Gmail':'Send to Gmail'} /> |
<img src={Whatsapp} onClick={()=>WhatsAppSend()} alt='whatsapp' className='sendImage whatsapp' title={lang==='namesGeo'?'გაგზავნა WhatsApp-ზე':lang==='namesRus'?'Отправить по WhatsApp':'Send on WhatsApp'} />
</div>
           </div></center>
        </div></center>
    )
}