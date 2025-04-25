import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import axios from 'axios'
import {Button} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useParams } from 'react-router-dom';
import '../SCSS/Admin/admin.css'
import CircularProgress from '@mui/material/CircularProgress';

export default function AdminChange() {
  // States
  const [imagebase64,setImage] = useState(null)
  const [showimage,setShowImage] = useState(null)
  const [namesGeo,setNamesGeo] = useState('')
  const [namesEng,setNamesEng] = useState('')
  const [titlesGeo,setTitleGeo] = useState('')
  const [titlesEng,setTitleEng] = useState('')
  const [prices,setPrice] = useState('')
  const [sales,setSale] = useState('')

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

  // Image
const setImages = (e)=> {
  setImage(e.target.files[0])
  setShowImage(URL.createObjectURL(e.target.files[0]))
}


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

 
// Save Item
const Save = async  () => {
  const base64 = await convertToBase64(imagebase64)
        console.log(base64)
        // All Data
        if(namesGeo.length == 0 || namesEng.length == 0 || titlesGeo.length == 0 || titlesEng.length == 0 || prices.length == 0 || sales.length == 0){
          alert('ar sheidzleba')
          return
        }else{
          const allInfo = {nameGeo:namesGeo,nameEng:namesEng,titleGeo:titlesGeo,titleEng:titlesEng,price:prices,sale:sales,image:base64}
          // Post
          try {
           const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/usermenu/${id}`,allInfo,{
             headers:{
               'Content-Type':'application/json'
             }
           })
           console.log(newData)
          } catch (error) {
           console.log(error.response.data.mssg)
          }
        }
        
}


// Delete Item
const Remove = async () => {
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
}


  return (
    <div>
      {datas ===null
      ?
      <div className='circleProgress'>
      <CircularProgress sx={{color:'white'}}/>
     </div>
      :
      <center>
      <div className='change-box'>
        <p className='change-p'>სახელი</p>
        <input type='text' className='additem-text' value={namesGeo} placeholder={datas.nameGeo} onChange={(e)=>{setNamesGeo(e.target.value)}} />
        <p className='change-p'>Name</p>
        <input type='text' className='additem-text' value={namesEng} placeholder={datas.nameEng} onChange={(e)=>{setNamesEng(e.target.value)}} />
        <p className='change-p'>აღწერა</p>
        <input type='text' className='additem-text' value={titlesGeo} placeholder={datas.titleGeo} onChange={(e)=>{setTitleGeo(e.target.value)}} />
        <p className='change-p'>Title</p>
        <input type='text' className='additem-text' value={titlesEng} placeholder={datas.titleEng} onChange={(e)=>{setTitleEng(e.target.value)}} />
        <p className='change-p'>ფასი</p>
        <input type='number' className='additem-text' value={prices} placeholder={datas.price} onChange={(e)=>{setPrice(e.target.value)}} />
        <p className='change-p'>აქცია</p>
        <input type='number' className='additem-text' value={sales} placeholder={datas.sale} onChange={(e)=>{setSale(e.target.value)}} />
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" onChange={(e)=>setImages(e)}/>
    </Button>
    {showimage===null
    ?<img src={datas.image} className='additem-show-img '/>
    :<img src={showimage} className='additem-show-img '/>
    }
        <button onClick={()=>Save()} className='additem-btn'>Save</button>
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