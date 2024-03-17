import React from 'react'
import img from '../../Assents/images/avataaars (1).svg'
export default function Start() {
  return <>
    <section className='mt-5 text-center text-white  p-5 background'>
      <img src={img} alt="stert img" className='w-25' />
      <h2 className='text-center fw-bolder fs-1'>START FRAMEWORK</h2>
      <div className="tilte text-center d-flex  justify-content-center align-items-center">
        <div className={`bg-white size`}></div>
        <i className="fa-solid fa-star mx-3"></i>
        <div className={`bg-white size`}></div>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </section>
  </>
}
