import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
       totalPrice += product.price
       totalShipping += product.shipping
    }
    let tax = totalPrice*7/100
    let grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>order summary</h4>
            <p>Selected item: {cart.length}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total shipping: ${totalShipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;