import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render} from '@testing-library/react';

import {GenresList} from './genres-list';

describe(`GenresList component`, () => {
  it(`Should render according to the snapshot with no genres`, () => {
    const {container} = render(<GenresList onGenreChange={jest.fn()} genres={[]}/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with genres provided`, () => {
    const genres = [`Main`, `Auxiliary`];
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <GenresList onGenreChange={jest.fn()} genres={genres} activeGenre="Auxiliary"/>;
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });
});
