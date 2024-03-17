import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
    return <>
        <footer >
            <div className={`py-5  ${style.test}`}>
                <div className={`container py-5`}>
                    <div className=" row text-center text-white gy-5">
                        <div className="col-md-4">
                            <div className="items">
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="items ">
                                <h3>LOCATION</h3>
                                <ul className='mx-auto d-flex justify-content-between  w-50 ps-0'>
                                    <li className={`border border-2 rounded-circle d-flex justify-content-center align-items-center ${style.list}`}>
                                        <i className=" fa-brands fa-facebook fa-xl"></i>
                                    </li>
                                    <li className={`border border-2 rounded-circle d-flex justify-content-center align-items-center ${style.list}`}>
                                        <i className="fa-brands fa-twitter fa-xl"></i>
                                    </li>
                                    <li className={`border border-2 rounded-circle d-flex justify-content-center align-items-center ${style.list}`}>
                                        <i className="fa-brands fa-linkedin fa-xl"></i>
                                    </li>
                                    <li className={`border border-2 rounded-circle d-flex justify-content-center align-items-center ${style.list}`}>
                                        <i className="fa-solid fa-globe fa-xl"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="items">
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`text-center text-white py-3 ${style.color}`}>
                <p>Copyright © Your Website 2021</p>
            </div>

        </footer>
    </>
}
