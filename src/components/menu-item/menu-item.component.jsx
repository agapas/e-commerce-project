import React from 'react';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, linkUrl, history, match }) => (
  <div
    className='menu-item'
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{ backgroundImage: `url(${BASE_URL}/${imageUrl})` }}
    ></div>
    <div className='content'>
      <div className='title'>{title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
