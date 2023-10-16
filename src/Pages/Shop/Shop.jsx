import React from 'react'
import { Products } from '../../Products'
import { Product } from './Product'
import "./Shop.css"

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Modern Shop</h1>
        </div>
        <div className='products'>
            {
                Products.map(product =>
                <Product product={product} key={product.id}/>   
                )
            }
        </div>
    </div>
  )
}
