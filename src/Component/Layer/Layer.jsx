import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer.jsx';


export default function Layer() {
  return <>
  <Navbar/>
  <Outlet></Outlet>
  <Footer/>
  </>
}
