import React from 'react';

import './collection-preview.styles.scss';

import { CollectionItem } from '../collection-item/collection-item.component';

export const CollectionPreview = ({ title, items }) => (
  <div className='collection'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items.map(({ id, ...otherItemProps}) => (
        <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
);
