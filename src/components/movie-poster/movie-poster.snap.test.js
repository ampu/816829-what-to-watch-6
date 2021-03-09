import React from 'react';

import {render} from '@testing-library/react';

import MoviePoster from './movie-poster';
import PosterSize from '../../constants/poster-size';

describe(`MoviePoster component`, () => {
  it(`Should render according to the snapshot with no movie poster provided`, () => {
    const {container} = render(<MoviePoster/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with movie poster provided`, () => {
    const movie = {
      title: `fakeTitle`,
      poster: `fakePoster`,
    };
    const {container} = render(<MoviePoster movie={movie}/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with movie poster and small poster size provided`, () => {
    const movie = {
      title: `fakeTitle`,
      poster: `fakePoster`,
    };
    const {container} = render(<MoviePoster movie={movie} size={PosterSize.SMALL}/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with movie poster and big poster size provided`, () => {
    const movie = {
      title: `fakeTitle`,
      poster: `fakePoster`,
    };
    const {container} = render(<MoviePoster movie={movie} size={PosterSize.BIG}/>);
    expect(container).toMatchSnapshot();
  });
});
