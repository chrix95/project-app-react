import React from 'react'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const emptyCart = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center'
}

const emptyCartText = {
  fontSize: '25px',
  fontWeight: 'bold'
}
function Cart (props) {
  return (
    <div>
      { 
        props.cart.length === 0 ?
          <div style={emptyCart}>
            <FontAwesomeIcon 
              icon={faShoppingCart} 
              className="mr-2"
              style={{ fontSize: '100px' }}
            />
            <p style={emptyCartText}>Cart is empty</p>
            <Link to="/" className="bg-blue-500 text-white p-1 w-full m-5">
              <button>Return Home</button>
            </Link>
          </div>
        :
        <>
        <p style={emptyCartText}>Cart</p>
        <table className="border-collapse border-2 border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2 text-gray-800"></th>
              <th className="border border-gray-400 px-4 py-2 text-gray-800">Item</th>
              <th className="border border-gray-400 px-4 py-2 text-gray-800">Qty</th>
              <th className="border border-gray-400 px-4 py-2 text-gray-800">Price</th>
            </tr>
          </thead>
          <tbody>
            { props.cart.map(item => (
              <CartItem item={item} key={item.id} removeCartItem={props.removeCartItem}/>
            ))}
            <tr>
              <td colSpan="3" className="border border-gray-400 px-4 py-2">
                Total
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {props.total}
              </td>
            </tr>
          </tbody>
        </table>
        </>
      }
    </div>
  )
}

export default Cart
