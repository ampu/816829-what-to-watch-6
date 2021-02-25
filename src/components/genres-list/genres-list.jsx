import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import GenresListItem from './genres-list-item';
import {setGenre, syncGenreMovies} from '../../store/actions';

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
  genres: PropTypes.arrayOf(PropTypes.string),
  activeGenre: PropTypes.string,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genres: state.genres,
  activeGenre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(setGenre(genre));
    dispatch(syncGenreMovies());
  },
});

export {GenresList};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
