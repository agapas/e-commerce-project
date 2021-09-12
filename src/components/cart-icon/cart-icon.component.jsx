import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' title='My Shopping cart' />
    <div className='items-count'>0</div>
  </div>
);

export default CartIcon;
