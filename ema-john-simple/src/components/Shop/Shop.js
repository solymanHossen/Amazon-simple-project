import React, { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../cart/Cart'
let data = require("../../fakeData/products");

const Shop = () => {
    const first10=data.slice(0,10);
  const [products,setProduct]= useState(first10);
  const [cart,setCart]=useState([])

  const handleAddProduct=(product)=>{
     const newCart=[...cart,product];
     setCart(newCart);
  }

    
    return (
        <div className='shop-container' >
            <div className="product-container">
        
                {
                    products.map(product=><Product
                         handleAddProduct={handleAddProduct}
                        product={product}
                          ></Product>)
                }
       
            </div>
            <div className="cart-container">
             <Cart cart={cart}></Cart>
            </div>
         
        </div>
    );
};

export default Shop;