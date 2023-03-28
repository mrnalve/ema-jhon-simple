import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1;
       totalPrice += product.price * product.quantity
       totalShipping += product.shipping
       quantity += product.quantity
    }
    let tax = totalPrice*7/100
    let grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;