import React, { useState } from 'react'
import { sideBarItem1,sideBarItem2,sideBarItem3} from '../Constant/constant1'
import {useSelector} from 'react-redux'
import { setCategory } from '../utils/appSlice'
import { useDispatch,  } from "react-redux";
import { Link } from 'react-router-dom';

function LeftSideBar() {
    const toggle =useSelector((store)=>store.app.toggle)
    const dispatch =useDispatch()
    const [input,setInput]=useState()

    const handleClickEvent =(input)=>{
        console.log("clicked");
        dispatch(setCategory(input))
        setInput("")
      }
  return (
    <div className={`${toggle?'  relative w-full h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden scrollbar' :''}`}>
      <div className={` p-2 border-b-2 `}>
        {
            sideBarItem1.map((items,index)=>{
                return(
                    <div key={index} className='flex items-center  py-1 hover:bg-neutral-300 rounded-xl cursor-pointer'>
                        {items.icon } 
                        <p className={`ml-4 ${toggle ? '':'hidden'}`}>{items.text}</p>

                    </div>
                )
            })
        }
      </div>
      
      <div className={`'p-2 border-b-2 ${toggle ? '' : 'hidden'}`}>
      <p>You</p>
        {
            sideBarItem2.map((items,index)=>{
                return(
                    <div key={index} className={`flex items-center px-2 py-1 hover:bg-neutral-300 rounded-xl cursor-pointer `}>
                        {items.icon } 
                        <p className='ml-4'>{items.text}</p>

                    </div>
                )
            })
        }
      </div>
      
      <div className={`'p-2 border-b-2 ${toggle ? '' : 'hidden'}`}>
      <p>Explore</p>
        {
            sideBarItem3.map((items,index)=>{
                return(
                    <button key={index} onClick={()=>handleClickEvent(items.text)}>
                        <div  className='flex items-center px-2 py-1 hover:bg-neutral-300 rounded-xl cursor-pointer'>
                        {items.icon } 
                        <Link to={'/'}>
                        <p className='ml-4' >{items.text}</p>
                        </Link>

                    </div>
                    </button>
                )
            })
        }
      </div>
    </div>
  )
}

export default LeftSideBar
