import React, { useEffect, useState } from 'react'
import heroimg from '../assets/Hero.png'
import techimg from '../assets/Tech.png'
import apparelimg from '../assets/Apparel.png'
import lifestyleimg from '../assets/Lifestyle.png'
import beautyimg from '../assets/Beauty.png'
import axios from 'axios'
import ProductCard from "../Components/ProductCard"
import { useNavigate } from 'react-router-dom'

export default function Home() {

  let navigate = useNavigate()

  let [products, setProducts] = useState([])


  let beautyPro = products.filter(item => item.category === "beauty")
  let smartphonePro = products.filter(item => item.category === "smartphones")
  let mensShirtPro = products.filter(item => item.category === "mens-shirts")
  let furniturePro = products.filter(item => item.category === "furniture")




  let bestBeauty = null
  if (beautyPro.length > 0) {
    bestBeauty = beautyPro.reduce((bestPro, currentPro) => {
      if (currentPro.rating > bestPro.rating) {
        return currentPro
      }
      else {
        return bestPro
      }
    })
  }

  let bestSmartphone = null
  if (smartphonePro.length > 0) {
    bestSmartphone = smartphonePro.reduce((bestPro, currentPro) => {
      if (currentPro.rating > bestPro.rating) {
        return currentPro
      }
      else {
        return bestPro
      }
    })
  }

  let bestMensShirt = null
  if (mensShirtPro.length > 0) {
    bestMensShirt = mensShirtPro.reduce((bestPro, currentPro) => {
      if (currentPro.rating > bestPro.rating) {
        return currentPro
      }
      else {
        return bestPro
      }
    })
  }

  let bestFurniture = null
  if (furniturePro.length > 0) {
    bestFurniture = furniturePro.reduce((bestPro, currentPro) => {
      if (currentPro.rating > bestPro.rating) {
        return currentPro
      }
      else {
        return bestPro
      }
    })
  }

  let trendingPro = [
    bestBeauty,
    bestSmartphone,
    bestMensShirt,
    bestFurniture
  ].filter(Boolean)





  console.log(trendingPro)



  useEffect(() => {
    async function productsData() {
      let { data } = await axios.get("https://dummyjson.com/products?limit=200")
      setProducts(data.products)


    }
    productsData()
  }, [])


  return (
    <>
      <div className="hero row position-relative m-0">
        <img className='img-fluid w-100 p-0' src={heroimg} alt="" style={{ boxShadow: "0px 10px 30px" }} />

        <div className='position-absolute end-0 top-50 col-7 translate-middle-y text-center'>
          <h1>Curated for Excellence</h1>

          <div className='d-none d-md-block'>
            <p>No noise.Just finest tech, apparel and lifestyle upgrades handpicked for you.</p>
            <button className='btn btn-outline-secondary fw-bold'>Discover Collection</button>
          </div>
        </div>
      </div>

      <div className='d-block d-md-none text-center mt-5 container col-9'>
        <p className='fs-5 fw-medium'>No noise.Just finest tech, apparel and lifestyle upgrades handpicked for you.</p>
        <button className='btn btn-outline-secondary fw-bold' onClick={() => navigate("/Products")}>Discover Collection</button>
      </div>




      <div className='mt-5'>
        <h1 className='text-center'>CATEGORIES</h1>

        <div className="container-fluid mt-5">
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4' style={{ border: "solid red 0px" }}>

            <div className='col text-center my-3' style={{ border: "solid red 0px" }}>
              <img className='img-fluid' src={techimg} alt="" />
              <div>
                <p className='fw-bold'>Tech</p>
                <button className="btn btn-md btn-outline-secondary fw-bold" onClick={() => navigate("/Products?category=smartphones")}>View</button>
              </div>
            </div>

            <div className='col text-center my-3' style={{ border: "solid red 0px" }}>
              <img className='img-fluid' src={apparelimg} alt="" />
              <div>
                <p className='fw-bold'>Apparel</p>
                <button className="btn btn-md btn-outline-secondary fw-bold" onClick={() => navigate("/Products?category=mens-shirts")}>View</button>
              </div>
            </div>

            <div className='col text-center my-3' style={{ border: "solid red 0px" }}>
              <img className='img-fluid' src={lifestyleimg} alt="" />
              <div>
                <p className='fw-bold'>Lifestyle</p>
                <button className="btn btn-md btn-outline-secondary fw-bold" onClick={() => navigate("/Products?category=furniture")}>View</button>
              </div>
            </div>

            <div className='col text-center my-3' style={{ border: "solid red 0px" }}>
              <img className='img-fluid' src={beautyimg} alt="" />
              <div>
                <p className='fw-bold'>Beauty</p>
                <button className="btn btn-md btn-outline-secondary fw-bold" onClick={() => navigate("/Products?category=beauty")}>View</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-center mt-5">Trending Products</h1>
        <div className="container mt-5">
          <div className="row">
            {
              trendingPro.map((item, i) => (
                <ProductCard key={item.id} item={item} />
              ))
            }

          </div>
        </div>
      </div>


      <div className="container my-5">
        <h1 className="text-center mb-5">Why ShopSphere?</h1>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow text-center p-4">
              <h1>🚚</h1>
              <h5 className="fw-bold mt-5">Fast Delivery</h5>
              <p>Quick and Reliable shipping right to your doorstep.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow text-center p-4">
              <h1>🔒</h1>
              <h5 className="fw-bold mt-5">Secure Payments</h5>
              <p>Shop confidently with safe and encrypted transactions.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow text-center p-4">
              <h1>⭐</h1>
              <h5 className="fw-bold mt-5">Premium Quality</h5>
              <p>Carefully selected products from trusted brands.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow text-center p-4">
              <h1>💬</h1>
              <h5 className="fw-bold mt-5">24/7 Support</h5>
              <p>Our support team is always ready to help you.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container my-5">
        <div className="card shadow-lg border-0 p-5 text-center" style={{ backgroundColor: "#f8f9fa" }}>
          <h2 className="fw-bold">Stay Updated</h2>
          <p className="text-secondary mt-3">
            Subscribe to receive updates on new arrivals, exclusive deals and special offers.
          </p>

          <form action="" className="row justify-content-center mt-4 g-2">
            <div className="col-12 col-md-6">
              <input type="email" className="form-control" placeholder='Enter your email' required />
            </div>

            <div className="col-auto">
              <button className="btn btn-success px-4">Subscribe</button>
            </div>
          </form>
        </div>
      </div>




    </>
  )
}
