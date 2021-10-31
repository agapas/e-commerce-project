import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='brand-container' to='/'>
      <Logo className='logo' />
      <div className='name'>Camera Shop</div>
    </Link>
    <div className='menu-options'>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/'>Contact</Link>
      {
        currentUser
          ? <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
          : <Link className='option' to='/login'>Sign In</Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
