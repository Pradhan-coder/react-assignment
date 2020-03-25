import React from 'react';
import '../Cart/Cart.css';



const Cart = (props) => {
    const  cart = props.cart;
    // console.log(cart);

   let total = 0;
   for (let i = 0; i< cart.length; i++){
    const friend  = cart[i];
    total = total + parseFloat(friend.salary);

   }
    return (
        <div className="employee-info">
            <h2>Employee's Paid details:</h2>
            <h3>Annual Paid Amount: {cart.length}</h3>
            <h4>Total: {total} US$</h4>
            <button className="review">Payment review</button>
           
        </div>
    );
};

export default Cart;