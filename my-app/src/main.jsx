import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Telainicio from '../src/Components/Views/Telainicio/Telainicio'
import Telatarefa from '../src/Components/Views/Telatarefa/Telatarefa'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Telainicio />,
    
  },
  {
  path: "/Telatarefa",
   element: <Telatarefa/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)

