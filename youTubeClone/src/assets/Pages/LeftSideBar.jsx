import React from 'react'
import { sideBarItem1,sideBarItem2,sideBarItem3} from '../Constant/constant1'
import {useSelector} from 'react-redux'

function LeftSideBar() {
    const toggle =useSelector((store)=>store.app.toggle)
  return (
    <div className={`${toggle?'  relative w-full h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden ' :''}`}>
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
                    <div key={index} className='flex items-center px-2 py-1 hover:bg-neutral-300 rounded-xl cursor-pointer'>
                        {items.icon } 
                        <p className='ml-4'>{items.text}</p>

                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default LeftSideBar
