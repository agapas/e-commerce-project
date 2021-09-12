import React from 'react';

import { CustomButton } from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

export const CollectionItem = ({ id, name, imageDirectory, price}) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{backgroundImage: `url(${imageDirectory}/1.jpg)`}}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>€{price}</span>
      <CustomButton>Add to cart</CustomButton>
    </div>
  </div>
);
