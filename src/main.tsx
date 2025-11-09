import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './index.css'
import ModalContextProvider from './context/ModalContext.tsx'


import Home from "./pages/Home";
import NotFound from "./pages/NotFoud";
import Top15 from "./pages/Top15";
import Watchlist from "./pages/Watchlist";
import Profile from "./pages/Profile";
import Layout from './components/Layout.tsx'

const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[

      {path: "/" , element:<Home/>},
      {path: "/watchlist" , element:<Watchlist/>},
      {path: "/top15" , element:<Top15/>},
      {path: "/profile" , element:<Profile/>},
      {path: "*" , element:<NotFound/>}

    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalContextProvider>

    <RouterProvider router={router} />

    </ModalContextProvider>
  </StrictMode>,
)
