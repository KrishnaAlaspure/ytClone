import React from 'react'
import LeftSideBar from './LeftSideBar'
import Feed from './Feed'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

function Body() {
    const toggle =useSelector((store)=>store.app.toggle)
  return (
    <div className='flex w-full pr-2'>
        <div className={`${toggle}? 'w-[20%] ' : ''`}><LeftSideBar/></div>
        <div className={` w-[90%]`}><Outlet/></div>
      </div>
  )
}

export default Body
