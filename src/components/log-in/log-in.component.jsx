import React from 'react';

import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';

import './log-in.styles.scss';

class LogIn extends React.Component {
  static displayName = 'LogIn';
  state = {
    email: '',
    password: ''
  };

  onSubmit = event => {
    event.prevent.default();

    this.setState({ email: '', password: '' });
  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='login'>
        <h2 className='title'>I already have an account</h2>
        <div className='info'>Sign in with your email and password</div>
        <form onSubmit={this.onSubmit}>
          <FormInput
            name='email'
            type='email'
            onChange={this.onChange}
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.onChange}
            label='Password'
            required
          />
          <CustomButton type='submit'>Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default LogIn;
