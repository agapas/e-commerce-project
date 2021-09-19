import React from 'react';
import { connect } from 'react-redux';

import { CustomButton } from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem, index) => {
        const className = index === 0 ? '' : 'with-offset';
        return (
          <CartItem key={cartItem.id} item={cartItem} className={className} />
        );
      })}
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
