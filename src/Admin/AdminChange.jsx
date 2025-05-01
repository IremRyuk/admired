import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import axios from 'axios'
import {Button} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useParams } from 'react-router-dom';
import '../SCSS/Admin/admin.css'
import CircularProgress from '@mui/material/CircularProgress';
import CheckIcon from '@mui/icons-material/Check';

export default function AdminChange() {
  // States
  const [imagebase64,setImage] = useState(null)
  const [showimage,setShowImage] = useState(null)
  const [nameGeo,setNamesGeo] = useState('')
  const [nameEng,setNamesEng] = useState('')
  const [nameRus,setNamesRus] = useState('')
  const [titleGeo,setTitleGeo] = useState('')
  const [titleEng,setTitleEng] = useState('')
  const [titleRus,setTitleRus] = useState('')
  const [price,setPrice] = useState('')
  const [sale,setSale] = useState('')
  // Loading
  const [loading,setLoading] = useState(false)

// Data Current
const [datas,setData] = useState(null)
// Get Data Single
const {id} = useParams()
const SingleData = async () => {
  const response = await fetch("https://admiredb-dn1c.onrender.com/usermenu/"+id)
  const json = await response.json()
  setData(json)
}
useEffect(()=>{
  SingleData()
},[])




  // Styles
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

// Submits
const SaveNameGeo = async (nameGeo) => {
  setLoading(e=>!e)
  if(nameGeo.length <= 0){
    alert('problem')
  }
  else{
      const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/usermenu/${id}`,{nameGeo},{
        headers:{
          'Content-Type':'application/json'
        }
      }) 
      alert('Success')
      window.location.reload()
  }
  setLoading(e=>!e)
}
const SaveNameEng = async (nameEng) => {
  setLoading(e=>!e)
  if(nameEng.length <= 0){
    alert('problem')
  }
  else{
    const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/usermenu/${id}`,{nameEng},{
      headers:{
        'Content-Type':'application/json'
      }
    }) 
    alert('Success')
    window.location.reload()
  }
  setLoading(e=>!e)
}
const SaveNameRus = async (nameRus) => {
  setLoading(e=>!e)
  if(nameRus.length <= 0){
    alert('problem')
  }
  else{
    const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/usermenu/${id}`,{nameRus},{
      headers:{
        'Content-Type':'application/json'
      }
    }) 
    alert('Success')
    window.location.reload()
  }
  setLoading(e=>!e)
}
const SaveTitleGeo = async (titleGeo) => {
  setLoading(e=>!e)
  if(titleGeo.length <= 0){
    alert('problem')
  }
  else{
    const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/usermenu/${id}`,{titleGeo},{
      headers:{
        'Content-Type':'application/json'
      }
    }) 
    alert('Success')
    window.location.reload()
  }
  setLoading(e=>!e)
}
const SaveTitleEng = async (titleEng) => {
  setLoading(e=>!e)
  if(titleEng.length <= 0){
    alert('problem')
  }
  else{
    const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/usermenu/${id}`,{titleEng},{
      headers:{
        'Content-Type':'application/json'
      }
    }) 
    alert('Success')
    window.location.reload()
  }
  setLoading(e=>!e)
}
const SaveTitleRus = async (titleRus) => {
  setLoading(e=>!e)
  if(titleRus.length <= 0){
    alert('problem')
  }
  else{
    const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/usermenu/${id}`,{titleRus},{
      headers:{
        'Content-Type':'application/json'
      }
    }) 
    alert('Success')
    window.location.reload()
  }
  setLoading(e=>!e)
}
const SavePrice = async (price) => {
  setLoading(e=>!e)
  if(price.length <= 0){
    alert('problem')
  }
  else{
    const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/usermenu/${id}`,{price},{
      headers:{
        'Content-Type':'application/json'
      }
    }) 
    alert('Success')
    window.location.reload()
  }
  setLoading(e=>!e)
}
const SaveSale = async (sale) => {
  setLoading(e=>!e)
  if(sale.length <= 0){
    alert('problem')
  }
  else{
    const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/usermenu/${id}`,{sale},{
      headers:{
        'Content-Type':'application/json'
      }
    }) 
    alert('Success')
    window.location.reload()
  }
  setLoading(e=>!e)
}
  // Image
  const setImages = async (e)=> {
    setImage(e.target.files[0])
    setShowImage(URL.createObjectURL(e.target.files[0]))
  }

