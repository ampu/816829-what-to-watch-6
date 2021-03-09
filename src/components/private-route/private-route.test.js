import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render} from '@testing-library/react';

import OperationStatus from '../../constants/operation-status';

import {PrivateRoute} from './private-route';

describe(`PrivateRoute component`, () => {
  it(`Should redirect to '/login' url when not logged in`, () => {
    [
      undefined,
      OperationStatus.UNSET,
      OperationStatus.REJECTED,
    ].forEach((loginStatus) => {
      const history = createMemoryHistory();
      const doRender = jest.fn();

      render((
        <Router history={history}>
          <PrivateRoute loginStatus={loginStatus} path="/" render={doRender}/>
        </Router>
      ));

      expect(history.location.pathname).toBe(`/login`);
      expect(doRender).not.toBeCalled();
    });
  });

  it(`Should render once when logged in and path matches`, () => {
    const history = createMemoryHistory();
    const doRender = jest.fn();

    render((
      <Router history={history}>
        <PrivateRoute loginStatus={OperationStatus.RESOLVED} path="/" render={doRender}/>
      </Router>
    ));

    expect(history.location.pathname).toBe(`/`);
    expect(doRender).toBeCalledTimes(1);
  });

  it(`Should not render when logged in and path doesn't match`, () => {
    const history = createMemoryHistory();
    history.push(`/some-route`);

    const doRender = jest.fn();

    render((
      <Router history={history}>
        <PrivateRoute loginStatus={OperationStatus.RESOLVED} path="/" render={doRender}/>
      </Router>
    ));

    expect(history.location.pathname).toBe(`/some-route`);
    expect(doRender).not.toBeCalled();
  });
});
