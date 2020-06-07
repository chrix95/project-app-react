import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartContainer(props) {
  return (
    <div className="cartContainer">
      <Link to="/cart">
        <FontAwesomeIcon 
          icon={faShoppingCart} 
          className="mr-2"
        />
        <span>{props.count}</span>
      </Link>
    </div> 
  )
}

export default CartContainer