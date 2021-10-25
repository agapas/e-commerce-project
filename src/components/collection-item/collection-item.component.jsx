import React from 'react';
import { connect } from 'react-redux';

import { BASE_URL } from '../../';
import { CustomButton } from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageDirectory, price } = item;
  return (
  <div className='collection-item'>
    <div
      className='image'
      style={{ backgroundImage: `url(${BASE_URL}${imageDirectory}/1.jpg)` }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>€{price}</span>
      <CustomButton onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>
  </div>
);
  };

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
