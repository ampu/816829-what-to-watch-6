import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render} from '@testing-library/react';

import GenresListItem from './genres-list-item';

describe(`GenresListItem component`, () => {
  it(`Should render according to the snapshot while inactive`, () => {
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <GenresListItem onGenreChange={jest.fn()} genre="fakeGenre"/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot while active`, () => {
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <GenresListItem onGenreChange={jest.fn()} genre="fakeGenre" isActive/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });
});
