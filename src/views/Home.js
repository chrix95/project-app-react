import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'

import axios from 'axios'

function Home () {
  const url = `https://5ed45e9bfffad10016056ce0.mockapi.io/api/v2/posts?page=1&limit=10`
  const [products, setProducts] = useState({ loading: false, data: null, error: false })

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false
    })
    axios.get(url)
    .then((res) => {
      setProducts({
        loading: false,
        data: res.data,
        error: false
      })
    })
    .catch(() => {
      setProducts({
        loading: false,
        data: null,
        error: true
      })
    })
  }, [url])

  let content = null

  if(products.error) {
    content = <p>Error fetching products, please reload page</p>
  }

  if(products.loading) {
    content = <Loader />
  }

  if(products.data) {
    content = 
      products.data.map((product) => 
        <ProductCard key={product.id} product={product}/>
      )
  }
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
      {content}
    </div>
  )
}

export default Home
