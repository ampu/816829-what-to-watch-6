import React from 'react';
import {Router} from 'react-router-dom';

import {render} from '@testing-library/react';

import {SmallMovieCard} from './small-movie-card';
import {createMemoryHistory} from 'history';

describe(`SmallMovieCard component`, () => {
  it(`Should render according to the snapshot`, () => {
    const movie = {
      id: `fakeId`,
      preview: `fakePreview`,
      videoPreview: `fakeVideoPreview`,
    };
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <SmallMovieCard movie={movie}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });
});
