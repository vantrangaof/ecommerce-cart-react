import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const Product = ({ data }) => {
    const { id, productName, price, productImage } = data
    const { addToCart, cartItems } = useContext(ShopContext) // to get the functions from the ShopContext component

    const cartItemAmount = cartItems[id] // show the value of the exact item

  return (
    <div key={id} className="product">
        <img src={`http://localhost:3000${productImage}`} alt={productName}/>
            <div className='description'>
                <p>{productName}</p>
                <p>${price}</p>
            </div>
            <button className="addToCartBtn" onClick={() => addToCart(id)}>
              Add To Cart
              {cartItemAmount > 0 && // if the item's value exists, show the amount next to the 'add to cart' string
              <>
                ({cartItemAmount})
              </>}
            </button>
    </div>
  )
}

export default Product