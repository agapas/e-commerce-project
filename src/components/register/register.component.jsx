import React from 'react';

import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './register.styles.scss';

const defaultState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export class Register extends React.Component {
  static displayName = 'Register';
  state = defaultState;

  onSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState(defaultState);

    } catch(error) {
      console.error(error);
    }
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='register'>
        <h2 className='title'>I do not have an account</h2>
        <div className='info'>Register with your email and password</div>
        <form className='register-form' onSubmit={this.onSubmit}>
          <FormInput
            name='displayName'
            type='text'
            onChange={this.onChange}
            value={displayName}
            label='Display Name'
            required
          />
          <FormInput
            name='email'
            type='email'
            autoComplete='username'
            onChange={this.onChange}
            value={email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            autoComplete='new-password'
            value={password}
            onChange={this.onChange}
            label='Password'
            required
          />
          <FormInput
            name='confirmPassword'
            type='password'
            autoComplete='new-password'
            value={confirmPassword}
            onChange={this.onChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>Create Account</CustomButton>
        </form>
      </div>
    );
  }
}
