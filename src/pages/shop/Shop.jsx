import React from 'react';
import { PRODUCTS } from "../../products";
import Product from './Product'; // import the Product component
import './shop.css'

const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>XiaoMi Shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => // The data is inclusive of id, productName, price, productImage which we declared in the Product Component
            <Product data={product}/>)}
        </div>
    </div>
  )
}

export default Shop