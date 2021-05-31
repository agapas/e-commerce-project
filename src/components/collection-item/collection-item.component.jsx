import React from 'react';

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
    </div>
  </div>
);
