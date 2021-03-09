import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render} from '@testing-library/react';

import {UserBlock} from './user-block';
import OperationStatus from '../../constants/operation-status';

describe(`UserBlock component`, () => {
  it(`Should render according to the snapshot while authorization status is unknown`, () => {
    [
      undefined,
      OperationStatus.UNSET,
      OperationStatus.PENDING,
    ].forEach((loginStatus) => {
      const {container} = render(<UserBlock loginStatus={loginStatus}/>);
      expect(container).toMatchSnapshot();
    });
  });

  it(`Should render according to the snapshot while not logged in`, () => {
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <UserBlock loginStatus={OperationStatus.REJECTED}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot while logged in`, () => {
    const user = {
      avatar: `fakeAvatar`,
    };
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <UserBlock loginStatus={OperationStatus.RESOLVED} user={user}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });
});
