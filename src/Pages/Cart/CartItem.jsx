import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context'

import "./cart.css"

export const CartItem = (props) => {
    const {id, productName, productImage, price} = props.data;
    const { cartItems, addToCart, removeFromCart, updateProductAmount} = useContext(ShopContext)
  return (
    <div className='cartItem'>
        <img src={productImage} alt={productName} />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className='countHandler'>
                <button onClick={()=>removeFromCart(id)}> - </button>
                <input type="number" name="" id="" value={cartItems[id]} onChange={e => updateProductAmount(Number(e.target.value), id)}/>
                <button onClick={()=>addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
