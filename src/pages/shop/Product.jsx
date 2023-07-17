import React from 'react'

const Product = ({ data }) => {
    const { id, productName, price, productImage } = data
  return (
    <div className="product">
        <img scr={productImage} alt={productName}/>
            <div className='description'>
                <p>{productName}</p>
                <p>${price}</p>
            </div>
        </div>
  )
}

export default Product