import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import '../SCSS/Category/category.css'
import { FormGroup,FormControlLabel,Checkbox,Switch, CircularProgress,  FormControl, Radio, RadioGroup } from '@mui/material'
import Datas from '../Res/lady.json'
import { useDispatch,useSelector } from 'react-redux'
import {DataFilterAct,DataFilterRemoveAct,DataMax} from '../Redux/Action/DataFilterAct'
import '../SCSS/Modal/modal.css'


export default function Lady(){
    const [err,setErr] = useState('')
    const [loading,setLoading] = useState(false)
    const [resp,setResp] = useState('')
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
    const [active,setActive] = useState(false)
    const [mail,setGmail] = useState('')
    const [phone,setPhone] = useState('')
    const [contact,setContacts] = useState('')
    // add / remove
    const addName = (names) => {
        if(!data.includes(names)){
            dispatch(DataFilterAct(names))
        }else{
            dispatch(DataFilterRemoveAct(names))
            console.log('gaiwminda',data)
        }
    }

    // Language
    const lang = useSelector(res=>res.flag)


    // Data
    const datas = Datas

const SendGmail = async (contact) => {
    setModal(false)
    setLoading(true)
    const gmail = `საჩუქრები - ${data}; სასტუმრო - ${hotel}; რესტორანი - ${rest}; აქტივობა - ${active}; თარიღი-${date}; ბიუჯეტი - ${maxBud} || დაუკავშირდი - ${contact}; ტელეფონი - ${phone}; მაილი - ${mail}`
    try {
        const response = await fetch('https://admiredb-dn1c.onrender.com/users/gmail',{
            method:'POST',
            body:JSON.stringify({gmail}),
            headers:{
              'Content-Type':'application/json',
            }
          })
          const json = await response.json()    
          setResp(lang==='namesGeo'?'წარმატებით გაიგზავნა':lang==='namesRus'?'Успешно отправлено':'Successfully Sent')
          setTimeout(()=>{
            setLoading(false)
          },[1000])      
    } catch (error) {
        setResp(lang==='namesGeo'?'პრობლემაა, გთხოვთ, სცადოთ მოგვიანებით':lang==='namesRus'?'Проблема. Пожалуйста, попробуйте еще раз позже':'Problem , Please try again later')
        setTimeout(()=>{
            setLoading(false)
          },[1000])         
    } 
}

const SendFunc = (contact) => {
    if(data.length == 0  && rest == false && hotel == false && active == false){
        setErr(lang==='namesGeo'?'მონიშნეთ საჩუქრები და შეიყვანეთ თქვენი მონაცემები':lang==='namesRus'?'Выберите подарки и введите свои данные':'Select gifts and enter your details')
    }else if(date == null || maxBud == ''){
        setErr(lang==='namesGeo'?'აირჩიეთ თარიღი და შეიყვანეთ მაქსიმალური ბიუჯეტი':lang==='namesRus'?'Выберите дату и введите максимальный бюджет':'Select a date and enter a maximum budget.')
    }else if(mail==''||phone==''){
        setErr(lang==='namesGeo'?'შეიყვანეთ საკონტაქტო ინფორმაცია':lang==='namesRus'?'Выберите дату и введите максимальный бюджет':'Select a date and enter a maximum budget.')
    }else if(contact === ''){
        setErr(lang==='namesGeo'?'აირჩიეთ სად გნებავთ რომ დაგიკავშირდეთ':lang==='namesRus'?'Выберите, где с вами связаться.':'Choose where you would like to be contacted.')
    }
    else{
        setErr('')
        SendGmail(contact)
    }    
}

    return(
        <>
        <center><div className="cat-page">
            {/* Gifts */}

            <center><div className='cat-col'>
<p className='cat-f-text'>{lang==='namesGeo'?'აირჩიეთ ქალის საჩუქრები':lang==='namesRus'?'Выбрать подарки для женщин':'Choose gifts for women'}</p>
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
              <FormControlLabel sx={{width:'100%',paddingLeft:'40%'}} control={<Switch onClick={()=>setRest(e=>!e)} />} label={lang==='namesGeo'?'რესტორნის ორგანიზება':lang==='namesRus'?'Организация ресторана':'Restaurant organization'} />
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
              <FormControlLabel sx={{width:'100%',paddingLeft:'40%'}} control={<Switch onClick={()=>setHotel(e=>!e)} />} label={lang==='namesGeo'?'სასტუმროს ორგანიზება':lang==='namesRus'?'Организация гостиничного':'Hotel organization'} />
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
                {/* Xazi */}
                {hotel == true || active == true 
                ?<div className='cat-line'></div>
                :null
                }
                <FormControlLabel sx={{width:'100%',paddingLeft:'40%'}} control={<Switch onClick={()=>setActive(e=>!e)} />} label={lang==='namesGeo'?'აქტივობების ორგანიზება':lang==='namesRus'?'Деятельность организовать':'Organizing an activity'} />
              {active == true
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

{/* BTN Contact */}
    <center><div className='cat-col'>
    <p className='cat-f-text'>{lang==='namesGeo'?'საკონტაქტო ინფორმაცია':lang==='namesRus'?'Контактная информация':'Contact information'}</p>
    <div className='contact'>
        <p className='contact-text'>{lang==='namesGeo'?'თქვენი Gmail':lang==='namesRus'?'Ваш Gmail':'Your Gmail'}</p>
        <input value={mail} onChange={(e)=>setGmail(e.target.value)} type='text' className='gmail-contact' placeholder='Gmail' />
        <p className='contact-text'>{lang==='namesGeo'?'თქვენი საკონტაქტო ტელეფონი':lang==='namesRus'?'Ваш контактный номер телефона':'Your contact phone number'}</p>
        <input value={phone} onChange={(e)=>setPhone(e.target.value)} type='number' className='gmail-contact' placeholder={lang==='namesGeo'?'ტელეფონი':lang==='namesRus'?'Телефон':'Phone'} />
    </div>
   </div></center>


   {/* BTN Send */}
   <center><div className='cat-col'>
    <div className='contact'>
    <FormControl 
    sx={{display:'flex',justifyContent:'space-around',alignItems:'center',gap:'20px'}}
    onChange={(e)=>{setContacts(e.target.value)}}
    >
  <p className='cat-f-text'>{lang==='namesGeo'?'აირჩიეთ სად გნებავთ რომ დაგიკავშირდეთ':lang==='namesRus'?'Выберите, где с вами связаться.':'Choose where you would like to be contacted'}</p>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="Phone" control={<Radio />} label={lang==='namesGeo'?'ტელეფონი':lang==='namesRus'?'Телефон':'Phone'} />
    <FormControlLabel value="Gmail" control={<Radio />} label="Gmail" />
    <FormControlLabel value="WhatsApp" control={<Radio />} label="WhatsApp" />
  </RadioGroup>
</FormControl>
    </div>
    {err==''?<></>:<p className='error'>{err}</p>}
    <button onClick={()=>SendFunc(contact)} className='btn-send-main'>
        {lang==='namesGeo'?'გაგზავნა მონაცემების':lang==='namesRus'?'Отправлять':'Send Information'}
    </button>
   </div></center>

</div></center>
    {loading===false
    ?<></>
    :<div className='loading-send'>
        <CircularProgress sx={{color:'#ed889a'}}/>
       <p className='loading-text'>{resp}</p>
    </div>}
        </>
    )
}