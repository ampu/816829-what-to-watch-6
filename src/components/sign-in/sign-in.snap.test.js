import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render} from '@testing-library/react';

import {SignIn} from './sign-in';
import OperationStatus from '../../constants/operation-status';

describe(`SignIn component`, () => {

  const onSubmit = () => Promise.resolve();

  it(`Should render according to the snapshot while authorization status is unset or rejected`, () => {
    [
      undefined,
      OperationStatus.UNSET,
      OperationStatus.REJECTED,
    ].forEach((loginStatus) => {
      const {container} = render((
        <Router history={createMemoryHistory()}>
          <SignIn onSubmit={onSubmit} loginStatus={loginStatus}/>
        </Router>
      ));
      expect(container).toMatchSnapshot();
    });
  });

  it(`Should render according to the snapshot while authorization status is pending`, () => {
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <SignIn onSubmit={onSubmit} loginStatus={OperationStatus.PENDING}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });
});
