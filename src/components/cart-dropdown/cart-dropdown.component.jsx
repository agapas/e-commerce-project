import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CustomButton } from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length
        ? cartItems.map((cartItem, index) => {
            const className = index === 0 ? '' : 'with-offset';
            return (
              <CartItem key={cartItem.id} item={cartItem} className={className} />
            );
          })
        : (<div className='empty-cart'>Your cart is empty</div>)
      }
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
