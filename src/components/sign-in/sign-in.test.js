import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render, screen} from '@testing-library/react';

import OperationStatus from '../../constants/operation-status';

import {SignIn} from './sign-in';

describe(`SignIn component`, () => {

  const onSubmit = () => Promise.resolve();

  it(`Should redirect when logged in`, () => {
    render((
      <Router history={createMemoryHistory()}>
        <SignIn onSubmit={onSubmit} loginStatus={OperationStatus.RESOLVED}/>
      </Router>
    ));
    expect(() => screen.getByPlaceholderText(`Email address`)).toThrowError(/Unable to find an element/);
    expect(() => screen.getByPlaceholderText(`Password`)).toThrowError(/Unable to find an element/);
  });
});
