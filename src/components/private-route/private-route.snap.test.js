import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render} from '@testing-library/react';

import OperationStatus from '../../constants/operation-status';

import {PrivateRoute} from './private-route';

describe(`PrivateRoute component`, () => {
  it(`Should render 'SpinnerLoading' when login status is pending`, () => {
    const history = createMemoryHistory();
    const doRender = jest.fn();

    const {container} = render((
      <Router history={history}>
        <PrivateRoute loginStatus={OperationStatus.PENDING} path="/" render={doRender}/>
      </Router>
    ));

    expect(container).toMatchSnapshot();
  });
});
