import React from 'react';
import "./Cart.css";
const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products.</p>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'orange'}>Order summary: {cart.length}</h2>
            {cart.length > 2 ? <span>Buy more</span> : <span>Poor fellow</span> }
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}>
                        {tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button></p>)
            }
            {
                cart.length === 2 && <p>Bought two my man!</p>
            }
            {
                cart.length === 3 || <h3>Not 3 products</h3>
            }
        </div>
    );
};

export default Cart;