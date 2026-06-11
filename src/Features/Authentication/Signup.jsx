import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  let navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate("/Home")
    }

  }, [])

  let [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    mobile: ""
  })

  let [errors, setErrors] = useState({
    nameError: "",
    passwordError: "",
    emailError: "",
    mobileError: ""
  })

  function handleChange(e) {
    let { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  let namePattern = /^[A-Za-z]{3,20}$/
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  let mobilePattern = /^[6-9]\d{9}$/

  function handleSubmit(e) {
    e.preventDefault()

    let { name, password, email, mobile } = formData

    let newErrors = {
      nameError: "",
      passwordError: "",
      emailError: "",
      mobileError: ""
    }

    let isvalid = true;

    if (!namePattern.test(name)) {
      newErrors.nameError = "please enter valid username"
      isvalid = false;
    }

    if (!passwordPattern.test(password)) {
      newErrors.passwordError = "please enter valid password"
      isvalid = false;
    }

    if (!emailPattern.test(email)) {
      newErrors.emailError = "please enter valid email"
      isvalid = false;
    }

    if (!mobilePattern.test(mobile)) {
      newErrors.mobileError = "please enter valid mobile"
      isvalid = false;
    }

    setErrors(newErrors)



    if (isvalid) {
      console.log("valid form")
      localStorage.setItem("user", JSON.stringify(formData))
      localStorage.setItem("isLoggedIn", "true")
      alert("successfully submitted")
      navigate("/Home")



    }

  }

  return (
    <>
      <div className='container d-flex justify-content-center mt-5'>
        <div className="card shadow p-4 w-100" style={{ maxWidth: "600px" }}>
          <h2 className='text-center mb-4'>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="" className='form-label'>Username:</label>
              <input type="text" className='form-control' name='name' value={formData.name} onChange={handleChange} />
              <p className="text-danger">{errors.nameError}</p>
            </div>

            <div className='mb-3'>
              <label htmlFor="">Password:</label>
              <input type="password" className='form-control' name='password' value={formData.password} onChange={handleChange} />
              <p className="text-danger">{errors.passwordError}</p>
            </div>

            <div className='mb-3'>
              <label htmlFor="">Email:</label>
              <input type="text" className='form-control' name='email' value={formData.email} onChange={handleChange} />
              <p className="text-danger">{errors.emailError}</p>
            </div>

            <div className='mb-3'>
              <label htmlFor="">Mobile:</label>
              <input type="tel" className='form-control' name='mobile' value={formData.mobile} onChange={handleChange} />
              <p className="text-danger">{errors.mobileError}</p>
            </div>

            <button type='submit' className="btn btn-success mt-3 w-100">Create Account</button>

            <div className="text-center mt-3">
              <p className='mb-2'>Already have an Account?</p>
              <button type='button' className="btn btn-outline-primary" onClick={() => navigate("/Login")}>Login</button>
            </div>

          </form>
        </div>




      </div>




    </>
  )
}
