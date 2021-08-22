import React from 'react';

import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './log-in.styles.scss';

export class LogIn extends React.Component {
  static displayName = 'LogIn';
  state = {
    email: '',
    password: ''
  };

  onSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
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
            autoComplete='username'
            onChange={this.onChange}
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            autoComplete='current-password'
            value={this.state.password}
            onChange={this.onChange}
            label='Password'
            required
          />
          <div className='buttons-container'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
