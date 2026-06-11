import React from 'react'
import { Suspense, lazy } from 'react'
import ProductsList from '../Features/Productslist/ProductsList'
import Loading from '../Loader/Loading'
import { useParams } from 'react-router-dom'

export default function Products() {




  const ProductsListLazy = React.lazy(() => import('../Features/Productslist/ProductsList'))
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProductsListLazy />
      </Suspense>
    </>
  )
}
