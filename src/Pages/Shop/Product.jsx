import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = ({product}) => {
    const { addToCart , cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[product.id]
  return (
    <div className='product'>   
        <img src={product.productImage} alt={product.productImage} />
        <h2 className='description'>{product.productName}</h2>
        <p>${product.price}</p>
        <button className='addToCartBttn' onClick={() => addToCart(product.id)}>Add to Cart {cartItemAmount > 0 ? `(${cartItemAmount})` : ''}</button>
    </div>
  )
}
