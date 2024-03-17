
import React from 'react'
import Layer from './Component/Layer/Layer.jsx'
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Start from './Component/Start/Start';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './Component/About/About.jsx';
import Notfound from './Component/Notfound/Notfound.jsx';

let routers=createBrowserRouter([
  {path :'' , element :<Layer /> , children :[
  {index : true , element : <Start />},
  { path :'about' , element : <About />},
  { path :'portfolio' , element : <Portfolio />},
  { path :'contact' , element : <Contact />},
  { path :'*' , element : <Notfound/>}
  ]}
  ])
export default function App() {

  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}


