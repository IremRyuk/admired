import React, { useState } from 'react'
import axios from 'axios'
import {Button} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


export default function AddAdmin() {
    const [imagebase64,setImage] = useState(null)
    const [namesGeo,setNamesGeo] = useState('')
    const [namesEng,setNamesEng] = useState('')
    const [titlesGeo,setTitleGeo] = useState('')
    const [titlesEng,setTitleEng] = useState('')
    const [prices,setPrice] = useState('')
    const [sales,setSale] = useState('')



    // Image
    const setImages = (e)=> {
        setImage(e.target.files[0])
      }


const Upload = async  () => {
    if(!imagebase64){
        // All Data
        const allInfo = {nameGeo:namesGeo,nameEng:namesEng,titleGeo:titlesGeo,titleEng:titlesEng,price:prices,sale:sales,image:imagebase64}
        // Post
        try {

          const newData = await axios.post('https://admiredb-dn1c.onrender.com/usermenu/',allInfo,{
            headers:{
              'Content-Type':'application/json',
            }
           })
console.log(newData)
        } catch (error) {
            console.log(error.response.data.mssg)
        }
    }else{
        //  Base64
        const base64 = await convertToBase64(imagebase64)
        console.log(base64)
        // All Data
        const allInfo = {nameGeo:namesGeo,nameEng:namesEng,titleGeo:titlesGeo,titleEng:titlesEng,price:prices,sale:sales,image:base64}
        // Post
        try {
         const newData = await axios.post('https://admiredb-dn1c.onrender.com/usermenu/',allInfo,{
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
    <div>
        <input type='text' placeholder="namesGeo" onChange={(e)=>{setNamesGeo(e.target.value)}} />
        <input type='text' placeholder="namesEng" onChange={(e)=>{setNamesEng(e.target.value)}} />
        <input type='text' placeholder="titleGeo" onChange={(e)=>{setTitleGeo(e.target.value)}} />
        <input type='text' placeholder="titleEng" onChange={(e)=>{setTitleEng(e.target.value)}} />
        <input type='text' placeholder="price" onChange={(e)=>{setPrice(e.target.value)}} />
        <input type='text' placeholder="sale" onChange={(e)=>{setSale(e.target.value)}} />
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" onChange={(e)=>setImages(e)}/>
    </Button>
        <button onClick={()=>Upload()}>button</button>
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