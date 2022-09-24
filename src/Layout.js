import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Archiv_file } from './Components/Icon/Archiv'
import { Money_file } from './Components/Icon/Money'
import { Landing_page } from './Components/Homepage/Landing_page'
import { Sidebar } from './Components/Sidebar'

export const Layout = () => {
  return (
    <>
    <Sidebar/>
     {/* <Landing_page/> */}
     <Outlet/>
    {/* <Money_file/>
    <Archiv_file/> */}
   {/* <Header/>
       <Outlet/>
   <Footer/> */}
    </>
  )
}
