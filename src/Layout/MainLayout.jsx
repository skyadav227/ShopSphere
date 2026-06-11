import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AppRouter from '../router-dom/AppRouter'
import Loading from '../Loader/Loading'
import { useLocation } from 'react-router-dom'

export default function MainLayout() {

  let location = useLocation();
  let hidecomp = ["/", "/Login"]
  let compview = hidecomp.includes(location.pathname)
  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        {!compview && <Header />}
        <main className='flex-grow-1'>
          <AppRouter />
        </main>

        {!compview && <Footer />}
      </div>

    </>
  )
}
