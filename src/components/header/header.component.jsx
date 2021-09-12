import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
  </div>
);

const mapStateToProps = state => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(Header);
