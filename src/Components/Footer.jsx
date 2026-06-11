import React from 'react'
import slight from '../assets/s-light.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../Components/Footer.css"

export default function Footer() {
  return (
    <>
      <footer className="mb-0 d-flex flex-wrap justify-content-between align-items-center p-3 border-top text-bg-dark" style={{ backgroundColor: "#111111" }}>
        <p className="col-4 mb-0 text-body-light">© 2026 ShopSphere Inc. All Rights Reserved.</p>
        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center  mb-md-0 me-md-auto link-body-emphasis text-decoration-none" aria-label="Bootstrap">
          <img src={slight} width="35" height="32" alt="" />
        </a>

        <div className="nav col-md-4 justify-content-end align-items-center gap-3">
          <a href="https://github.com/skyadav227" target='_blank' className="footer-icon text-light fs-4" rel='noreferrer'> <FaGithub /> </a>
          <a href="https://www.linkedin.com/in/sher-karthikeya-yadav-009193226/" target='_blank' className="footer-icon text-light fs-4" rel='noreferrer'> <FaLinkedin /> </a>
        </div>

        <div className="text-center w-100">
          <p className="crafted-text text-center w-100 mt-2 mb-0">Crafted with<span className='heart'> ❤︎ </span>by KarthiK</p>
        </div>
      </footer>
    </>
  )
}
