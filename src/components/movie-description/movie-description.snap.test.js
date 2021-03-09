import React from 'react';

import {render} from '@testing-library/react';

import OperationStatus from '../../constants/operation-status';

import {MovieDescription} from './movie-description';

describe(`MovieDescription component`, () => {
  it(`Should render according to the snapshot with only movie id provider`, () => {
    Object.values(OperationStatus).forEach((loginStatus) => {
      if (loginStatus !== OperationStatus.RESOLVED) {
        const movie = {
          id: `fakeId`,
        };
        const {container} = render(<MovieDescription loginStatus={loginStatus} movie={movie}/>);
        expect(container).toMatchSnapshot();
      }
    });
  });

  it(`Should render according to the snapshot with extra information provider`, () => {
    Object.values(OperationStatus).forEach((loginStatus) => {
      if (loginStatus !== OperationStatus.RESOLVED) {
        const movie = {
          id: `fakeId`,
          title: `fakeTitle`,
          genre: `fakeGenre`,
          year: 2021,
        };
        const {container} = render((
          <MovieDescription loginStatus={loginStatus} movie={movie}>
            fakeChildren
          </MovieDescription>
        ));
        expect(container).toMatchSnapshot();
      }
    });
  });
});
