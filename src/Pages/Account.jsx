import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Account() {


  let user = JSON.parse(localStorage.getItem("user"))
  let navigate = useNavigate()

  if (!user) {
    return <h2>No User Found!</h2>
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn")
    navigate("/Login")

  }
  return (
    <>
      <div className="container d-flex justify-content-center mt-5">

        <div className="card shadow p-4" style={{ width: "500px" }}>

          <div className="text-center mb-3">
            <div className="bg-dark text-white rounded-circle d-inline-flex justify-content-center align-items-center" style={{ width: "80px", height: "80px", fontSize: "30px", fontWeight: "bold" }}>
              {user.name[0].toUpperCase()}
            </div>
          </div>

          <h2 className="text-center mb-4">
            👤 My Account
          </h2>

          <div className="mb-3">
            <h6 className="text-secondary">Name</h6>
            <p className="fw-bold">{user.name}</p>
          </div>

          <div className="mb-3">
            <h6 className="text-secondary">Email</h6>
            <p className="fw-bold">{user.email}</p>
          </div>

          <div className="mb-3">
            <h6 className="text-secondary">Mobile</h6>
            <p className="fw-bold">{user.mobile}</p>
          </div>

          <button className="btn btn-outline-danger w-100 mt-3" onClick={handleLogout}>
            Logout
          </button>

        </div>

      </div>
    </>
  )
}
