import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render} from '@testing-library/react';

import Footer from './footer';

describe(`Footer component`, () => {
  it(`Should render according to the snapshot`, () => {
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <Footer/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });
});
