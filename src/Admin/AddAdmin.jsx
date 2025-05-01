import React, { useState } from 'react'
import axios from 'axios'
import {Button} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import '../SCSS/Admin/admin.css'
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';


export default function AddAdmin() {
    const [imagebase64,setImage] = useState(null)
    const [showimage,setShowImage] = useState(null)
    const [namesGeo,setNamesGeo] = useState('')
    const [namesEng,setNamesEng] = useState('')
    const [namesRus,setNamesRus] = useState('')
    const [titlesGeo,setTitleGeo] = useState('')
    const [titlesEng,setTitleEng] = useState('')
    const [titlesRus,setTitleRus] = useState('')
    const [prices,setPrice] = useState('')
    const [sales,setSale] = useState('')
    // loading
    const [loading,setLoading] = useState(false)



    // Image
    const setImages = (e)=> {
        setImage(e.target.files[0])
        setShowImage(URL.createObjectURL(e.target.files[0]))
      }


const Upload = async  () => {
    if(!imagebase64 || namesGeo.length <= 0 || namesEng.length <= 0 ||namesRus.length <= 0 ||titlesGeo.length <= 0 ||titlesEng.length <= 0 ||titlesRus.length <= 0 || prices.length <= 0 || sales.length <= 0){
        // All Datamagebase64}
alert('Problem Fill Input')
    }else{
        //  Base64
        const base64 = await convertToBase64(imagebase64)
        console.log(base64)
        // All Data
        const allInfo = {nameGeo:namesGeo,nameEng:namesEng,nameRus:namesRus,titleGeo:titlesGeo,titleEng:titlesEng,titleRus:titlesRus,price:prices,sale:sales,image:base64}
        // Post
        try {
          
         const newData = await axios.post('https://admiredb-dn1c.onrender.com/usermenu/',allInfo,{
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
       {loading===true
      ?
      <div className='circleProgress'>
      <CircularProgress sx={{color:'white'}}/>
     </div>
     :
     <div className='additem'>
      <p className='additem-name'>{lang==='namesGeo'?'პროდუქტის დამატება':'Add Product'}</p>
        <input type='text' className='additem-text' placeholder="namesGeo" onChange={(e)=>{setNamesGeo(e.target.value)}} />
        <input type='text' className='additem-text' placeholder="namesEng" onChange={(e)=>{setNamesEng(e.target.value)}} />
        <input type='text' className='additem-text' placeholder="namesRus" onChange={(e)=>{setNamesRus(e.target.value)}} />
        <input type='text' className='additem-text' placeholder="titleGeo" onChange={(e)=>{setTitleGeo(e.target.value)}} />
        <input type='text' className='additem-text' placeholder="titleEng" onChange={(e)=>{setTitleEng(e.target.value)}} />
        <input type='text' className='additem-text' placeholder="titleRus" onChange={(e)=>{setTitleRus(e.target.value)}} />
        <input type='number' className='additem-text' placeholder="price" onChange={(e)=>{setPrice(e.target.value)}} />
        <input type='number' className='additem-text' placeholder="sale" onChange={(e)=>{setSale(e.target.value)}} />
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" onChange={(e)=>setImages(e)}/>
    </Button>
    {showimage==null?<></>:<img src={showimage} className='additem-show-img'/>}
    <button onClick={()=>Upload()} className='additem-btn'>Upload</button>
    </div>}
    
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