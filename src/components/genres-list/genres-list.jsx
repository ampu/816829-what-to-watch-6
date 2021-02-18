import React from 'react';
import PropTypes from 'prop-types';

import Genre from '../../constants/genre';

import GenresListItem from './genres-list-item';


const GenresList = ({activeGenre}) => {
  return (
    <ul className="catalog__genres-list">
      {Object.values(Genre).map((genre) => <GenresListItem key={genre} title={genre} isActive={genre === activeGenre}/>)}
    </ul>
  );
};

GenresList.propTypes = {
  activeGenre: PropTypes.oneOf(Object.values(Genre)),
};


export default GenresList;
