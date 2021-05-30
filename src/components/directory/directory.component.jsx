import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import SECTIONS_DATA from '../../data/sections.data.js';

class Directory extends React.Component {
  static displayName = 'Directory';
  state = { sections: SECTIONS_DATA };

  render() {
    const { sections } = this.state;
    
    return <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>;
  }
}

export default Directory;
