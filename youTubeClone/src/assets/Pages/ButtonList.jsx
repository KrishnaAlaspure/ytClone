import React, { useEffect, useState } from 'react'
import {topBarText} from '../Constant/constant1'
import axios from 'axios'
import { API_KEY } from '../Constant/constant'
import { useDispatch } from 'react-redux'
import { setCategory } from '../utils/appSlice'

function ButtonList() {
  const [active,setActive]=useState("All")
  const dispatch=useDispatch()

  const videobyTag=(tag)=>{
   if(active!=tag){
    dispatch(setCategory(tag))
    setActive(tag)
   }
  }

  

  return (
    <div className='flex overflow-x-scroll no-scrollbar'>
      {
        topBarText.map((item,index)=>{
            return (
              <div  >
                <button key={index} onClick={()=>{videobyTag(item.title)}} className={`${active==item.title ?'bg-neutral-900 text-white':'bg-neutral-200'} rounded-lg px-1 mx-1 ` }><span className=' whitespace-nowrap '>{item.title}</span></button>
              </div>
            )
        })
      }
    </div>
  )
}

export default ButtonList
