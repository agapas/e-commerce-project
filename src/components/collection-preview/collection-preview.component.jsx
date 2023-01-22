import React from 'react';
import { Link } from 'react-router-dom';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

export const CollectionPreview = ({ title, items, routePath, routeName }) => (
  <div className='collection'>
    <Link className='title' to={`${routePath}/${routeName}`}>{title}</Link>
    <div className='preview'>
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);
