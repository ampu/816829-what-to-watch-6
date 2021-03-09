import React from 'react';
import {Router} from 'react-router-dom';
import range from 'lodash.range';

import {render} from '@testing-library/react';

import {MoviesList} from './movies-list';
import {createMemoryHistory} from 'history';

const MOVIES_PAGE_LIMIT = 8;
const RANGE_OFFSET = 1;

describe(`MoviesList component`, () => {
  it(`Should render according to the snapshot without any movies in list`, () => {
    const {container} = render(<MoviesList movies={[]}/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with movies count equals to ${MOVIES_PAGE_LIMIT} or less`, () => {
    const movies = range(RANGE_OFFSET, RANGE_OFFSET + MOVIES_PAGE_LIMIT).map((id) => ({
      id: id.toString(),
      preview: `fakePreview`,
      videoPreview: `fakeVideoPreview`,
    }));
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <MoviesList movies={movies}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with movies count greater than ${MOVIES_PAGE_LIMIT}`, () => {
    const movies = range(RANGE_OFFSET, RANGE_OFFSET + MOVIES_PAGE_LIMIT * 2).map((id) => ({
      id: id.toString(),
      preview: `fakePreview`,
      videoPreview: `fakeVideoPreview`,
    }));
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <MoviesList movies={movies}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });
});
