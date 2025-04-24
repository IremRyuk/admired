import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import axios from 'axios'
import {Button} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useParams } from 'react-router-dom';
import '../SCSS/Admin/admin.css'

export default function AdminChange() {
  // States
  const [imagebase64,setImage] = useState(null)
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
  console.log(json)
  setData(json)
}
useEffect(()=>{
  SingleData()
},[])








  // Image
const setImages = (e)=> {
  setImage(e.target.files[0])
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


  return (
    <div>
      {datas ===null
      ?<></>
      :
      <div>
        <input type='text' value={namesGeo} placeholder={datas.nameGeo} onChange={(e)=>{setNamesGeo(e.target.value)}} />
        <input type='text' value={namesEng} placeholder={datas.nameEng} onChange={(e)=>{setNamesEng(e.target.value)}} />
        <input type='text' value={titlesGeo} placeholder={datas.titleGeo} onChange={(e)=>{setTitleGeo(e.target.value)}} />
        <input type='text' value={titlesEng} placeholder={datas.titleEng} onChange={(e)=>{setTitleEng(e.target.value)}} />
        <input type='number' value={prices} placeholder={datas.price} onChange={(e)=>{setPrice(e.target.value)}} />
        <input type='number' value={sales} placeholder={datas.sale} onChange={(e)=>{setSale(e.target.value)}} />
        <br />
        <br />
        
        <br />
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" onChange={(e)=>setImages(e)}/>
    </Button>
    <br />
        <button onClick={()=>Save()}>Save</button>
        <img src={datas.image} />
    </div>
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