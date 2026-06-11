import React from 'react'
import { Link } from 'react-router-dom'
import aboutimg from "../assets/about.png"

export default function About() {
  return (
    <>
      <div className="m-0 mt-5 container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-2">

        <div className="col">
          <h1 className='text-secondary'>About ShopSphere:</h1>

          <div className="">
            <p className='text-dark'>Founded in 2026, ShopSphere is an independent e-commerce marketplace built on a single premise:
              <strong>curation over clutter.</strong></p>
            <p className='text-dark'>We observed a growing frustration with chaotic online shopping experiences flooded with low-tier products. </p>
            <p className='text-dark'>ShopSphere was created to be a streamlined digital storefront where premium electronics, curated fashion apparel, and daily beauty essentials coexist in one cohesive ecosystem.</p>
          </div>

          <div className=''>
            <p className='text-dark'>We don't host millions of random third-party sellers. </p>
            <p className='text-dark'>ShopSphere operates on a direct-to-brand partnership model. </p>
            <p className='text-dark'>Every smartphone, leather jacket, or skincare product featured on our platform is sourced directly from verified manufacturers. </p>
            <p className='text-dark'>This eliminates counterfeit risk and ensures that what you see on your screen matches the premium quality delivered to your door.</p>
          </div>
        </div>



        <div className="col d-flex align-items-center">
          <img className='img-fluid rounded shadow' src={aboutimg} alt="" />
        </div>


      </div>




      <div className=' m-0 mt-5 container-fluid row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-3'>

        <div className="col">
          <h1 className='display-1 fw-medium text-secondary'>01</h1>
          <h4>Strictly Vetted Inventory</h4>
          <p>Our team physically inspects and evaluates every product line for build quality, materials, and long-term durability before it is approved for our catalog.</p>
        </div>

        <div className="col">
          <h1 className='display-1 fw-medium text-secondary'>02</h1>
          <h4>Integrated Fulfillment</h4>
          <p>By controlling our own regional logistics networks, we ensure orders are processed securely and dispatched within 24 hours of checkout.</p>
        </div>

        <div className="col">
          <h1 className='display-1 fw-medium text-secondary'>03</h1>
          <h4>Transparent Support</h4>
          <p>No automated chatbots that run in circles. ShopSphere provides a direct line to genuine, human customer assistance available around the clock.</p>
        </div>

      </div>



      <div className="m-0 mt-5 mb-5 text-center container-fluid" >
        <h2>Ready to experience curated shopping?</h2>
        <p>Discover premium products selected for quality, performance and style.</p>
        <Link to="/products" className="btn btn-lg btn-outline-dark border-4 fw-bold" style={{ boxShadow: "10px 10px 10px" }}>Browse Collection </Link>
      </div>
    </>
  )
}
