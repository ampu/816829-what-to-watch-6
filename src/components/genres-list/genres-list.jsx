import React from 'react';
import {useParams} from 'react-router-dom';

import {GENRES} from '../../constants/genre';
import {getGenreBySlug} from '../../utils/genre-util';

import GenresListItem from './genres-list-item';

const GenresList = () => {
  const activeGenre = getGenreBySlug(useParams().genre);

  return (
    <ul className="catalog__genres-list">
      {GENRES.map((genre) => <GenresListItem key={genre.slug} genre={genre} isActive={genre === activeGenre}/>)}
    </ul>
  );
};

export default GenresList;
