import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageDirectory, name, price, quantity }, className }) => (
  <div className={`cart-item ${className}`}>
    <div
      className='image'
      style={{ backgroundImage: `url(${imageDirectory}/1.jpg)` }}
    />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x €{price}</span>
    </div>
  </div>
);

export default CartItem;
