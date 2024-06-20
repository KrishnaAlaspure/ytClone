import React from 'react'
import Avatar from 'react-avatar'

function LiveChatMessage({item}) {

  return (
    <div className='flex items-center'>
      <div>
      <Avatar
                  src={`https://avatar.iran.liara.run/public/boy?username=${item?.name}`}
                  size={20}
                  round={true}
                  className=""
                />
      </div>
      <div>
        <h1 className='text-sm text-neutral-500 font-medium'>@{item?.name}</h1>
        
      </div>
      <div><p className=' text-xs font-medium ml-2 overflow-x-auto '>{item?.message}</p></div>
    </div>
  )
}

export default LiveChatMessage
