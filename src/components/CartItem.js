import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
function CartItem(props) {
  return (
    <>
      <tr>
        <td className="border border-gray-400 px-4 py-2">
          <FontAwesomeIcon 
            icon={faTimes} 
            className="mr-2"
            onClick={() => props.removeCartItem(props.item.id)}
          />
        </td>
        <td className="border border-gray-400 px-4 py-2">
          {props.item.name}
        </td>
        <td className="border border-gray-400 px-4 py-2">
          1
        </td>
        <td className="border border-gray-400 px-4 py-2">
          {props.item.price}
        </td>
      </tr>
    </>
  )
}

export default CartItem
