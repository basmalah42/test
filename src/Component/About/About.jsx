import React from 'react'
export default function About() {
  return <>
    <section className='py-5 mt-5 background'>
      <div className="container text-white py-5">
        <h2 className='text-center fw-bolder fs-1'>ABOUT COMPONENT</h2>
        <div className="tilte text-center d-flex  justify-content-center align-items-center">
          <div className={`bg-white size`}></div>
          <i className="fa-solid fa-star mx-3"></i>
          <div className={`bg-white size`}></div>
        </div>
        <div className="w-75 mt-3 mx-auto ">
          <div className="row">
            <div className="col-md-6">
              <div className="items">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="items">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    


  </>
}
