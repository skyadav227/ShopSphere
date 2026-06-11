import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ADDTOCART, REMOVEFROMCART } from '../../redux/cart/CartSlice'


export default function SingleProduct() {

  let dispatch = useDispatch()

  let { id } = useParams()
  let [singleProd, setSingleProd] = useState({})

  useEffect(() => {
    async function singleP() {
      let { data } = await axios.get(`https://dummyjson.com/products/${id}`)
      setSingleProd(data)
    }
    singleP()
  }, [id])

  return (
    <>
      <div className="container m-4">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
          <div className="col d-flex align-items-center justify-content-center">
            <img className='img-fluid' src={singleProd.thumbnail} alt={singleProd.title} />
          </div>

          <div className="col py-3">
            <h1 className='fw-bold'>{singleProd.title}</h1>
            <p className='mt-3'>Rating: ⭐{singleProd.rating}</p>
            <h2 className='text-success fw-bold'>${singleProd.price}</h2>
            <p>Category: {singleProd.category}</p>
            <p>Stock: {singleProd.stock}</p>
            <p className='text-secondary'>{singleProd.description}</p>
            <button className='btn btn-dark m-2' onClick={() => dispatch(ADDTOCART({ ...singleProd, quantity: 1 }))}>Add to cart</button>
            <button className='btn btn-outline-danger fw-bold m-2' onClick={() => dispatch(REMOVEFROMCART(singleProd))}>Remove from cart</button>
          </div>
        </div>

      </div>
    </>
  )
}
