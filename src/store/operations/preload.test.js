import {preload} from './preload';
import {getMovies} from './movie-operations';
import {getLogin} from './user-operations';

describe(`Preload asynchronous operation`, () => {

  it(`Should make a call to getMovies() and a call to getLogin()`, () => {
    const dispatch = jest.fn();
    const preloadLoader = preload();

    return preloadLoader(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(getMovies());
        expect(dispatch).toHaveBeenCalledWith(getLogin());
      });
  });
});
