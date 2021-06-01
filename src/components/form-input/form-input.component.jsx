import React from 'react';

import './form-input.styles.scss';

export const FormInput = ({ onChange, label, ...otherProps }) => {
  const labelClass = `form-input-label ${otherProps.value.length ? 'shrink' : ''}`;
  return (
    <div className='group'>
      <input className='form-input' onChange={onChange} {...otherProps} />
      {label
        ? <label className={labelClass}>{label}</label>
        : null
      }
    </div>
  )
};
