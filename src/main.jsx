import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Homa from './components/Home_layout/Homa';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './CartProductsLoader/CartProductsLoader';



const router = createBrowserRouter([
  {
    path : '/',
    element : <Homa></Homa>,
    children : [
      {
        path : '/',
        element : <Shop></Shop>
      },
      {
        path : '/shop',
        element : <Shop></Shop>
      },
      {
        path: '/order',
        element : <Orders></Orders> ,
        loader : cartProductsLoader
      },
      {
        path : '/inventory',
        element : <Inventory></Inventory>
      },

      {
        path: '/login',
        element : <Login></Login>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
