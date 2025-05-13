import React, { useState } from 'react'
import axios from 'axios'
import {Button} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import '../SCSS/Admin/admin.css'
import { useSelector } from 'react-redux';


export default function AdminImages() {
    const [imagebase64,setImage] = useState(null)
    const [showimage,setShowImage] = useState(null)
    const [namesGeo,setNamesGeo] = useState('')
    const [namesEng,setNamesEng] = useState('')
    const [namesRus,setNamesRus] = useState('')



    // Image
    const setImages = (e)=> {
        setImage(e.target.files[0])
        setShowImage(URL.createObjectURL(e.target.files[0]))
      }


const Upload = async  () => {
    if(!imagebase64 || namesGeo.length <= 0 || namesEng.length <= 0 ||namesRus.length <= 0){
        // All Datamagebase64}
alert('Problem Fill Input')
    }else{
        //  Base64
        const base64 = await convertToBase64(imagebase64)
        console.log(base64)
        // All Data
        const allInfo = {nameGeo:namesGeo,nameEng:namesEng,nameRus:namesRus,image:base64}
        // Post
        try {
          
         const newData = await axios.post('https://admiredb-dn1c.onrender.com/images/',allInfo,{
           headers:{
             'Content-Type':'application/json'
           }
         })
         alert('Success')
         window.location.reload()
        } catch (error) {
         console.log(error)
         alert('Problem')
        }
     }
}

// Add Names
const lang = useSelector(res=>res.flag)


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
      
  return (
    <center>
     <div className='additem'>
      <p className='additem-name'>{lang==='namesGeo'?'პროდუქტის დამატება':'Add Product'}</p>
        <input type='text' className='additem-text' placeholder="namesGeo" onChange={(e)=>{setNamesGeo(e.target.value)}} />
        <input type='text' className='additem-text' placeholder="namesEng" onChange={(e)=>{setNamesEng(e.target.value)}} />
        <input type='text' className='additem-text' placeholder="namesRus" onChange={(e)=>{setNamesRus(e.target.value)}} />
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" onChange={(e)=>setImages(e)}/>
    </Button>
    {showimage==null?<></>:<img src={showimage} className='additem-show-img'/>}
    <button onClick={()=>Upload()} className='additem-btn'>Upload</button>
    </div>
    </center>
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