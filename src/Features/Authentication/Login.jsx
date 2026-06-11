import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  let savedUser = JSON.parse(localStorage.getItem("user"))
  let navigate = useNavigate()

  let [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  let [errors, setErrors] = useState({
    emailError: "",
    passwordError: ""
  })


  function handleChange(e) {
    let { name, value } = e.target
    setLoginData(prev => ({ ...prev, [name]: value }))
  }

  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  function handleSubmit(e) {

    e.preventDefault()

    let { email, password } = loginData

    let newErrors = {
      emailError: "",
      passwordError: ""
    }

    let isValid = true

    if (!emailPattern.test(email)) {
      newErrors.emailError = "Please enter a valid Email"
      isValid = false
    }

    if (!passwordPattern.test(password)) {
      newErrors.passwordError = "Please enter a valid Password"
      isValid = false
    }

    setErrors(newErrors)

    if (isValid) {
      if (!savedUser) {
        alert("User not Registered.Signup!")
        navigate("/")
        return
      }

      if (loginData.email === savedUser.email && loginData.password === savedUser.password) {

        localStorage.setItem("isLoggedIn", "true")
        alert("Login Successful")
        navigate("/Home")

      }
      else {
        alert("Incorrect details")
      }
    }


  }



  return (
    <>
      <div className='container d-flex justify-content-center mt-5'>
        <div className="card shadow p-4 w-100" style={{ maxWidth: "600px" }}>
          <h2 className='text-center mb-4'>Login</h2>
          <form action="" onSubmit={handleSubmit}>

            <div className='mb-3'>
              <label htmlFor="">Email:</label>
              <input type="text" name='email' value={loginData.email} className='form-control' onChange={handleChange} />
              <p className='text-danger'>{errors.emailError}</p>
            </div>

            <div className='mb-3'>
              <label htmlFor="">Password:</label>
              <input type="password" name='password' value={loginData.password} className='form-control' onChange={handleChange} />
              <p className='text-danger'>{errors.passwordError}</p>
            </div>

            <button className='btn btn-success mt-3 w-100' type='submit'>Login</button>

            <div className="text-center mt-3">
              <p className='mb-2'>Don't have an Account?</p>
              <button type='button' className="btn btn-outline-primary" onClick={() => navigate("/")}>Create Account</button>
            </div>

          </form>
        </div>

      </div>


    </>
  )
}
