import React from 'react';
import './Product.css';

const Product = (props) => {

    const {img,name,seller,price,stock}=props.product;
   
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h3>{name}</h3>
            <p><small>by:{seller}</small></p>
            <br />
            <p>Price:${price}</p>
            <br />
            <p><small>Only {stock} left in-Order soon</small></p>
            <button className='btn'
            onClick={()=>props.handleAddProduct(props.product)}>
                <i class="fa-solid fa-cart-plus"></i>
                 add to cart
            </button>
            </div>
          
        </div>
    );
};

export default Product;