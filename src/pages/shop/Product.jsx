import React from 'react'

const Product = ({ data }) => {
    const { id, productName, price, productImage } = data
  return (
    <div key={id} className="product">
        <img src={productImage} alt={productName}/>
            <div className='description'>
                <p>{productName}</p>
                <p>${price}</p>
            </div>
            <button className="addToCartBtn">Add To Cart</button>
    </div>
  )
}

export default Product