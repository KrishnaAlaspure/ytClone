import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './assets/Pages/NavBar'
import LeftSideBar from './assets/Pages/LeftSideBar'
import Feed from './assets/Pages/Feed'
import {useSelector} from 'react-redux'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Watch from './assets/Pages/Watch'
import Body from './assets/Pages/Body'

const appRouter =createBrowserRouter([
  {
    path:'/',
    element: <Body/>,
    children:[
      {
        path:'/watch',
        element:<Watch/>
      },
      {
        path:'/',
        element:<Feed/>
      }
    ]
  },
  {}
])

function App() {
  const [count, setCount] = useState(0)
  
  return (
    < >
    <div className='pl-5  '>
      <NavBar/>
      <RouterProvider router={appRouter}/>
    </div>

    </>
  )
}

export default App
