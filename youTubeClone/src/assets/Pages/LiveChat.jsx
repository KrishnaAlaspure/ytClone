import React, { useEffect } from 'react'
import LiveChatMessage from './LiveChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../utils/chatSlice'
import { generateRandomName,generateRandomMessage } from './helper'

function LiveChat() {
    const dispatch =useDispatch()
    const message =useSelector((store)=>store.chat.message)
    useEffect(()=>{
        const timer =setInterval(()=>{
            dispatch(setMessage({name:generateRandomName(),message:generateRandomMessage(16)}))
        },1000)
        return (()=>{
            clearInterval(timer)
        })
    },[])
    return (
    <div className='p-2 '>

        <div >
            {
                message.map((item,index)=>{
                    return(
                        <LiveChatMessage key={index} item={item}/>
                    )
                })
            }
            
            

        </div>
      
    </div>
  )
}

export default LiveChat