const SaveImage = async () => {
  try {
    setLoading(e=>!e)
    const base64 = await convertToBase64(imagebase64)
    const image = base64
    const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/usermenu/${id}`,{image},{
      headers:{
        'Content-Type':'application/json'
      }
    }) 
    setLoading(e=>!e)
  } catch (error) {
    console.log(error)
  }
}




// Delete Item
const Remove = async () => {
  setLoading(e=>!e)
  const responce = await fetch('https://admiredb-dn1c.onrender.com/usermenu/'+id,{
    method:'DELETE'
})
if(responce.ok){
  alert('Deleted')
  window.location.replace(
    "http://localhost:5173/alladmin"
  );
}else{
  alert('Problem')
}
setLoading(e=>!e)
}


  return (
    <div className='changeMain'>
      {loading===true
      ?
      <div className='circleProgress-main'>
      <CircularProgress sx={{color:'white'}}/>
     </div>
     :<></>}
      {datas === null
      ?
      <div className='circleProgress'>
      <CircularProgress sx={{color:'white'}}/>
     </div>
      :
      <center>
      <div className='change-box'>
        <div className='change-texts'>
        <p className='change-p'>სახელი</p>
        <input type='text' className='additem-text' defaultValue={datas.nameGeo} placeholder={datas.nameGeo} />
        <div className="submit-changes">
        <input type='text' className='additem-text-change' value={nameGeo} placeholder='type...' onChange={(e)=>{setNamesGeo(e.target.value)}} />
          <button className='change-submit' onClick={()=>SaveNameGeo(nameGeo)}><CheckIcon fontSize='medium'/></button>
        </div>
        </div>
        <div className='change-texts'>
        <p className='change-p'>Name</p>
        <input type='text' className='additem-text' defaultValue={datas.nameEng} placeholder={datas.nameEng} />
        <div className="submit-changes">
        <input type='text' className='additem-text-change' value={nameEng} placeholder='type...' onChange={(e)=>{setNamesEng(e.target.value)}} />
          <button className='change-submit' onClick={()=>SaveNameEng(nameEng)}><CheckIcon fontSize='medium'/></button>
        </div>
        </div>
        <div className='change-texts'>
        <p className='change-p'>Имя</p>
        <input type='text' className='additem-text' defaultValue={datas.nameRus} placeholder={datas.nameRus} />
        <div className="submit-changes">
        <input type='text' className='additem-text-change' value={nameRus} placeholder='type...' onChange={(e)=>{setNamesRus(e.target.value)}} />
          <button className='change-submit' onClick={()=>SaveNameRus(nameRus)}><CheckIcon fontSize='medium'/></button>
        </div>
        </div>
        <div className='change-texts'>
        <p className='change-p'>აღწერა</p>
        <input type='text' className='additem-text' defaultValue={datas.titleGeo} placeholder={datas.titleGeo} />
        <div className="submit-changes">
        <input type='text' className='additem-text-change' value={titleGeo} placeholder='type...' onChange={(e)=>{setTitleGeo(e.target.value)}} />
          <button className='change-submit' onClick={()=>SaveTitleGeo(titleGeo)}><CheckIcon fontSize='medium'/></button>
        </div>
        </div>
        <div className='change-texts'>
        <p className='change-p'>Title</p>
        <input type='text' className='additem-text' defaultValue={datas.titleEng} placeholder={datas.titleEng} />
        <div className="submit-changes">
        <input type='text' className='additem-text-change' value={titleEng} placeholder='type...' onChange={(e)=>{setTitleEng(e.target.value)}} />
          <button className='change-submit' onClick={()=>SaveTitleEng(titleEng)}><CheckIcon fontSize='medium'/></button>
        </div>
        </div>
        <div className='change-texts'>
        <p className='change-p'>Заголовок</p>
        <input type='text' className='additem-text' defaultValue={datas.titleRus} placeholder={datas.titleRus} />
        <div className="submit-changes">
        <input type='text' className='additem-text-change' value={titleRus} placeholder='type...' onChange={(e)=>{setTitleRus(e.target.value)}} />
          <button className='change-submit' onClick={()=>SaveTitleRus(titleRus)}><CheckIcon fontSize='medium'/></button>
        </div>
        </div>
        <div className='change-texts'>
        <p className='change-p'>ფასი</p>
        <input type='number' className='additem-text' defaultValue={datas.price} placeholder={datas.price} />
        <div className="submit-changes">
        <input type='number' className='additem-text-change' value={price} placeholder='123...' onChange={(e)=>{setPrice(e.target.value)}} />
          <button className='change-submit' onClick={()=>SavePrice(price)}><CheckIcon fontSize='medium'/></button>
        </div>
        </div>
        <div className='change-texts'>
        <p className='change-p'>აქცია</p>
        <input type='number' className='additem-text' defaultValue={datas.sale} placeholder={datas.sale} />
        <div className="submit-changes">
        <input type='number' className='additem-text-change' value={sale} placeholder='123...' onChange={(e)=>{setSale(e.target.value)}} />
          <button className='change-submit' onClick={()=>SaveSale(sale)}><CheckIcon fontSize='medium'/></button>
        </div>
        </div>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" onChange={(e)=>setImages(e)}/>
    </Button>
    {showimage===null
    ?<img src={datas.image} className='additem-show-img '/>
    :<img src={showimage} className='additem-show-img '/>
    }
        <button onClick={()=>SaveImage()} className='additem-btn'>Upload Image</button>
        <button onClick={()=>Remove()} className='additem-btn-r'>Delete</button>
    </div>
    </center>
}
    </div>
  )
}


function convertToBase64(file){
  return new Promise((resolve,reject)=>{
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}