import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import sdark from '../assets/s-dark.png'

export default function Header() {

  let cartValue = useSelector(state => state.cart)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#F8F9FA", border: "1px solid #EAEAEA", zIndex: "10" }}>
        <div className="container-fluid">
          <img src={sdark} width="35" height="32" alt="" />
          <a className="navbar-brand ms-2 fw-bold" href="/Home">ShopSphere</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Products">Products</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart<span className='badge bg-danger ms-1'>{cartValue.length}</span></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact us</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Account">Account</Link>
              </li>

            </ul>



          </div>
        </div>
      </nav>
    </>
  )
}
