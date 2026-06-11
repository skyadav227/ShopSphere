import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDTOCART, CLEARCART, DECRESER, REMOVEFROMCART } from '../redux/cart/CartSlice'
import '../Pages/Cart.css'

export default function Cart() {


  let [showPopup, setShowPopup] = useState(false)

  let data = useSelector(state => state.cart)
  let dispatch = useDispatch()


  const isEmpty = data.length === 0

  let totalPrice = data.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  let totalItems = data.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  function handleCheckout() {
    dispatch(CLEARCART())
    setShowPopup(true)



    setTimeout(() => {
      setShowPopup(false)
    }, 3000);


  }

  return (
    <>
      <div className='container-fluid'>

        {isEmpty ? (
          <div className="text-center mt-5">
            <h1>🛒 Your Cart is Empty.</h1>
          </div>
        ) : (
          <>
            <h1 className='text-center my-5'>🛒 Shopping Cart</h1>

            {data.map((item, i) => (
              <div key={i} className='card mb-4 rounded shadow'>
                <div className='row row-cols-1 row-cols-md-2'>

                  <div className='col d-flex justify-content-center align-items-center'>
                    <img className='img-fluid' src={item.thumbnail} alt={item.title} style={{ maxHeight: "250px" }} />
                  </div>

                  <div className='col p-5'>
                    <h3 className='fw-bold'>{item.title}</h3>

                    <p className='fw-bold'>Price: <span className='text-danger'>${(item.price * item.quantity).toFixed(2)}</span></p>

                    <button className='btn btn-primary' onClick={() => dispatch(DECRESER(item))}>-</button>

                    <p className='d-inline mx-3 fw-bold'>{item.quantity}</p>

                    <button className='btn btn-primary' onClick={() => dispatch(ADDTOCART(item))}>+</button>

                    <button className="d-block btn btn-outline-danger my-3" onClick={() => dispatch(REMOVEFROMCART(item))}>Remove</button>
                  </div>
                </div>
              </div>
            ))}

            <div className='card shadow p-4 text-end mb-5'>
              <p>Items: {totalItems}</p>
              <h2>Total: ${totalPrice.toFixed(2)}</h2>

              <button className="btn btn-success btn-lg" onClick={handleCheckout}>Checkout</button>
            </div>
          </>
        )}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>🎉 Order Confirmed!</h2>
            <p>Thanks for shopping with ShopSphere</p>
            <button className="btn btn-dark" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}