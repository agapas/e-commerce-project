import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-item'>Product</div>
      <div className='header-item'>Description</div>
      <div className='header-item'>Quantity</div>
      <div className='header-item'>Price</div>
      <div className='header-item'>Remove</div>
    </div>
    {cartItems.map(cartItem => cartItem.name)}
    <div className='total'>Total: €{total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
