import React from 'react';

import { LogIn } from '../../components/log-in/log-in.component';
import { Register } from '../../components/register/register.component';

import './log-in-and-register.styles.scss';

export const LogInAndRegisterPage = () => (
  <div className='log-in-and-register'>
    <LogIn />
    <Register />
  </div>
);
