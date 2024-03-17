import React, { useState } from 'react'

export default function Contact() {
  const [value, setValue] = useState("");
  function display(e) {
    setValue(e.target.value);
    if(e.target.value == ''){
      document.querySelector(".label1").classList.add ('class' , 'd-none');
    } else{
      document.querySelector(".label1").classList.remove ('class' , 'd-none');
    }
     
  }
  function display1(e) {
    setValue(e.target.value);
    if(e.target.value == ''){
      document.querySelector(".label2").classList.add ('class' , 'd-none');
    } else{
      document.querySelector(".label2").classList.remove ('class' , 'd-none');
    }
     
  }
  function display2(e) {
    setValue(e.target.value);
    if(e.target.value == ''){
      document.querySelector(".label3").classList.add ('class' , 'd-none');
    } else{
      document.querySelector(".label3").classList.remove ('class' , 'd-none');
    }
     
  }
  function display3(e) {
    setValue(e.target.value);
    if(e.target.value == ''){
      document.querySelector(".label4").classList.add ('class' , 'd-none');
    } else{
      document.querySelector(".label4").classList.remove ('class' , 'd-none');
    }
     
  }
 
  return <>
    <section className='container py-5 mt-5 '>
      <div className="container  py-5">
        <h2 className='text-center fw-bolder fs-1'>CONATCT SECTION</h2>
        <div className="tilte text-center d-flex  justify-content-center align-items-center">
          <div className={`bg-dark size`}></div>
          <i className="fa-solid fa-star mx-3"></i>
          <div className={`bg-dark size`}></div>
        </div>
      </div>
      <form className='w-50 form-size m-auto'>
        <div className=" mb-3 border rounded-1 border-1 border-top-0 border-end-0  border-start-0 border-dark-subtle">
          <label htmlFor="exampleInputEmail1" className="form-label label1 d-none color" >userName:</label>
          <input type="email"  onInput={display} className="form-control border-0" placeholder='userName'  aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 border rounded-1 border-1 border-top-0 border-end-0  border-start-0 border-dark-subtle">
          <label htmlFor="exampleInputPassword1" className="form-label label2 d-none color">userAge:</label>
          <input type="password"  onInput={display1} className="form-control border-0" placeholder='userAge' />
        </div>
        <div className="mb-3 border rounded-1 border-1 border-top-0 border-end-0  border-start-0 border-dark-subtle">
          <label htmlFor="exampleInputPassword1" className="form-label label3 d-none color">userEmail:</label>
          <input type="email"   onInput={display2} className="form-control border-0" placeholder='userEmail' />
        </div>
        <div className="mb-3 border rounded-1 border-1 border-top-0 border-end-0  border-start-0 border-dark-subtle">
          <label htmlFor="exampleInputPassword1" className="form-label label4 d-none color">userPassword:</label>
          <input type="password"  onInput={display3} className="form-control border-0" placeholder='userPassword' />
        </div>
        <button type="submit" className="border-0 py-2 px-3 rounded-2 background opacity-75 text-white">Send Message</button>
      </form>
      
    </section>
  </>
}
