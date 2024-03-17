import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Navbar.module.css'

export default function Navbar() {

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector(".navbar").style.padding = " 0px";
        } else {
            document.querySelector(".navbar").style.padding = "20px 0px";
        }
    }
    return <>
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${style.test}  ${style.padding}`} id='scroll' >
            <div className={`container`}>
                <NavLink className="navbar-brand fs-3 fw-bolder" to={'/'}>START FRAMEWORK</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav" >
                    <ul className="navbar-nav text-center  ms-auto fs-5 fw-bold">
                        <li className="nav-item mx-1">
                            <NavLink className="nav-link " to={'about'}>ABOUT</NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink className="nav-link" to={'portfolio'}>PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink className="nav-link" to={'contact'}>CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}