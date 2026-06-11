import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import './ProductsList.css'
import ProductCard from "../../Components/ProductCard"

export default function ProductsList() {

  let [searchParams] = useSearchParams()
  let urlCategory = searchParams.get("category")



  let [categoryList, setCategoryList] = useState([])
  let [products, setProducts] = useState([])
  let [category, setCategory] = useState(urlCategory || "")
  let [search, setSearch] = useState("")
  let [page, setPage] = useState(1)
  let [btns, setBtns] = useState(0)

  useEffect(() => {
    if (urlCategory) {
      setCategory(urlCategory)
      setPage(1)
    }
  }, [urlCategory])

  let perPage = 10

  useEffect(() => {
    async function categoryData() {
      let { data } = await axios.get("https://dummyjson.com/products/category-list")
      setCategoryList(data)
    }
    categoryData()
  }, [])

  useEffect(() => {
    async function threeApi() {
      let api;
      if (category) {
        api = `https://dummyjson.com/products/category/${category}`
      }
      else if (search) {
        api = `https://dummyjson.com/products/search?q=${search}`
      }
      else {
        api = `https://dummyjson.com/products`
      }

      let { data } = await axios.get(api)

      let allProducts = data.products || []
      setBtns(allProducts.length)

      let pagination = allProducts.slice((page - 1) * perPage, page * perPage)

      setProducts(pagination)


    }
    threeApi()
  }, [category, search, page])

  let viewButtons = Math.ceil(btns / perPage)

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center g-3">
          <div className="col-12 col-md-6">
            <input type="text" value={search} className='form-control shadow-sm' placeholder='Search products...'
              onChange={(e) => {
                setSearch(e.target.value)
                setCategory("")
                setPage(1)
              }}
            />
          </div>

          <div className="col-12 col-md-4">
            <select name="" id="" value={category} className='form-control shadow-sm'
              onChange={(e) => {
                setCategory(e.target.value)
                setSearch("")
                setPage(1)
              }}
            >
              <option value="">ALL CATEGORIES</option>
              {
                categoryList.map((item, i) => (
                  <option key={i} value={item}>{item}</option>
                ))
              }
            </select>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className="row">
          {
            products.map((item, i) => (
              <ProductCard key={item.id} item={item} />
            ))
          }
        </div>


      </div>

      <div className='text-center'>
        {
          viewButtons > 0 &&
          Array.from({ length: viewButtons }, (_, i) => i + 1).map((btn, i) => (
            <button key={i} className={`btn m-2 ${page === btn ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setPage(btn)}>{btn}</button>
          ))
        }

      </div>
    </>
  )
}
