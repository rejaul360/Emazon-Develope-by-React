import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart =  useLoaderData()

    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    // console.log(cart);
    return (
        <div className='shop-container'>
            <div className="review_container">
              {
                cart.map(products => <ReviewItems
                products = {products}
                key={products.id}
                handleRemoveFromCart = {handleRemoveFromCart}
                ></ReviewItems>)
              }
            </div>
            <div className="cart-container">
                <Cart cart={cart }></Cart>
            </div>
        </div>
    );
};

export default Orders;