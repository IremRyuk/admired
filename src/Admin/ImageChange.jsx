import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import axios from 'axios'
import {Button} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useParams } from 'react-router-dom';
import '../SCSS/Admin/admin.css'
import CircularProgress from '@mui/material/CircularProgress';
import CheckIcon from '@mui/icons-material/Check';

export default function ImageChange() {
  // States
  const [imagebase64,setImage] = useState(null)
  const [showimage,setShowImage] = useState(null)
  const [nameGeo,setNamesGeo] = useState('')
  const [nameEng,setNamesEng] = useState('')
  const [nameRus,setNamesRus] = useState('')
  // Loading
  const [loading,setLoading] = useState(false)

// Data Current
const [datas,setData] = useState(null)
// Get Data Single
const {id} = useParams()
const SingleData = async () => {
  const response = await fetch("https://admiredb-dn1c.onrender.com/images/"+id)
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
      const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/images/${id}`,{nameGeo},{
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
    const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/images/${id}`,{nameEng},{
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
    const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/iamges/${id}`,{nameRus},{
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
    const newData = await axios.patch(`https://admiredb-dn1c.onrender.com/images/${id}`,{image},{
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
  const responce = await fetch('https://admiredb-dn1c.onrender.com/images/'+id,{
    method:'DELETE'
})
if(responce.ok){
  alert('Deleted')
  window.location.replace(
    "http://localhost:5173/allImages"
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