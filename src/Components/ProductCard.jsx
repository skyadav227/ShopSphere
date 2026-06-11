import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ item }) {
  return (
    <>
      <div className=' col-12 col-md-6 col-lg-4 col-xl-3 mb-4'>
        <Link className='nav-link text-dark' to={`/Products/${item.id}`}>
          <div className='p-card h-100' style={{ textAlign: "center", margin: "10px", padding: "15px", border: "2px solid lightgray", borderRadius: "10px" }}>
            <img className='img-fluid' src={item.thumbnail} alt={item.title} style={{ height: "180px", objectFit: "contain" }} />
            <h5 className='fw-bold mt-3'>{item.title}</h5>
            <p className='text-secondary' style={{ minHeight: "70px" }}>{item.description.slice(0, 60)}...</p>
            <p>{item.rating}⭐</p>
            <h5 className='fw-bold text-success'>${item.price}</h5>
            <button className='btn btn-outline-dark mt-2'>View Product</button>
          </div>
        </Link>
      </div>
    </>
  )
}
