import { Modal } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import {ModalAct} from '../Redux/Action/ModalAct'
import Gmail from '../Photoes/gmail.webp'
import Whatsapp from '../Photoes/wts.webp'

export default function ModalSend() {
    const modal = useSelector(res=>res.modal)
    const lang = useSelector(res=>res.flag)
    // Fucntions
    const WhatsAppSend = () => {
        // const number = +995592007017
        // const datas = data
        // const budget = `- ${maxBud}`
        // const dates = `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`
        // const reserve = `რესტორანი - ${rest} || სასტუმრო - ${hotel}`
        
        // const wtUrl = 'https://wa.me/' + number + '?text='
        // + "არჩეული - " + datas +' ; ' + "%0a"
        // + "ბიუჯეტი - " + budget +' ; ' + "%0a"
        // + "თარიღი - " + dates +' ; '+ "%0a"
        // + "დაჯავშნა - " + reserve +' ; ' + "%0a"
                
        
        // window.open(wtUrl,'_blank').focus()
        
            }
    // Comment
    console.log(modal)
  return (
    <Modal
    open={modal}
    onClose={(e)=>ModalAct(e=>!e)}
    >
    <div className='btn-submit'>
    <img src={Gmail} alt='gmail' className='sendImage gmail' title={lang==='namesGeo'?'გაგზავნა Gmail-ზე':lang==='namesRus'?'Отправить на Gmail':'Send to Gmail'} /> |
    <img src={Whatsapp} onClick={()=>WhatsAppSend()} alt='whatsapp' className='sendImage whatsapp' title={lang==='namesGeo'?'გაგზავნა WhatsApp-ზე':lang==='namesRus'?'Отправить по WhatsApp':'Send on WhatsApp'} />
    </div>
    </Modal>
  )
}
