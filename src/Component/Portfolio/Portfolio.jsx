import React from 'react'
import style from './Portfolio.module.css'
import img1 from '../../Assents/images/1.png'
import img2 from '../../Assents/images/2.png'
import img3 from '../../Assents/images/3.png'


export default function Portfolio() {
  return <>

    <section className='py-5 mt-5 '>
      <div className="container  py-5">
        <h2 className='text-center fw-bolder fs-1'>PORTFOLIO COMPONENT</h2>
        <div className="tilte text-center d-flex  justify-content-center align-items-center">
          <div className={`bg-dark size`}></div>
          <i className="fa-solid fa-star mx-3"></i>
          <div className={`bg-dark size`}></div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <div  className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src={img1} alt="1" className='w-100 rounded-5' />
              <div className={`layer d-flex justify-content-center align-items-center background  rounded-5 position-absolute top-0 bottom-0 end-0 start-0 ${style.layers}`}>
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div  className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <img src={img2} alt="2" className='w-100 rounded-5' />
              <div className={`layer d-flex justify-content-center align-items-center background  rounded-5 position-absolute top-0 bottom-0 end-0 start-0 ${style.layers}`}>
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div  className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal1">
              <img src={img3} alt="3" className='w-100 rounded-5' />
              <div className={`layer d-flex justify-content-center align-items-center background  rounded-5 position-absolute top-0 bottom-0 end-0 start-0 ${style.layers}`}>
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div  className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src={img1} alt="4" className='w-100 rounded-5' />
              <div className={`layer d-flex justify-content-center align-items-center background  rounded-5 position-absolute top-0 bottom-0 end-0 start-0 ${style.layers}`}>
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div  className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <img src={img2} alt="5" className='w-100 rounded-5' />
              <div className={`layer d-flex justify-content-center align-items-center background  rounded-5 position-absolute top-0 bottom-0 end-0 start-0 ${style.layers}`}>
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div  className="item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal1">
              <img src={img3} alt="6" className='w-100 rounded-5' />
              <div className={`layer d-flex justify-content-center align-items-center background  rounded-5 position-absolute top-0 bottom-0 end-0 start-0 ${style.layers}`}>
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  

<div class="modal  py-5 mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog mt-5">
    <div class="modal-content mt-5">
      <img src={img1} className='w-100' alt="" />
    </div>
  </div>
</div>
<div class="modal  py-5 mt-5" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog mt-5">
    <div class="modal-content mt-5">
      <img src={img2} className='w-100' alt="" />
    </div>
  </div>
</div>
<div class="modal  py-5 mt-5" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog mt-5">
    <div class="modal-content mt-5">
      <img src={img3} className='w-100' alt="" />
    </div>
  </div>
</div>

  </>

}
