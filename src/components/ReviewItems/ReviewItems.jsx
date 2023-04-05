import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItems.css'

const ReviewItems = ({ products, handleRemoveFromCart }) => {
    const { id, img, price, name, quantity } = products;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review_Details'>
                <p className='product_title'>{name}</p>
                <p>Price : <span className='orange-text'>${price}</span></p>
                <p>Order Quantity : <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={()=> handleRemoveFromCart(id)} className='btn-delete'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItems;