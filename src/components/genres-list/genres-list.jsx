import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import GenresListItem from './genres-list-item';
import {setGenre} from '../../store/actions/genre-actions';
import {selectGenre, selectGenres} from '../../store/selectors/genre-selectors';

import movieType from '../../typings/movie-type';

const GenresList = ({genres = [], activeGenre = ``, onGenreChange}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <GenresListItem key={genre}
          genre={genre}
          onGenreChange={onGenreChange}
          isActive={genre === activeGenre}/>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(movieType.genre),
  activeGenre: movieType.genre,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genres: selectGenres(state),
  activeGenre: selectGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(setGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
