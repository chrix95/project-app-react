import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'

function Product () {
  const { id } = useParams()
  const url = `https://5ed45e9bfffad10016056ce0.mockapi.io/api/v2/posts/${id}`
  const [product, setProduct] = useState({ loading: false, data: null, error: false })

  let content = null
  
  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false
    })
    axios.get(url)
    .then((res) => {
      setProduct({
        loading: false,
        data: res.data,
        error: false
      })
    })
    .catch(() => {
      setProduct({
        loading: false,
        data: null,
        error: true
      })
    });
  }, [url])

  if(product.error) {
    content = 
      <p>
        There was an error please refresh or try again
      </p>
  }

  if(product.loading) {
    content = <Loader></Loader>
  }

  if (product.data) {
    content = 
    <div>
      <h1 className="text-2xl font-bold mb-3">
        {product.data.name}
      </h1>
      <div>
        <img 
          src={product.data.images}
          alt={product.data.name}
          />
      </div>
      <div className="font-bold text-xl mb-3">
        $ {product.data.price}
      </div>
      <div>
        {product.data.description}
      </div>
    </div>
  }
  return (
    <div>
      {content}
    </div>
  )
}

export default Product
