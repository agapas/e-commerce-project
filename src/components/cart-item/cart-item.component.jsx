import React from 'react';

import { BASE_URL } from '../../';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageDirectory, name, price, quantity }, className }) => (
  <div className={`cart-item ${className}`}>
    <img className='image' src={`${BASE_URL}${imageDirectory}/1.jpg`} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x €{price}</span>
    </div>
  </div>
);

export default CartItem;
