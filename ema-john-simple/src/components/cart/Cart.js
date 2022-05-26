import React from 'react';

const Cart = (props) => {
    const cart=props.cart;

    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price;
        
    }
    let shipping=0;
    if(total>35){
        shipping=0;
    }
   else if(total>15){
        shipping=4;
    }
    else if(total>0){
        shipping=13;
    }
    const tax=(total/10);
   

    const formatNumber=num=>{
        const precision=num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered:{cart.length}</p>
            <p>Product Price:{formatNumber(total)}</p>
            <p><small>Shipping Cost:{formatNumber(shipping)}</small></p>
            <p><small>Tax +VAT:{formatNumber(tax)}</small></p>
            <h5>Total Price:{formatNumber(total+shipping+tax)}</h5>
           
        </div>
    );
};

export default Cart;