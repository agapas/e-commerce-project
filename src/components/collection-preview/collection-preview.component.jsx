import React from 'react';

import './collection-preview.styles.scss';

import { CollectionItem } from '../collection-item/collection-item.component';

export const CollectionPreview = ({ title, items }) => (
  <div className='collection'>
    <div className='title'>{title}</div>
    <div className='preview'>
      {items.map(({ id, ...otherItemProps}) => (
        <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
);
